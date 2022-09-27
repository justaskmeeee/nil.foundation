import { RefObject, useEffect, useRef } from 'react';

/**
 * Hook settings.
 */
type UseScrambleSettings = {
    interval?: number;
    phrases: string[];
};

/**
 * Use scrumble effect on provided HTML element.
 *
 * @param ref - Reference HTML element.
 * @param {UseScrambleSettings} settings - Settings.
 */
export const useScrumble = <T extends HTMLElement>(
    ref: RefObject<T>,
    { interval = 3000, phrases }: UseScrambleSettings,
) => {
    // if (!phrases?.length) {
    //     throw new Error('At list one phrase should be provided!');
    // }

    const phraseIndex = useRef(0);

    useEffect(() => {
        const callback = () => {
            if (phraseIndex.current === phrases.length - 1) {
                phraseIndex.current = 0;
                return;
            }

            phraseIndex.current++;
        };

        scramble(phrases[phraseIndex.current], ref, callback);

        const scrambleInterval = setInterval(() => {
            scramble(phrases[phraseIndex.current], ref, callback);
        }, interval);

        return () => {
            clearInterval(scrambleInterval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

/**
 * Generates a random word.
 *
 * @param textLen - Length of textContent.
 * @returns - Generated word.
 */
const jumble = (textLen: number) => {
    let generated = '';

    const randomChar = () => String.fromCharCode(random(33, 126));
    for (let i = 0; i < textLen; i++) {
        generated += randomChar();
    }

    return generated;
};

/**
 * Returns decoded letters corresponding to the length given.
 *
 * @param original - Initial text of the element.
 * @param decodeLen - Farthest index from text to decode.
 * @returns - Decoded letters.
 */
const decode = (original: string, decodeLen: number) => {
    const newText = original.substring(0, decodeLen);

    return newText + jumble(original.length - decodeLen);
};

const scramble = <T extends HTMLElement>(
    phrase: string,
    ref: RefObject<T>,
    setNextPhraseCallback: () => void,
) => {
    const { current: el } = ref;

    if (!el) {
        return;
    }

    const isPreferingReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isPreferingReduceMotion) {
        el.innerText = phrase;
        setNextPhraseCallback();
        return;
    }

    const totalChars = phrase.length;
    for (let i = 0; i <= totalChars; i++) {
        setTimeout(() => {
            el.innerText = decode(phrase, i);

            if (i === totalChars) {
                setNextPhraseCallback();
            }
        }, i * scrambleSpeed);
    }
};

/**
 * Generates random number.
 *
 * @param min - Min.
 * @param max - Max.
 * @returns - Generated random number.
 */
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Speed of scramble effect.
 */
const scrambleSpeed = 42;
