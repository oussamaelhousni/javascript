const toN = (n = 5) => {
  let somme = 0;
  for (let i = 0; i <= n; i++) {
    somme = somme + i;
  }
  return somme;
};

const somme = (a, b) => {
  return a + b;
};

console.log(toN(5));
