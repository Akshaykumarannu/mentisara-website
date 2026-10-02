import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "info";
  title?: string;
  children: React.ReactNode;
}

export function Alert({ variant = "info", title, children, className, ...props }: AlertProps) {
  const styles = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    error: "bg-red-50 border-red-200 text-red-900",
    info: "bg-sand-100 border-sand-300 text-forest-900",
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />,
    error: <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />,
    info: <Info className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />,
  };

  return (
    <div
      className={cn("flex items-start gap-3 p-4 rounded-2xl border text-sm leading-relaxed", styles[variant], className)}
      {...props}
    >
      {icons[variant]}
      <div>
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <div>{children}</div>
      </div>
    </div>
  );
}
