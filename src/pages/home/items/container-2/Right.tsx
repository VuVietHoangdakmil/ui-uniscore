const lists = [
  { name: "Chelsea", date: "30 Jun 2020" },
  { name: "Chelsea", date: "30 Jun 2020" },
  { name: "Chelsea", date: "30 Jun 2020" },
  { name: "Chelsea", date: "30 Jun 2020" },
  { name: "Chelsea", date: "30 Jun 2020" },
];
import { cn } from "@/utils/helper/class.helper";
const Right: React.FC = () => {
  return (
    <div className="sm:border-l-[1.5px] border-custome-border pl-2  sm:pr-4 pr-1">
      {lists.map((item, index, arr) => (
        <div
          key={index}
          className={cn("flex items-center justify-between flex-wrap", {
            "border-b-[1px] border-custome-border": index < arr.length - 1,
          })}
        >
          <div className="flex items-center py-2">
            <img src="./Icons/chelsea.png" className="h-[36px] w-[36px] mr-3" />
            <div className="font-[400]">
              <h4 className="text-13">{item.name}</h4>
              <p className="text-[11px] text-text-primary">{item.date}</p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <div className="h-[1px] w-[4px] bg-[#48FF5A] mb-3"></div>
            <p className="font-[400] text-[11px] text-[#48FF5A]">End of lane</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Right;
