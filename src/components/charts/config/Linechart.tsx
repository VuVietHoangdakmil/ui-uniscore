import { forwardRef } from "react";

import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
export type options = ChartOptions<"line">;
export type data = ChartData<"line">;
type Props = {
  options: options;
  data: data;
};
const LineT = forwardRef<any, Props>(({ options, data }, ref) => {
  return <Line ref={ref} options={options} data={data} />;
});
export default LineT;
