interface TimerItemProps {
  timeValue: number;
  label: string;
}

const TimerItem = ({ timeValue, label }: TimerItemProps) => {
  return (
    <div>
      <time>{timeValue}</time>
      <span>{label}</span>
    </div>
  );
};

export default TimerItem;
