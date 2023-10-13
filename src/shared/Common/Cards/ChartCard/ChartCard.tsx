import CircularChart from "shared/Common/Charts/CircularChart";
import classNames from "classnames";
const ChartCard = ({ chartOptions, chartIcon }) => {
  const chartClass = classNames(
    `${chartOptions.bgColor} text-[${chartOptions.textColor}] rounded-[14px]  font-semibold flex flex-col justify-center items-center py-5`
  );
  return (
    <div className={chartClass}>
      {chartIcon}
      <CircularChart
        title={chartOptions.title}
        textColor={chartOptions.textColor}
        strokeColor={chartOptions.strokeColor}
      />
    </div>
  );
};

export default ChartCard;
