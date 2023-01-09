export function isFullNameValid(fullName: string | undefined): boolean {
    if (!fullName) return false
    if (!fullName.includes(" ")) return false
    return removeWhiteSpaces(fullName).split("").every(c => isLetter(c))
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

function removeWhiteSpaces(fullName: string): string {
    return fullName.split("").filter(c => c !== ' ').join("")
}