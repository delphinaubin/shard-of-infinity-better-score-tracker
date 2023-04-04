import { CounterTextSteps } from "./getPropsFromType";

export const getCounterTextClassFromSteps =
  (steps: CounterTextSteps) =>
  (counterValue: number): string => {
    const step = steps.reverse().find((s) => counterValue <= s.max);
    if (!step) {
      throw new Error(
        `Cannot find step matching to the given value (${counterValue})`
      );
    }
    return step.cssClass;
  };
