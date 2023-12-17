import { LucideIcon } from "lucide-react";
import { type } from "os";

export type TypeHeadingProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export type TypeEmptyProps = {
  label: string;
}

export type TypeApiLimitCountProps = {
  apiLimitCount?: number;
}

export type TypeUseProModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}