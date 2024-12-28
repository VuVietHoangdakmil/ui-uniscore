import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { cn } from "@/utils/helper/class.helper";

// Register the plugin
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Filler,

  ChartDataLabels,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
const WrapperChart: React.FC<Props> = ({ children, className, style }) => {
  return (
    <div style={style} className={cn("h-[250px] w-full", className)}>
      {children}
    </div>
  );
};
export default WrapperChart;
