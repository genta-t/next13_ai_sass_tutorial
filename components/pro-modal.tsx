"use client"

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { tools } from "@/lib/data";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";
import { Button } from "./ui/button";

const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              天才をアップグレード
              <Badge
                className="uppercase text-sm py-1"
                variant="premium"
              >
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((t, i) =>(
              <Card
                key={i}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", t.bgColor)}>
                    <t.icon className={cn("w-6 h-6", t.color)} /> 
                  </div>
                  <p className="font-semibold text-sm">
                    {t.label}
                  </p>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            size="lg"
            variant="premium"
            className="w-full"
          >
            アップグレード <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal;