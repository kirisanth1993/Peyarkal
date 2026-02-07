export const checkIsAlphabetic = (input) => {
    const alphabeticRegex = /^[A-Za-z\u0B80-\u0BFF\s]+$/;
    return alphabeticRegex.test(input);
}