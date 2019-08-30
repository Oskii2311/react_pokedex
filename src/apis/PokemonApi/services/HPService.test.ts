import HPService from './HPService';

describe('HPService', () => {
    describe('getSimilarPokemonsHPRange', () => {
        const TEST_DATA = [
            { given: '60', result: { min: 54, max: 66 } },
            { given: '1', result: { min: 0.9, max: 1.1 } },
            { given: '0', result: { min: 0, max: 0 } },
            { given: 'love to destory tests', result: { min: 0, max: 0 } },
            { given: '100000', result: { min: 90000, max: 110000 } },
        ];

        TEST_DATA.forEach(testData => {
            it(`should return min: ${testData.result.min} and max: ${testData.result.max} if given hp was: ${testData.given}`, () => {
                const { min, max } = HPService.getSimilarPokemonsHPRange(
                    testData.given
                );

                expect(min).toEqual(testData.result.min);
                expect(max).toEqual(testData.result.max);
            });
        });
    });
});
