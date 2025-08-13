import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

const SectionContainer = ({
  id,
  name,
  icon: Icon,
  className,
  children,
}: {
  id: string;
  name?: string;
  icon?: IconType;

  className?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className={cn(
        "p-2 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2 ",
        className
      )}
    >
      {name && Icon ? (
        <div className="flex items-center justify-center gap-2 bg-background px-4 py-3 rounded-2xl w-full md:w-fit text-primary">
          <Icon size={20} />
          <span>{name}</span>
        </div>
      ) : null}
      {children}
    </section>
  );
};

export default SectionContainer;
