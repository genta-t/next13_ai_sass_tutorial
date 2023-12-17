import { LucideIcon } from "lucide-react";

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
  apiLimitCount: number;
  isPro: boolean;
}

export type TypeUseProModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type TypeSubscriptionButton = {
  isPro: boolean;
}