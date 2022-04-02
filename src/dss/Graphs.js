class Graph {
    constructor() {
        this.data = [];
    }

    setDataAt(row, column, value) {
        this.data[row][column] = value;
    }

    toAdjacency(data) {
        if (!data) {
            throw new Error('data cannot be undefined');
        }

        if (!Array.isArray(data))  {
            throw new Error('data needs to be an array');
        }

        const matSize = data.length;
        const matrixAdjacency = this.generateEmptyMatrix(matSize, matSize);

        for (let i = 0; i < matSize; i++) {
            for (let j = 0; j < matSize; j++) {
                if (data[i][j] === 1) {
                    for (let nextI = 0; nextI < matSize; nextI++) {
                        if (i === nextI) {
                            continue;
                        }

                        if (data[i][j] === data[nextI][j]) {
                            matrixAdjacency[i][nextI] = matrixAdjacency[nextI][i] = 1;
                            break;
                        }
                    }
                }
            }
        }

        return matrixAdjacency;
    }

    getMainDiagonal(data) {
        if (!data) {
            throw new Error('data cannot be undefined');
        }

        if (!Array.isArray(data))  {
            throw new Error('data needs to be an array');
        }

        const matSize = data.length;
        const mainDiagonal = this.generateEmptyMatrix(matSize, matSize);
        console.log({mainDiagonal})

        for (let i = 0; i < matSize; i++) {
            let grade = 0;
            for (let j = 0; j < matSize; j++) {
                if (data[i][j] === 1) {
                    grade += 1;
                }
            }

            mainDiagonal[i][i] = grade;
        }

        return mainDiagonal;
    }

    generateEmptyMatrix(n, m) {
        const matrix = [];

        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j < m; j++) {
                row.push(0);
            }

            matrix.push(row);
        }

        this.data = matrix;

        return matrix;
    }
}

export default Graph;