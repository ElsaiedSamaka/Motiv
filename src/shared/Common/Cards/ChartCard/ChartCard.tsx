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

const CharIcon = () => {
  return (
    <span
      className={classNames(
        `bg-[#242731] inline-flex justify-center items-center w-10 h-10 rounded-full`
      )}
    >
      <svg
        width={14}
        height={21}
        viewBox="0 0 14 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.454168 11.6784L8.25105 0.882735C8.76678 0.168648 9.89342 0.638777 9.74861 1.50764L8.6666 7.99965H12.8701C13.55 7.99965 13.9437 8.76979 13.5457 9.32089L5.74883 20.1166C5.2331 20.8307 4.10646 20.3605 4.25127 19.4917L5.33327 12.9997H1.12974C0.449928 12.9997 0.0561475 12.2295 0.454168 11.6784Z"
          fill="red"
        />
      </svg>
    </span>
  );
};

export default ChartCard;
