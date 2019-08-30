import axios, { AxiosResponse } from 'axios';
import { IPokemon } from 'common/types/types';

class PokemonApi {
    POKEMONS_URL = 'https://api.pokemontcg.io/v1/cards';

    getPokemons = async (
        pageNumber: number,
        pageSize: number
    ): Promise<AxiosResponse<{ cards: IPokemon[] }>> => {
        const res = await axios.get(
            `${this.POKEMONS_URL}?page=${pageNumber}&pageSize=${pageSize}`
        );

        return res;
    };

    getPokemon = async (
        id: string
    ): Promise<AxiosResponse<{ cards: IPokemon[] }>> => {
        const res = await axios.get(`${this.POKEMONS_URL}?id=${id}`);

        return res;
    };

    getSimilarByHp = async (
        types: string[],
        rarity: string,
        hpMin: number
    ): Promise<AxiosResponse<{ cards: IPokemon[] }>> => {
        const res = await axios.get(
            `${this.POKEMONS_URL}?types=${types.join(
                ','
            )}&rarity=${rarity}&hp=gte${hpMin}&pageSize=${4}`
        );

        return res;
    };

    getSimilarBySubTypes = async (
        subtype: string,
        superType: string
    ): Promise<AxiosResponse<{ cards: IPokemon[] }>> => {
        const res = await axios.get(
            `${
                this.POKEMONS_URL
            }?subtype=${subtype}&superType=${superType}&pageSize=${4}`
        );

        return res;
    };
}
export default PokemonApi;
