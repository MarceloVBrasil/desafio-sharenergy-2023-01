export function formatCPF(value: string): string {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const cpfNumber = value.replace(/[^\d]/g, '');

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const cpfNumberLength = cpfNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early

    if (cpfNumberLength < 4) return cpfNumber;

    // if cpfNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (cpfNumberLength < 7) {
        return `${cpfNumber.slice(0, 3)}.${cpfNumber.slice(3)}`;
    }

    // if cpfNumberLength is greater than 7 and less the 10 we start to return
    // the formatted number
    if (cpfNumberLength < 10) {
        return `${cpfNumber.slice(0, 3)}.${cpfNumber.slice(3, 6)}.${cpfNumber.slice(6)}`;
    }

    // finally, if the cpfNumberLength is greater than 10, we add the last
    // bit of formatting and return it.
    return `${cpfNumber.slice(0, 3)}.${cpfNumber.slice(3, 6)}.${cpfNumber.slice(6, 9)}-${cpfNumber.slice(9, 11)}`;
}