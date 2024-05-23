import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Group A", value: 2400, color: "#914F00" },
  { label: "Group B", value: 4567, color: "#344BFD" },
  { label: "Group C", value: 1398, color: "#F75274" },
  { label: "Group D", value: 9800, color: "#F4A79D" },
  { label: "Group E", value: 3908, color: "#FF0000" },
];

export default function PieChartDashboard({ data }) {
  return (
    <div className="mt-10 flex justify-center items-center">
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 50,
            outerRadius: 100,
            cx: "75%", // Center x-coordinate
            cy: "50%", // Center y-coordinate
          },
        ]}
        height={200}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </div>
  );
}
