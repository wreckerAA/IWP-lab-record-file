
function transposeMatrix(mat) {
  if (!mat || mat.length === 0) {
    return [];
  }
  const rows = mat.length;
  const cols = mat[0].length;
  let transposed = [];
  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = mat[j][i];
    }
  }
  return transposed;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log("--- Matrix Transpose Program ---");
  const rStr = await askQuestion("Number of rows: ");
  const r = parseInt(rStr);

  const cStr = await askQuestion("Number of columns: ");
  const c = parseInt(cStr);
  if (isNaN(r) || isNaN(c) || r <= 0 || c <= 0) {
    console.log("Invalid dimensions. Please enter positive numbers for rows and columns.");
    rl.close();
    return;
  }

  let matrix = [];
  console.log("Enter matrix elements:");
  for (let i = 0; i < r; i++) {
    matrix[i] = [];
    for (let j = 0; j < c; j++) {
      const elementStr = await askQuestion(`Enter element [${i}][${j}]: `);
      const element = parseFloat(elementStr);
      
      if (isNaN(element)) {
          console.log("Invalid element. Please enter a number.");
          j--;
          continue;
      }
      matrix[i][j] = element;
    }
  }
  console.log("\nOriginal Matrix:");
  console.table(matrix);

  const result = transposeMatrix(matrix);
  
  console.log("\nMatrix Transpose:");
  console.table(result);
  rl.close();
}
main();