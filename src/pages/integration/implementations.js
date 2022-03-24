export const Implementations = [
  {
    lang: "javascript",
    code: `function intRectangleM(expression, a, b, N) {
              let h = (b-a) / N-1);
              let result =0;
              let xi = a;
                   for (let i = 0; i < N - 1; i++) {
                     if (i === 0) {
                       xi += h / 2;
                     } else {
                       xi += h;
                     }
                     let yi = expression(xi);
                     result += yi * h;
                   }
              return result;
        }`,
    name: "Extended-Midpoint",
  },
  {
    lang: "c++",
    code: `// Coming soon ;)`,
    name: "Extended-Midpoint",
  },
];
