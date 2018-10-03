//TODO: Enums for well-known values
export interface Action {
  name: string;
  xws: string;
  ffg: number;
}

export interface Condition {
  name: string;
  xws: string;
  ability: string;
  image?: string;
}

export interface DamageDeckCard {
  title: string;
  amount: number;
  type: string;
  text: string;
}

export interface DamageDeck {
  cards: DamageDeckCard[];
}

export interface Faction {
  name: string;
  xws: string;
  ffg: number;
}

export interface Pilot {
  name: string;
  caption: string;
  initiative: number;
  limited: boolean;
  cost: number;
  xws: string;
  ability: string;
  image?: string;
}

export interface ShipStat {
  arc?: string;
  type: string;
  value: number;
}

export interface ShipAction {
  difficulty: string;
  type: string;
}

export interface Ship {
  name: string;
  xws: string;
  size: string;
  dial: string[];
  faction: string;
  stats: ShipStat[];
  actions: ShipAction[];
  pilots: Pilot[];
}

export interface Stat {
  name: string;
  xws: string;
  ffg: number;
}

export interface Data {
  actions: Action[];
  conditions: Condition[];
  damage_decks: DamageDeck[];
  factions: Faction[];
  ships: Ship[];
  stats: Stat[];
}
