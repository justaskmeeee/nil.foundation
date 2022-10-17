/**
 * Applies toUpperCase() to the first letter.
 *
 * @param word - Word.
 * @returns .
 */
const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export default capitalizeFirstLetter;
