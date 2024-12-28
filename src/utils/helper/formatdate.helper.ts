import dayjs from "dayjs";
export default function formatDate  ( data: string | number | Date ){
     const contractDateCus = dayjs(data);
    return `${contractDateCus.format("DD")} ${contractDateCus.format("MMM")} ${contractDateCus.format("YYYY")}`
}