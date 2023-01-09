export function isStateValid(state: string | undefined): boolean {
    if (!state) return false
    return states.includes(state.toUpperCase())
}

const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES",
    "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE",
    "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "SP",
    "TO"]