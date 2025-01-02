import WrapperChart from "@/components/charts/config/wrapperChart";
import LineChart, {
  options as LineChartT,
} from "@/components/charts/config/Linechart";

const optionsLine: LineChartT = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      formatter: (value: number) => {
        console.log(value);
        return "";
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Ẩn đường kẻ grid trên trục X
      },
      ticks: {
        color: "white", // Màu của các nhãn trên trục X
      },
    },
    y: {
      position: "right",
      ticks: {
        color: "white", // Màu của các nhãn trên trục Y
        callback: function (value) {
          return `${value} M`; // Thêm ký hiệu $ trước giá trị
        },
      },
    },
  },
};

const data = {
  labels: ["10'", "13'", "14'", "17'", "20'", "22'"],
  datasets: [
    {
      data: [66, 44, 22, 50, 90, 100],
      borderColor: " #2187E5",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      tension: 0.4, // Đường cong
      pointStyle: "circle",
      pointRadius: 5,
      pointBackgroundColor: "#ffff",
      fill: true,
    },
  ],
};
const listsrc = [
  "./Icons/Spain.svg",
  "./Icons/Spain.svg",
  "./Icons/Spain.svg",
  "./Icons/Spain.svg",
  "./Icons/Spain.svg",
  "./Icons/Spain.svg",
  "./Icons/Spain.svg",
  "./Icons/Spain.svg",
];
const Left: React.FC = () => {
  return (
    <div>
      <div className="font-[700] my-4 text-[14px]"> TRANFER VALUE</div>
      <WrapperChart
        style={{
          background:
            "linear-gradient(124.54deg, rgba(10, 31, 85, 0.4) 0%, rgba(16, 44, 115, 0.4) 27.66%, rgba(12, 26, 76, 0.4) 70.02%)",
        }}
        className="border-[1px]  border-blue-900 h-[192px] xl:w-[60%] w-full max-w-[100%] rounded-md p-3 overflow-hidden  pb-[34px]"
      >
        <div className="flex justify-between mb-2">
          {listsrc.map((src, index) => (
            <img src={src} key={index} />
          ))}
        </div>
        <LineChart options={optionsLine} data={data} />
      </WrapperChart>
      <div className="flex justify-between py-5 flex-wrap">
        <div>
          <div className="flex items-center mb-3">
            <div
              className="border-[1px] border-dashed  w-5 mr-4"
              style={{ borderColor: "#F6B500" }}
            ></div>
            <div className="text-[12px] font-[400]  text-text-primary">
              Current play value
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="border-[1px]  w-5 mr-4"
              style={{ borderColor: "#2187E5" }}
            ></div>
            <div className="text-[12px] font-[400]  text-text-primary">
              Tranfer free
            </div>
          </div>
        </div>

        <div>
          <div className="text-[12px] font-[600] mb-3  text-text-primary">
            11.6M
          </div>

          <div className="text-[12px] font-[600]  text-text-primary">
            (Highest) 66M
          </div>
        </div>
      </div>
    </div>
  );
};
export default Left;
