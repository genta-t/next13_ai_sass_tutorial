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

export type TypeSlideBarProps = {
  apiLimitCount: number;
}

export type TypeFreeCounterProps = {
  apiLimitCount: number;
}