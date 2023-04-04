import "./CounterDelta.css";

export interface CounterDeltaProps {
  delta: number;
}

export const CounterDelta = (props: CounterDeltaProps) => {
  const { delta } = props;
  if (delta === 0) {
    return null;
  }

  const plus = delta > 0 ? "+" : "";

  return (
    <div className="CounterDelta">
      {plus}
      {delta}
    </div>
  );
};
