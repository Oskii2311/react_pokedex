class HPService {
    static getSimilarPokemonsHPRange = (hp: string) => {
        const parsedHpToInt = parseInt(hp);
        if (isNaN(parsedHpToInt)) {
            return {
                max: 0,
                min: 0,
            };
        }
        const min = parsedHpToInt - parsedHpToInt * 0.1;
        const max = parsedHpToInt + parsedHpToInt * 0.1;

        return {
            min,
            max,
        };
    };
}

export default HPService;
