"use client";

import { Dialog } from "radix-ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceDevDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ServiceDevDialog({ open, onOpenChange }: ServiceDevDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-900/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2",
            "rounded-2xl border border-slate-100 bg-white p-6 shadow-xl outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
        >
          <Dialog.Title className="text-center text-lg font-semibold tracking-tight text-slate-900">
            Service in dev
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-center text-sm font-normal text-slate-500">
            This feature is under development and will be available soon.
          </Dialog.Description>
          <div className="mt-6 flex justify-center">
            <Dialog.Close asChild>
              <Button
                className="h-10 min-w-[120px] rounded-full bg-[#5D53D6] text-white hover:bg-[#4c44b5]"
              >
                OK
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
