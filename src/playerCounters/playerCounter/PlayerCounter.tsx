import classNames from "classnames";
import "./PlayerCounter.css";
import { useCallback, useState } from "react";
type CounterType = "life" | "mastery";

interface PlayerCounterProps {
  type: CounterType;
}

const getClassNameFromType = (type: CounterType): string => {
  if (type === "life") {
    return "PlayerLife";
  }
  return "PlayerMastery";
};

interface CounterProps {
  cssClass: string;
  max: number;
  start: number;
  steps: CounterTextSteps;
}

type CounterTextSteps = { max: number; cssClass: string }[];

const getPropsFromType = (type: CounterType): CounterProps => {
  if (type === "life") {
    return {
      cssClass: "PlayerLife",
      max: 50,
      start: 50,
      steps: [
        { max: 50, cssClass: "highLife" },
        { max: 36, cssClass: "middleLife" },
        { max: 20, cssClass: "lowLife" },
      ],
    };
  }
  return {
    cssClass: "PlayerMastery",
    max: 30,
    start: 0,
    steps: [
      { max: 30, cssClass: "maxMastery" },
      { max: 29, cssClass: "highMastery" },
      { max: 19, cssClass: "middleMastery" },
      { max: 9, cssClass: "lowMastery" },
    ],
  };
};

const getCounterTextClassFromSteps =
  (steps: CounterTextSteps) =>
  (counterValue: number): string => {
    const step = steps.reverse().find((s) => counterValue <= s.max);
    if (!step) {
      throw `Cannot find step matching to the given value (${counterValue})`;
    }
    return step.cssClass;
  };

export const PlayerCounter = (props: PlayerCounterProps) => {
  const { type } = props;

  const { cssClass, max, start, steps } = getPropsFromType(type);
  const [counterValue, setCounterValue] = useState(start);

  const incrementCounterValue = () => {
    setCounterValue(Math.min(max, counterValue + 1));
  };

  const decrementCounterValue = () => {
    setCounterValue(Math.max(0, counterValue - 1));
  };

  const getCounterCssClass = getCounterTextClassFromSteps(steps);

  return (
    <div className={classNames("Counter", cssClass)}>
      <div className="CounterButton BtAdd" onClick={incrementCounterValue}>
        +
      </div>
      <span className={getCounterCssClass(counterValue)}>
        { counterValue }
      </span>
      <div className="CounterButton BtRemove" onClick={decrementCounterValue}>
        -
      </div>
    </div>
  );
};
