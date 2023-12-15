import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { TypeHeadingProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}  : TypeHeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <p className="text-3xl font-bold">
          {title}
        </p>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Heading;