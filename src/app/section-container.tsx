import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

const SectionContainer = ({
  name,
  id,
  icon: Icon,
  children,
}: {
  name: string;
  id: string;
  icon: IconType;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className="p-2 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2"
    >
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <Icon size={20} />
        <span>{name}</span>
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;
