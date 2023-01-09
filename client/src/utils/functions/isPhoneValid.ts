export function isPhoneValid(phone: string | undefined): boolean {
    if (!phone) return false

    if (phone.length !== 15) return false

    const numbers = phone.split("").filter(c => c >= '0' && c <= '9')
    if (numbers.length !== 11) return false

    if (phone[0] !== "(" || phone[3] !== ")" || phone[10] !== "-") return false

    return true
}