import { NUMEROLOGYNUMBERGROUP } from '../app.constant.js';

export const findNumericNumber = (name) => {
    const cleanedName = name.replace(/\s+/g, '');
    let totNumber = 0;
    for (let singleLetter of cleanedName) {
        const letterNumber = NUMEROLOGYNUMBERGROUP[singleLetter.toLowerCase()];
        totNumber += letterNumber;
    }

    let finalNumericNumber = totNumber;
    while (finalNumericNumber > 9) {
        finalNumericNumber = finalNumericNumber
            .toString()
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return finalNumericNumber;
};
