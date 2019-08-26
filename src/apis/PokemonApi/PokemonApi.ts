import axios from 'axios';
import { IPokemon } from 'common/types/types';

class PokemonApi {
    POKEMONS_URL = 'https://api.pokemontcg.io/v1/cards';

    getPokemons = async (
        pageNumber: number,
        pageSize: number
    ): Promise<IPokemon[]> => {
        const {
            data: { cards },
        } = await axios.get(
            `${this.POKEMONS_URL}?page=${pageNumber}&pageSize=${pageSize}`
        );

        return cards;
    };
}
export default PokemonApi;
