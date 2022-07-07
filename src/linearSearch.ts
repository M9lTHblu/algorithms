export const findIndexOfFirstOccurrence = (nums: number[], num: number): number => {
    let result = -1;
    for (let i = 0; i < nums.length; i += 1) {
        if (result === -1 && nums[i] === num) {
            result = i
        }
    }

    return result;
}

export const findIndexOfLastOccurrence = (nums: number[], num: number): number => {
    let result = -1;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === num) {
            result = i
        }
    }

    return result
}

export const getMaxNumber = (nums: number[]): number => {
    let result = nums[0]
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] > result) {
            result = nums[i]
        }
    }

    return result;
}
