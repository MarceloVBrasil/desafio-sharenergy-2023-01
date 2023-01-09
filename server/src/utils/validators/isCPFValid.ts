export function isCPFValid(cpf: string | undefined): boolean {

    if (!cpf) return false

    if (cpf.length !== 14) return false

    const numbers = cpf.split("").filter(c => c >= '0' && c <= '9')
    if (numbers.length !== 11) return false

    if (cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== "-") return false

    return true
}