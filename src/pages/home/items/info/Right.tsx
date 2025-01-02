import { getAgeCurrent } from "@/utils/actions";
import formatDate from "@/utils/helper/formatdate.helper";

type PropsContentGeral = {
  title: string;
  src: string;
  content: { title1: string; title2?: string };
};
const ContentGeral: React.FC<PropsContentGeral> = ({ title, src, content }) => {
  return (
    <div className="flex flex-col justify-center p-2 pr-4 ">
      <div className="text-[11px] font-[400] text-[#AAAAAA]">{title}</div>
      <div className="flex items-center mt-[10px]">
        <img className="w-[24px] h-[24px]" src={src} />
        <div className="ml-[10px]">
          <div className="font-[700] text-[13px] ">{content.title1}</div>
          {content.title2 && (
            <div className="text-[11px] font-[400] text-[#AAAAAA]">
              {content.title2}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type GeneralType = {
  height: number;
  nationalityName: string;
  preferredFoot: string;
  birthdate: number;
  position: string;
  shirtNumber: number;
};
const General: React.FC<GeneralType> = ({
  height,
  position,
  shirtNumber,
  nationalityName,
  preferredFoot,
  birthdate,
}) => {
  return (
    <div className="flex  flex-wrap ">
      <div className="basis-1/2 sm:border-l-[1.5px]  boder-t-[1.5px] border-b-[1.5px] boder-r[1.5px] border-custome-border">
        <ContentGeral
          src={"./Icons/Spain.svg"}
          title="Nationality"
          content={{ title1: nationalityName }}
        />
      </div>
      <div className="basis-1/2 border-l-[1.5px] boder-t-[1.5px] border-b-[1.5px] boder-r[1.5px] border-custome-border">
        <ContentGeral
          src={"./Icons/dateOfBirth.svg"}
          title="Date of Birth"
          content={{
            title1: formatDate(birthdate),
            title2: getAgeCurrent(birthdate) + " years old",
          }}
        />
      </div>
      <div className="basis-1/2 sm:border-l-[1.5px] boder-t-[1.5px] border-b-[1.5px] boder-r[1.5px] border-custome-border">
        <ContentGeral
          src={"./Icons/Height.svg"}
          title="Height"
          content={{ title1: height + " cm" }}
        />
      </div>
      <div className="basis-1/2 border-l-[1.5px] boder-t-[1.5px] border-b-[1.5px] boder-r[1.5px] border-custome-border">
        <ContentGeral
          src={"./Icons/Foot.svg"}
          title="Preferred foot"
          content={{ title1: preferredFoot }}
        />
      </div>
      <div className="basis-1/2 sm:border-l-[1.5px] boder-t-[1.5px]  boder-r[1.5px] border-custome-border">
        <ContentGeral
          src={"./Icons/Jersey.svg"}
          title="Jersey number"
          content={{ title1: shirtNumber + "" }}
        />
      </div>
      <div className="basis-1/2 border-l-[1.5px] boder-t-[1.5px]  boder-r[1.5px] border-custome-border">
        {" "}
        <ContentGeral
          src={"./Icons/icons-soccer-field.png"}
          title="Position"
          content={{ title1: position }}
        />
      </div>
    </div>
  );
};
export default General;
