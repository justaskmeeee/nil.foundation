/**
 * Location model.
 */
type LocationModel = {
    title: string;
    address: string;
}

/**
 * Locations.
 */
const locationSettings: LocationModel[] = [
    {
        title: 'nil',
        address: 'P.O. box 2775, Artemis House, 67 Fort Street, Grand Cayman, KY1-1111, Cayman Islands'
    },
    {
        title: 'nil (Cyprus) Ltd.',
        address: 'Vasileiou Makedonos, 59, 3040, Limassol, Cyprus'
    }
];

export default locationSettings;
