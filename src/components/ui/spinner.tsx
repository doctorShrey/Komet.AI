/**
 * @file spinner.tsx
 * @brief Reusable UI component for spinner functionality.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-01
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
