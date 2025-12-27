// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]
// ->
// [1, 4, 7]
// [2, 5, 8]
// [3, 6, 9]
// ->
// [7, 1, 4]
// [8, 2, 5]
// [9, 3, 6]

type Matrix = number[][]

export default function rotateMatrix(matrix: Matrix): Matrix {
    const n = matrix.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (const row of matrix) {
        row.reverse()
    }

    return matrix
}
