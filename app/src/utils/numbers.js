export function abbreviateNumber(number) {
    const SI_SYMBOL = ['', 'k', 'M', 'B', 'T', 'P', 'E'];

    // determine the appropriate SI symbol
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;

    // if zero, no abbreviation needed
    if (tier === 0) return number;

    // calculate the final abbreviated number
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const abbreviated = number / scale;

    // format the number with a limited number of decimal places
    const formatted = abbreviated.toFixed(1);

    return formatted + suffix;
}
