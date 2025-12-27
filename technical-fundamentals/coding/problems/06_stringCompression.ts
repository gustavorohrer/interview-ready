// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
    let prev = str[0]
    let count = 0
    let res = ''

    for (const ch of str) {
        if (ch === prev) {
            count++
        } else {
            res += prev + count
            prev = ch
            count = 1
        }
    }
    res += prev + count

    return res.length < str.length ? res : str
}
