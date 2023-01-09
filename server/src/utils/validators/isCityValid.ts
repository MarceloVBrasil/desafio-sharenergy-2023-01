export function isCityValid(city: string | undefined): boolean {
    if (!city) return false
    return removeWhiteSpaces(city).split("").every(c => isLetter(c))
}

function isLetter(c: string) {
    return isUpperCase(c) || isLowerCase(c)
}

function isUpperCase(c: string) {
    return c >= 'A' && c <= 'Z'
}

function isLowerCase(c: string) {
    return c >= 'a' && c <= 'z'
}

function removeWhiteSpaces(city: string): string {
    return city.split("").filter(c => c !== ' ').join("")
}