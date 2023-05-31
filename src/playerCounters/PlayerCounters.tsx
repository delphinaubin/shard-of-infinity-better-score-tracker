import "./PlayerCounters.css";
import {PlayerCounter} from "./playerCounter/PlayerCounter";
import classNames from "classnames";
import {HeroName} from "../heroes";

interface PlayerCountersProps {
  hero: HeroName;
}

const getHeroClass = (hero: HeroName): string => {
  switch (hero) {
    case "Decima":
      return "Decima";
    case "Hakseity":
      return "Hakseity";
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
