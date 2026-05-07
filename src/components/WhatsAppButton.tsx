import { FaWhatsapp } from "react-icons/fa";

/**
 * WhatsAppButton Component
 * A floating action button fixed to the bottom right of the screen.
 * Clicking it opens a new WhatsApp chat with the specified number.
 */
export function WhatsAppButton() {
  const phoneNumber = "919818616719";
  // The correct WhatsApp wa.me link format
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
