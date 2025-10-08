import scoreModifier from "./lib/score-modifier";

export const ABILITIES = {
  STR: "Strength",
  DEX: "Dexterity",
  CON: "Constitution",
  WIS: "Wisdom",
  INT: "Intelligence",
  CHA: "Charisma",
} as const;

export const ABILITY_SCORES = {
  [ABILITIES.STR]: 18,
  [ABILITIES.DEX]: 16,
  [ABILITIES.CON]: 16,
  [ABILITIES.WIS]: 12,
  [ABILITIES.INT]: 10,
  [ABILITIES.CHA]: 10,
} as const;

export const SKILLS = {
  Acrobatics: {
    ability: ABILITIES.DEX,
    proficient: false,
  },
  "Animal Handling": {
    ability: ABILITIES.WIS,
    proficient: false,
  },
  Arcana: {
    ability: ABILITIES.INT,
    proficient: false,
  },
  Athletics: {
    ability: ABILITIES.STR,
    proficient: false,
  },
  Deception: {
    ability: ABILITIES.CHA,
    proficient: false,
  },
  History: {
    ability: ABILITIES.INT,
    proficient: false,
  },
  Insight: {
    ability: ABILITIES.WIS,
    proficient: false,
  },
  Intimidation: {
    ability: ABILITIES.CHA,
    proficient: false,
  },
  Investigation: {
    ability: ABILITIES.INT,
    proficient: false,
  },
  Medicine: {
    ability: ABILITIES.WIS,
    proficient: false,
  },
  Nature: {
    ability: ABILITIES.INT,
    proficient: false,
  },
  Perception: {
    ability: ABILITIES.WIS,
    proficient: false,
  },
  Performance: {
    ability: ABILITIES.CHA,
    proficient: false,
  },
  Persuasion: {
    ability: ABILITIES.CHA,
    proficient: false,
  },
  Religion: {
    ability: ABILITIES.INT,
    proficient: false,
  },
  "Sleight of Hand": {
    ability: ABILITIES.DEX,
    proficient: false,
  },
  Stealth: {
    ability: ABILITIES.DEX,
    proficient: false,
  },
  Survival: {
    ability: ABILITIES.WIS,
    proficient: false,
  },
} as const;

export const SAVINGS_THROWS = {
  [ABILITIES.STR]: true,
  [ABILITIES.DEX]: false,
  [ABILITIES.CON]: true,
  [ABILITIES.WIS]: false,
  [ABILITIES.INT]: false,
  [ABILITIES.CHA]: false,
};

export const LEVEL = 4;
export const SPEED = 30;
export const INITIATIVE_MOD = 0;

export const MAX_HITPOINTS = 51;
export const HIT_DIE = 12;

export type DiceRoll = {
  sides: number;
  count: number;
  modifier: number;
};

export type Damage = {
  name?: string;
  type: string;
  dice: DiceRoll;
};

export type Attack = {
  name: string;
  proficient: boolean;
  ability: keyof typeof ABILITY_SCORES;
  damage: Damage[];
};

export const ATTACKS: Attack[] = [
  {
    name: "Battle Axe",
    proficient: true,
    ability: ABILITIES.STR,
    damage: [
      {
        name: "One Handed",
        type: "Slashing",
        dice: {
          sides: 8,
          count: 1,
          modifier: scoreModifier(ABILITY_SCORES[ABILITIES.STR]),
        },
      },
      {
        name: "Two Handed",
        type: "Slashing",
        dice: {
          sides: 12,
          count: 1,
          modifier: scoreModifier(ABILITY_SCORES[ABILITIES.STR]),
        },
      },
    ],
  },
];

export const INSPIRATION_POINTS = 0;
