import scoreModifier from "./lib/score-modifier";
import RageManager from "~/components/barbarian-managers/rage-manager";
import FrenzyManager from "~/components/barbarian-managers/frenzy-manager";

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

export const FeatureType = {
  Action: "action",
  BonusAction: "bonus_action",
  Passive: "passive",
} as const;

export const FEATURES = [
  {
    title: "Rage",
    description: `In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.
    While raging, you gain the following benefits if you aren't wearing heavy armor:

    - You have advantage on Strength checks and Strength saving throws.
    - When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that
    increases as you gain leveis as a barbarian, as shown in the Rage Damage column of the Barbarian table.
    - You have resistance to bludgeoning, piercing, and slashing damage.

    If you are able to cast spells, you ean't cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you
    haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.

    Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.`,
    type: FeatureType.BonusAction,
    extra: <RageManager />,
  },
  {
    title: "Unarmored Defense",
    description: `While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.`,
    type: FeatureType.Passive,
  },
  {
    title: "Reckless Attack",
    description: `Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desparation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.`,
    type: FeatureType.BonusAction,
  },
  {
    title: "Danger Sense",
    description: `At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger.
    You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.`,
    type: FeatureType.Passive,
  },
  {
    title: "Frenzy",
    description: `You can frenzy when you go into a rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer on level of exhaustion.

      Level 1 - Disadvantage on ability checks
      Level 2 - Speed halved
      Level 3 - Disadvantage on attack rolls and saving throws
      Level 4 - Hit point maximum halved
      Level 5 - Speed reduced to 0
      Level 6 - Death

    You suffer all effects of your level and below. A long rest recuded the creature's exhaustion level by 1, provided that the creature has also ingested some food and drink.
      `,
    type: FeatureType.BonusAction,
    extra: <FrenzyManager />,
  },
  {
    title: "Sentinel",
    type: FeatureType.Passive,
    description: `You have masetered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits:

    - When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.
    - Creatures within 5 feet of you provoke opportunity attacks from you event if they take the Disengage action before leaving your reach.
    - When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.`,
  },
];

export const MAX_RAGES = 3;
