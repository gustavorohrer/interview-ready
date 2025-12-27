// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false
    const counts: Record<string, number> = Object.create(null)

    for (const ch of s1) {
        counts[ch] = (counts[ch] ?? 0) + 1
    }

    for (const ch of s2) {
        counts[ch] = (counts[ch] ?? 0) - 1
        if (counts[ch] < 0) return false
    }

    return true
}
