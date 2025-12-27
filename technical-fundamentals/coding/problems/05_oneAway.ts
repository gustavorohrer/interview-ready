// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// 5. *One Away*:
export default function isOneAway(str1: string, str2: string): boolean {
    if (Math.abs(str1.length - str2.length) > 1) return false

    const shorter = str1.length > str2.length ? str2 : str1
    const longer = str1.length > str2.length ? str1 : str2

    let diff = false
    let ps = 0
    let pl = 0

    while (ps < shorter.length && pl < longer.length) {
        if (longer[pl] !== shorter[ps]) {
            if (diff) return false
            diff = true

            if (shorter.length === longer.length) {
                ps++
            }
        } else {
            ps++
        }
        pl++
    }

    return true
}
