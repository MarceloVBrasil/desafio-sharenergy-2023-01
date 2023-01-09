export function isStreetValid(street: string | undefined): boolean {
    if (!street) return false
    return !street.split("").some(c => isSpecialCharacter(c))
}

function isSpecialCharacter(c: string): boolean {
    const specialCharsSet = new Set("!@#$%^&*()_?/{}[]\\-=+");
    return specialCharsSet.has(c)
}