import findSymbol from "../src/findSymbol";

describe('findSymbol tests', () => {
    test('should return "a"', () => {
        const str = 'abbdaa'
        expect(findSymbol(str)).toBe('a')
    })

    test('should return empty string', () => {
        const str = ''
        expect(findSymbol(str)).toBe('')
    })

    test('should return first character from the string', () => {
        const str = 'abcd'
        expect(findSymbol(str)).toBe('a')
    })
})
