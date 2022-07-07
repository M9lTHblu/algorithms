import {findIndexOfFirstOccurrence, findIndexOfLastOccurrence,getMaxNumber} from '../src/linearSearch'

describe('return the position of the first occurrence of the number x, else return -1', () => {
    test('should return 1', () => {
        const nums = [1, 2, 3, 2, 5]
        expect(findIndexOfFirstOccurrence(nums, 2)).toBe(1)
    })

    test('should return -1', () => {
        const nums = [1, 2, 3, 2, 5]
        expect(findIndexOfFirstOccurrence(nums, 9)).toBe(-1)
    })
})

describe('return the position of the last occurrence of the number x, else return -1', () => {
    test('should return 3', () => {
        const nums = [1, 2, 3, 2, 5]
        expect(findIndexOfLastOccurrence(nums, 2)).toBe(3)
    })

    test('should return -1', () => {
        const nums = [1, 2, 3, 2, 5]
        expect(findIndexOfLastOccurrence(nums, 9)).toBe(-1)
    })
})

describe('find the max number in a sequence', () => {
    test('should return 5', () => {
        const nums = [1, 2, 3, 2, 5]
        expect(getMaxNumber(nums)).toBe(5)
    })

    test('should return 1', () => {
        const nums = [0]
        expect(getMaxNumber(nums)).toBe(0)
    })
})
