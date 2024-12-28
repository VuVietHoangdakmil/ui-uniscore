import { cn } from "@/utils/helper/class.helper";
type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full h-full sm:pl-4 sm:pr-4   px-1 rounded-md bg-[#020C20]",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
