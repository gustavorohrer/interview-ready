// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix(matrix: Matrix) {
    if (matrix.length === 0) return matrix

    const rowsToZero = new Set<number>()
    const columnsToZero = new Set<number>()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 0) {
                rowsToZero.add(i)
                columnsToZero.add(j)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (rowsToZero.has(i) || columnsToZero.has(j)) {
                matrix[i][j] = 0
            }
        }
    }

    return matrix
}
