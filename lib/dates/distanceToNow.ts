/**
 * @file Counts distance to now.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

/**
 * Returns distance from provided date to now string representation.
 *
 * @param dateTime - Date.
 * @returns - Distance to now.
 */
const distanceToNow = (dateTime: Date) => {
    return formatDistanceToNowStrict(dateTime, {
        addSuffix: true,
    });
};

export default distanceToNow;
