"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { AITool } from "@/data/aiTools";

interface AIToolModalProps {
  tool: AITool | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AIToolModal = ({ tool, open, onOpenChange }: AIToolModalProps) => {
  // Use cases are rendered as static, non-interactive blocks per request.

  if (!tool) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[min(1200px,98vw)] overflow-y-auto">
        <DialogHeader className="mb-2 pb-0">
          <div className="flex items-center gap-3 mb-0">
            <div className="text-4xl">{tool.icon}</div>
            <DialogTitle className="text-2xl">{tool.name}</DialogTitle>
          </div>
          <DialogDescription className="text-base mb-2 leading-snug">
            {tool.description}
          </DialogDescription>
        </DialogHeader>

        {/* add spacing so Key Features sits below the description */}
        <div className="space-y-6 pt-4 mt-1">
          <div>
            <h3 className="text-lg font-semibold mb-0">Key Features</h3>
            <ul className="space-y-0">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 mb-0">
                  <span className="text-primary mt-0.5 flex-shrink-0 w-5">✓</span>
                  <span className="text-left">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
            <div className="space-y-3">
              {tool.useCases.map((uc, idx) => {
                const lines = (uc || "").split(/\n+/).map((l) => l.trim()).filter(Boolean);
                const title = lines[0] ?? `Use Case ${idx + 1}`;
                const bullets = lines.length > 1 ? lines.slice(1) : [];

                return (
                  <div key={idx} className="p-3 border border-slate-100 rounded-md bg-muted/50">
                    <div className="font-medium">{title}</div>
                    {bullets.length > 0 && (
                      <ol className="list-decimal list-inside mt-2 text-sm text-muted-foreground space-y-1">
                        {bullets.map((b, i) => (
                          <li key={i} className="leading-snug">{b.replace(/^\d+\.\s*/, "")}</li>
                        ))}
                      </ol>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
