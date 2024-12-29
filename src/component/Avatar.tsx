import { cn } from "@/utils/helper/class.helper";
import { CiUser } from "react-icons/ci";

type Props = {
  className?: string;
};

const Avartar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[36px] h-[36px]  hover:opacity-50 hover:cursor-pointer rounded-full  flex items-center justify-center bg-[#02020F26]",
        className
      )}
    >
      <CiUser fontSize={20} />
    </div>
  );
};

export default Avartar;
