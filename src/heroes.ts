export type HeroName =
  | "Decima"
  | "Hakseity"
  | "Hegiminus"
  | "Ko syn wu"
  | "Rez";
export interface Hero {
  name: HeroName;
  cssClass: string;
}
export const HEROES: ReadonlyArray<Hero> = [
  {
    name: "Decima",
    cssClass: "Decima",
  },
  {
    name: "Hakseity",
    cssClass: "Hakseity",
  },
  {
    name: "Hegiminus",
    cssClass: "Hegiminus",
  },
  {
    name: "Ko syn wu",
    cssClass: "KoSynWu",
  },
  {
    name: "Rez",
    cssClass: "Rez",
  },
] as const;
