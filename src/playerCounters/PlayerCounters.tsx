import "./PlayerCounters.css";
import { PlayerCounter } from "./playerCounter/PlayerCounter";
import classNames from "classnames";

type Hero = "Decima" | "Hakeseity" | "Hegiminus" | "Ko syn wu" | "Rez";

interface PlayerCountersProps {
  hero: Hero;
}

const getHeroClass = (hero: Hero): string => {
  switch (hero) {
    case "Decima":
      return "Decima";
    case "Hakeseity":
      return "Hakeseity";
    case "Hegiminus":
      return "Hegiminus";
    case "Ko syn wu":
      return "KoSynWu";
    case "Rez":
      return "Rez";
  }
};

export const PlayerCounters = (props: PlayerCountersProps) => {
  const { hero } = props;
  return (
    <div className={classNames("PlayerCounterContainer", getHeroClass(hero))}>
      <PlayerCounter type="life" />
      <PlayerCounter type="mastery" />
    </div>
  );
};
