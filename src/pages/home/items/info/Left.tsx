import formatDate from "@/utils/helper/formatdate.helper";
import { PiStarThin } from "react-icons/pi";

type PropName = {
  playerId: string;
  teamId: string;
  playerName: string;
  teamName: string;
  contractDate: number;
};
const Name: React.FC<PropName> = ({
  playerId,
  playerName,
  teamName,
  teamId,
  contractDate,
}) => {
  console.log(teamId);
  return (
    <div className="relative">
      <PiStarThin className="absolute right-0 top-4" />

      <div className="flex items-center h-full ">
        <img
          className="rounded-full w-[90px] h-[90px] "
          src={`https://img.uniscore.com/football/player/${playerId}/image/medium`}
        />
        <div className="ml-[8px]">
          <div className="font-[500] text-[32px]">{playerName}</div>
          <div className="flex items-center">
            <img
              className="rounded-full w-[40px] h-[40px] "
              // src={`https://img.uniscore.com/football/team/${teamId}/image/small`}
              src="./Icons/Atletico Madrid.svg"
            />
            <div className="ml-[2px]">
              <div className="font-[600] text-[13px] ">{teamName}</div>
              <div className="font-[400] text-[11px] text-text-primary ">
                Contract until {formatDate(contractDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Name;
