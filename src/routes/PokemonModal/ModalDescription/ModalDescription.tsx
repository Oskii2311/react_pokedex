import React, { FunctionComponent, memo } from 'react';
import ModalProperty from './components/ModalProperty/ModalProperty';
import * as SC from './styles';

import ModalDetails from './components/ModalDetails/ModalDetails';
import { IWeakness, IAttack } from 'common/types/types';

interface IModalDescription {
    name: string;
    superType: string;
    id: string;
    series: string;
    details: string[];
    rarity?: string;
    types: string[] | undefined;
    pokedexNumber: number | undefined;
    hp?: string;
    set: string;
    weakness: IWeakness[] | undefined;
    attacks: IAttack[] | undefined;
    evolvesFrom: string;
}

const ModalDescription: FunctionComponent<IModalDescription> = ({
    name,
    superType,
    id,
    series,
    details,
    rarity,
    types,
    pokedexNumber,
    hp,
    set,
    weakness,
    attacks,
    evolvesFrom,
}) => {
    return (
        <SC.ModalDescription>
            <SC.Column>
                <ModalProperty label="Name" value={name}></ModalProperty>
                <ModalProperty
                    label="Super Type"
                    value={superType}
                ></ModalProperty>
                <ModalProperty label="Id" value={id}></ModalProperty>
                <ModalProperty label="Series" value={series}></ModalProperty>
                {pokedexNumber && (
                    <ModalProperty
                        label="Pokedex Number"
                        value={pokedexNumber.toString()}
                    ></ModalProperty>
                )}
                {hp && <ModalProperty label="HP" value={hp}></ModalProperty>}
            </SC.Column>
            <SC.Column>
                <ModalProperty label="Set" value={set}></ModalProperty>
                {weakness && (
                    <ModalProperty
                        label="Weakness"
                        value={weakness.map(weak => weak.type).join(', ')}
                    ></ModalProperty>
                )}
                {attacks && (
                    <ModalProperty
                        label="Attacks"
                        value={attacks.map(attack => attack.name).join(', ')}
                    ></ModalProperty>
                )}
                {evolvesFrom && (
                    <ModalProperty
                        label="Evolves From"
                        value={evolvesFrom}
                    ></ModalProperty>
                )}
                {rarity && (
                    <ModalProperty
                        label="Rarity"
                        value={rarity}
                    ></ModalProperty>
                )}

                {types && (
                    <ModalProperty
                        label="Types"
                        value={types.join(',')}
                    ></ModalProperty>
                )}

                <ModalDetails text={details} />
            </SC.Column>
        </SC.ModalDescription>
    );
};

export default memo(ModalDescription);
