/**
 * @file App.tsx
 * @brief Application entry point and core routing configuration.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-01
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Initialize the React Query client for data fetching and caching
const queryClient = new QueryClient();

/**
 * Router component that handles application navigation.
 * Uses wouter for lightweight client-side routing.
 * 
 * @returns {JSX.Element} The configured application routes.
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Main App component that wraps the application in necessary providers.
 * - QueryClientProvider: Manages server state.
 * - TooltipProvider: Enables tooltip functionality globally.
 * - WouterRouter: Enables client-side routing.
 * - Toaster: Provides global toast notifications.
 * 
 * @returns {JSX.Element} The root application structure with providers.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
