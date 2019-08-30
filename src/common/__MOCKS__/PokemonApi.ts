import { AxiosResponse } from 'axios';
import { IPokemon } from 'common/types/types';
import Axios from 'axios';
jest.mock('Axios');
const mockedAxios = Axios as jest.Mocked<typeof Axios>;
import pokemons from './pokemons';

class PokemonApi {
    getPokemons = async (
        pageNumber: number,
        pageSize: number
    ): Promise<AxiosResponse<{ cards: IPokemon[] }>> => {
        let start = pageNumber - 1 * pageSize;
        const size = pageNumber * pageSize;
        const response = [];
        for (start; start < size; start++) {
            response.push(pokemons[start]);
        }
        return mockedAxios.get.mockResolvedValue({
            data: { cards: response },
        }) as any;
    };

    getPokemon = async (
        id: string
    ): Promise<AxiosResponse<{ cards: IPokemon[] }>> => {
        return mockedAxios.get.mockResolvedValue({
            data: { cards: pokemons.find(poke => poke.id === id) },
        }) as any;
    };
}

export default PokemonApi;
