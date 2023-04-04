export type CounterType = "life" | "mastery";

interface CounterProps {
  cssClass: string;
  max: number;
  start: number;
  steps: CounterTextSteps;
}

export type CounterTextSteps = { max: number; cssClass: string }[];
export const getPropsFromType = (type: CounterType): CounterProps => {
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
