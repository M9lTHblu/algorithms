const findSymbol = (str:string): string => {
    const dictionary: { [key: string]: number } = {}
    let count = 0
    let symbol = ''
    for (const s of str) {
        if (!dictionary[s]) {
            dictionary[s] = 1;
        } else {
            dictionary[s] += 1;
        }
        if (dictionary[s] > count) {
            count = dictionary[s]
            symbol = s;
        }
    }

    return symbol
}

export default findSymbol;
