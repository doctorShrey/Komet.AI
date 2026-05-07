<?php
// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// Include config and PHPMailer
require_once 'config.php';
require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Parse JSON input
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit();
}

$action = $data['action'] ?? '';

// Validate email
if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address"]);
    exit();
}

$visitorEmail = $data['email'];

function sendEmails($adminSubject, $adminBody, $userSubject, $userBody, $visitorEmail) {
    // 1. Send to Admin
    $mailAdmin = new PHPMailer(true);
    try {
        $mailAdmin->isSMTP();
        $mailAdmin->Host       = SMTP_HOST;
        $mailAdmin->SMTPAuth   = true;
        $mailAdmin->Username   = SMTP_USER;
        $mailAdmin->Password   = SMTP_PASS;
        $mailAdmin->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mailAdmin->Port       = SMTP_PORT;

        $mailAdmin->setFrom(SMTP_USER, 'Komet.AI System');
        $mailAdmin->addAddress(ADMIN_EMAIL);
        $mailAdmin->addReplyTo($visitorEmail);

        $mailAdmin->isHTML(true);
        $mailAdmin->Subject = $adminSubject;
        $mailAdmin->Body    = $adminBody;

        $mailAdmin->send();
    } catch (Exception $e) {
        error_log("Admin Mail Error: {$mailAdmin->ErrorInfo}");
    }

    // 2. Send Auto-Response to User
    $mailUser = new PHPMailer(true);
    try {
        $mailUser->isSMTP();
        $mailUser->Host       = SMTP_HOST;
        $mailUser->SMTPAuth   = true;
        $mailUser->Username   = SMTP_USER;
        $mailUser->Password   = SMTP_PASS;
        $mailUser->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mailUser->Port       = SMTP_PORT;

        $mailUser->setFrom(SMTP_USER, 'The Komet.AI Team');
        $mailUser->addAddress($visitorEmail);

        $mailUser->isHTML(true);
        $mailUser->Subject = $userSubject;
        $mailUser->Body    = $userBody;

        $mailUser->send();
    } catch (Exception $e) {
        error_log("User Mail Error: {$mailUser->ErrorInfo}");
    }
}

function generateAdminTable($data) {
    $html = '<table border="1" cellpadding="5" style="border-collapse: collapse;">';
    foreach($data as $key => $value) {
        if($key === 'action') continue;
        $html .= "<tr><td><strong>" . htmlspecialchars($key) . "</strong></td><td>" . htmlspecialchars($value) . "</td></tr>";
    }
    $html .= '</table>';
    return $html;
}

if ($action === 'webinar') {
    $childName = $data['childName'] ?? 'Student';
    
    $adminSubject = "New Webinar Registration: " . $childName;
    $adminBody = "<h2>New Webinar Registration</h2>" . generateAdminTable($data);

    $userSubject = "Webinar Registration Confirmed - Komet.AI";
    $userBody = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
      <h2>Thank you for registering, {$childName}!</h2>
      <p>We are excited to have you join our upcoming webinar.</p>
      <p><strong>Webinar Details:</strong></p>
      <ul>
        <li><strong>Topic:</strong> Introduction to Komet.AI</li>
        <li><strong>Date:</strong> Saturday, May 18 at 5:00 PM IST</li>
        <li><strong>Link:</strong> (Link will be provided prior to the event)</li>
      </ul>
      <p>If you have any questions in the meantime, feel free to reply directly to this email.</p>
      <br>
      <p>Best regards,<br>The Komet.AI Team</p>
    </div>
    ";

    sendEmails($adminSubject, $adminBody, $userSubject, $userBody, $visitorEmail);

    http_response_code(200);
    echo json_encode(["message" => "Webinar registration processed"]);

} elseif ($action === 'apply') {
    $parentName = $data['parentName'] ?? 'Parent';
    $childName = $data['childName'] ?? 'Student';

    $adminSubject = "New Cohort Application: " . $childName;
    $adminBody = "<h2>New Cohort Application</h2>" . generateAdminTable($data);

    $userSubject = "Application Received - Komet.AI";
    $userBody = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
      <h2>Application Received!</h2>
      <p>Hi {$parentName},</p>
      <p>Thank you for submitting an application for {$childName} to join Komet.AI.</p>
      <p>Our team is currently reviewing your application. We will reach out within the next 2-3 business days with the next steps.</p>
      <p>If you have any immediate questions, simply reply to this email.</p>
      <br>
      <p>Best regards,<br>The Komet.AI Team</p>
    </div>
    ";

    sendEmails($adminSubject, $adminBody, $userSubject, $userBody, $visitorEmail);

    http_response_code(200);
    echo json_encode(["message" => "Application processed"]);

} else {
    http_response_code(400);
    echo json_encode(["error" => "Invalid action specified"]);
}
