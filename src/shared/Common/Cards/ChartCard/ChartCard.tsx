import CircularChart from "shared/Common/Charts/CircularChart";
import classNames from "classnames";
const ChartCard = ({ title, bgColor, textColor, accentColor, chartIcon }) => {
  const chartClass = classNames(
    `${bgColor} rounded-[14px] text-[${textColor}] font-semibold flex flex-col justify-center items-center py-5`
  );
  return (
    <div className={chartClass}>
      {chartIcon}
      <CircularChart
        title={title}
        textColor={textColor}
        accentColor={accentColor}
      />
    </div>
  );
};

export default ChartCard;
