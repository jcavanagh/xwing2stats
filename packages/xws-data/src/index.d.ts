import index = require('.');

declare namespace xws {
  export enum Faction {
    'Rebel Alliance' = 0,
    'Galactic Empire',
    'Scum and Villainy',
    'Resistance',
    'First Order'
  }

  export interface Ship {
    name: string;
    xws: string;
    factions: string[];
    attack: number;
    agility: number;
    hull: number;
    shields: number;
    actions: string[];
    actionsred: string[];
    maneuvers: number[][];
  }

  export interface Pilot {
    name: string;
    id: number;
    unique: boolean;
    faction: Faction;
    ship: string;
    skill: number;
    points: number;
    slots: string;
    modifier_func?: Function;
    restriction_func?: Function;
    validation_func?: Function;
  }
}

export const ships: xws.Ship[];
export const shipsByName: any[];
