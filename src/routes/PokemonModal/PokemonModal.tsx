import React, {
    FunctionComponent,
    useEffect,
    memo,
    useState,
    useCallback,
    useRef,
    MouseEvent,
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
    history,
    match: {
        params: { id },
    },
}) => {
    const [currentPokemon, setCurrentPokemon] = useState<IPokemon | null>(null);
    const { pokemons } = usePokemonsContext();
    const { fetchSimilarPokemons, getPokemon } = usePokemonsApi();
    const [similarPokoemons, setSimilarPokemons] = useState<IPokemon[]>([]);
    const [isFetchingSimilar, setFetchingSimilar] = useState(true);
    const node = useRef<HTMLDivElement>(null);
    const [isMounted, setMounted] = useState(false);

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
            if (isMounted) {
                try {
                    setFetchingSimilar(true);
                    const res = await fetchSimilarPokemons(
                        currentPokemon.types,
                        currentPokemon.rarity,
                        currentPokemon.hp,
                        currentPokemon.subtype,
                        currentPokemon.supertype
                    );

                    const filteredRes = res.filter(
                        item => item.id !== currentPokemon.id
                    );
                    if (filteredRes.length > 2) {
                        filteredRes.pop();
                    }
                    setSimilarPokemons(filteredRes);
                } catch {
                    setSimilarPokemons([]);
                }
                setFetchingSimilar(false);
            }
        },
        [fetchSimilarPokemons, isMounted]
    );

    useEffect(() => {
        if (currentPokemon) {
            getSimilarPokemons(currentPokemon);
        }
    }, [currentPokemon]);

    const handleClick = useCallback(
        (e: any) => {
            if (node.current && node.current.contains(e.target)) {
                return;
            }
            history.push('/');
        },
        [history, node]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        setMounted(true);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <SC.ModalWrapper ref={node}>
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
                            types={currentPokemon.types}
                            pokedexNumber={currentPokemon.nationalPokedexNumber}
                            hp={currentPokemon.hp}
                            set={currentPokemon.set}
                            weakness={currentPokemon.weaknesses}
                            attacks={currentPokemon.attacks}
                            evolvesFrom={currentPokemon.evolvesFrom}
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
