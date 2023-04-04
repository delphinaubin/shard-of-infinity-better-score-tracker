import classNames from "classnames";
import "./PlayerCounter.css";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import { CounterDelta } from "./counterDelta/CounterDelta";
import { CounterType, getPropsFromType } from "./getPropsFromType";
import { getCounterTextClassFromSteps } from "./getCounterTextClassFromSteps";

interface PlayerCounterProps {
  type: CounterType;
}

export const PlayerCounter = (props: PlayerCounterProps) => {
  const { type } = props;

  const { cssClass, max, start, steps } = getPropsFromType(type);

  const [counterValue, setCounterValue] = useState(start);
  const [counterDelta, setCounterDelta] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateCounterValueFromDelta = useCallback(
    debounce((value: number) => {
      setCounterValue(value);
      setCounterDelta(0);
    }, 1800),
    []
  );

  const incrementCounterValue = () => {
    const newCounterDelta = counterDelta + 1;
    setCounterDelta(newCounterDelta);
    updateCounterValueFromDelta(Math.min(counterValue + newCounterDelta, max));
  };

  const decrementCounterValue = () => {
    const newCounterDelta = counterDelta - 1;
    setCounterDelta(newCounterDelta);
    updateCounterValueFromDelta(Math.max(counterValue + newCounterDelta, 0));
  };

  const getCounterCssClass = getCounterTextClassFromSteps(steps);

  return (
    <div className={classNames("Counter", cssClass)}>
      <CounterDelta delta={counterDelta} />
      <div className="CounterButton BtAdd" onClick={incrementCounterValue}>
        +
      </div>
      <span className={getCounterCssClass(counterValue)}>{counterValue}</span>
      <div className="CounterButton BtRemove" onClick={decrementCounterValue}>
        -
      </div>
    </div>
  );
};
