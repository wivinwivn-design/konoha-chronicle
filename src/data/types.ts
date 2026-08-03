export type Character = {
  slug: string;
  name: string;
  japaneseName: string;
  nickname: string;
  clan: string;
  village: string;
  team: string;
  rank: string;
  family: string[];
  mentor: string[];
  students: string[];
  birthday: string;
  age: string;
  height: string;
  chakraNature: string[];
  kekkeiGenkai: string;
  summoning: string;
  weapons: string[];
  signatureJutsu: string[];
  ultimate: string[];
  abilities: string[];
  strengths: string[];
  weaknesses: string[];
  personality: string;
  goals: string;
  allies: string[];
  enemies: string[];
  animeDebut: string;
  mangaDebut: string;
  role: string;
  development: string;
  battles: string[];
  status: "Alive" | "Deceased" | "Unknown";
  related: string[];
  affiliation: "Konoha" | "Suna" | "Kiri" | "Kumo" | "Iwa" | "Akatsuki" | "Otogakure" | "Other";
  featured?: boolean;
};

export type Jutsu = {
  slug: string;
  name: string;
  japaneseName: string;
  rank: string;
  type: string;
  classification: string;
  chakraNature: string;
  description: string;
  handSigns: string;
  creator: string;
  users: string[];
  strengths: string[];
  weaknesses: string[];
  firstAppearance: string;
  featured?: boolean;
};

export type Village = {
  slug: string;
  name: string;
  japaneseName: string;
  country: string;
  symbolColor: string;
  history: string;
  leaders: string[];
  geography: string;
  notableShinobi: string[];
  clans: string[];
  techniques: string[];
  events: string[];
};

export type Clan = {
  slug: string;
  name: string;
  village: string;
  history: string;
  members: string[];
  kekkeiGenkai: string;
  techniques: string[];
  relationships: string;
  events: string[];
};

export type AkatsukiMember = {
  slug: string;
  name: string;
  ring: string;
  origin: string;
  biography: string;
  abilities: string[];
  goals: string;
  partners: string[];
  battles: string[];
  death: string;
  legacy: string;
};

export type Hokage = {
  slug: string;
  order: string;
  name: string;
  title: string;
  reign: string;
  biography: string;
  leadership: string;
  abilities: string[];
  achievements: string[];
  timeline: { label: string; text: string }[];
};

export type TailedBeast = {
  slug: string;
  tails: number;
  name: string;
  form: string;
  jinchuriki: string[];
  abilities: string[];
  chakraNature: string;
  history: string;
  battles: string[];
  relationships: string;
};

export type StoryArc = {
  slug: string;
  name: string;
  part: "Part I" | "Part II";
  episodes: string;
  chapters: string;
  mainCharacters: string[];
  villains: string[];
  battles: string[];
  events: string[];
  summary: string;
  outcome: string;
  featured?: boolean;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};
