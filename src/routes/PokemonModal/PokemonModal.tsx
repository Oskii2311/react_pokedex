import React, {
    FunctionComponent,
    useEffect,
    memo,
    useState,
    useCallback,
} from 'react';
import * as SC from './styles';
import { RouteComponentProps } from 'react-router';
import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';
import ModalImage from './ModalImage/ModalImage';
import ModalDescription from './ModalDescription/ModalDescription';
import usePokemonsApi from 'hooks/usePokemonsApi';
import ModalSimilarList from './ModalSimilarList/ModalSimilarList';
import { IPokemon } from 'common/types/types';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';

type TParams = { id: string };

interface IPokemonModal extends RouteComponentProps<TParams> {}
const PokemonModal: FunctionComponent<IPokemonModal> = ({
    match: {
        params: { id },
    },
}) => {
    const [currentPokemon, setCurrentPokemon] = useState<IPokemon | null>(null);
    const { pokemons } = usePokemonsContext();
    const { fetchSimilarPokemons, getPokemon } = usePokemonsApi();
    const [similarPokoemons, setSimilarPokemons] = useState<IPokemon[]>([]);
    const [isFetchingSimilar, setFetchingSimilar] = useState(true);

    const initCurrentPokemon = useCallback(
        async (id: string) => {
            let pokemon = pokemons.find(pokemon => pokemon.id === id);
            if (!pokemon) {
                const res = await getPokemon(id);

                setCurrentPokemon(res);
                return;
            }
            setCurrentPokemon(pokemon ? pokemon : null);
            return;
        },
        [getPokemon, pokemons]
    );

    useEffect(() => {
        if (id) {
            initCurrentPokemon(id);
        }
    }, [id]);

    const getSimilarPokemons = useCallback(
        async (currentPokemon: IPokemon) => {
            try {
                setFetchingSimilar(true);
                const res = await fetchSimilarPokemons(
                    currentPokemon.subtype,
                    currentPokemon.supertype
                );
                const filteredRes = res.filter(
                    item => item.id !== currentPokemon.id
                );
                setSimilarPokemons([
                    filteredRes[0],
                    filteredRes[1],
                    filteredRes[2],
                ]);
            } catch {
                setSimilarPokemons([]);
            }
            setFetchingSimilar(false);
        },
        [fetchSimilarPokemons]
    );

    useEffect(() => {
        if (currentPokemon) {
            getSimilarPokemons(currentPokemon);
        }
    }, [currentPokemon]);

    return (
        <SC.ModalWrapper>
            <Link to="/">
                <SC.CloseButton>X</SC.CloseButton>
            </Link>
            {currentPokemon && (
                <>
                    <SC.ModalContent>
                        <ModalImage
                            imageUrl={currentPokemon.imageUrlHiRes}
                            name={currentPokemon.name}
                        />
                        <ModalDescription
                            details={currentPokemon.text}
                            id={currentPokemon.id}
                            name={currentPokemon.name}
                            series={currentPokemon.series}
                            superType={currentPokemon.supertype}
                            rarity={currentPokemon.rarity}
                        ></ModalDescription>
                    </SC.ModalContent>
                    {isFetchingSimilar ? (
                        <InfiniteScroll />
                    ) : (
                        <ModalSimilarList pokemons={similarPokoemons} />
                    )}
                </>
            )}
        </SC.ModalWrapper>
    );
};
export default memo(PokemonModal);
