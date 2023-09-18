/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    if (numbers.length < 1) {
        newNumbers = [];
    } else {
        newNumbers.push(numbers[0]);
        newNumbers.push(numbers[numbers.length - 1]);
    }
    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNums = numbers.map((numStr: string): number =>
        Number.isNaN(Number(numStr)) ? 0 : Number(numStr)
    );
    return newNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noSign = amounts.map((amountStr: string): string =>
        amountStr.replace("$", "")
    );
    const newAmount = noSign.map((amountStr: string): number =>
        Number.isNaN(Number(amountStr)) ? 0 : Number(amountStr)
    );
    return newAmount;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shoutArr = messages.map((message1: string): string =>
        message1.includes("!") ? message1.toUpperCase() : message1
    );
    const allFilterd = shoutArr.filter(
        (question: string): boolean => !question.includes("?")
    );
    return allFilterd;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isRGBcolor = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return isRGBcolor;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const numStr = addends.toString().replaceAll(",", "+");
    let final = sum.toString() + "=" + numStr;
    if (sum === 0) {
        final = "0=0";
    }
    return final;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const indexNeg = values.findIndex((value: number): boolean => value < 0);
    const copyArr1 = [...values];
    const copyArr2 = [...values];
    const toNeg = [...copyArr1.splice(0, indexNeg)];
    let sum = 0;
    if (indexNeg === -1) {
        sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
    } else {
        sum = toNeg.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
    }
    const toEnd = copyArr2.splice(indexNeg + 1, values.length);
    let finalArr = [];
    if (indexNeg === -1) {
        finalArr = [...values, sum];
    } else {
        finalArr = [...toNeg, values[indexNeg], sum, ...toEnd];
    }
    return finalArr;
}
