interface IAbility {
    name: string;
    text: string;
    type: string;
}

export interface IAttack {
    cost: string[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: string;
}

interface IResistance {
    type: string;
    value: string;
}

export interface IWeakness {
    type: string;
    value: string;
}

export interface IPokemon {
    ability: IAbility;
    artist: string;
    attacks: IAttack[] | undefined;
    convertedRetreatCost: number;
    evolvesFrom: string;
    hp?: string;
    id: string;
    imageUrl: string;
    imageUrlHiRes: string;
    name: string;
    nationalPokedexNumber?: number;
    number: string;
    rarity?: string;
    resistances: IResistance[];
    retreatCost: string[];
    series: string;
    set: string;
    setCode: string;
    subtype: string;
    supertype: string;
    text: string[];
    types: string[] | undefined;
    weaknesses: IWeakness[] | undefined;
}
