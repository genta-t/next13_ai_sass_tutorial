import { TypeUseProModalStore } from "@/lib/types";
import { create } from "zustand";

export const useProModal = create<TypeUseProModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

