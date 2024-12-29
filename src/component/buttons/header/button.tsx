import "./index.scss";
import { cn } from "@/utils/helper/class.helper";
type props = {
  className?: string;
  centerItem?: boolean;
};
const Button: React.FC<props> = ({ className, centerItem }) => {
  return (
    <div
      className={cn(
        "min-h-[38px] p-[1px]    hover:opacity-50 hover:cursor-pointer  rounded-[87px]  bg-gradient-border",
        className
      )}
    >
      <div
        className={cn(
          "h-full bg-gradient-button flex items-center rounded-[87px] p-2 flex-wrap w-full",
          { "justify-center": centerItem }
        )}
      >
        <img width={20} height={20} src="./Icons/Football-icon.svg" />
        <div className={`text-css ml-2`}>FOOTBALL</div>
      </div>
    </div>
  );
};
export default Button;
