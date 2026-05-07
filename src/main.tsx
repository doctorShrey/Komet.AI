/**
 * @file main.tsx
 * @brief React application bootstrap and DOM rendering logic.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-04
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Bootstraps the React application and mounts it to the DOM.
 * Includes error handling if the root element is missing.
 * 
 * @throws {Error} If the root element with ID 'root' is not found in the document.
 */
function bootstrapApplication(): void {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Failed to find the root element. Ensure there is an element with id='root' in your HTML.");
  }

  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Execute the bootstrap function to start the application
bootstrapApplication();
