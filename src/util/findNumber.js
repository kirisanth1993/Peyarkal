import { NUMEROLOGYNUMBERGROUP } from '../app.constant.js';

export const findNumber = (name) => {
    let totNumber = 0;
    for (let singleLetter of name) {
        console.log("singleLetter", singleLetter)
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
