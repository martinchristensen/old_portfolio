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
                     result += expression(xi) * h;
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
  {
    lang: "javascript",
    code: `function intTrapezoidalM(expression, a, b, N) {
              const h = (b - a) / (N-1);
              const data = [];
              //x_0
              let xi = a;
              let yi = expression(xi)/2;
              let result = h*yi;
              //x_1 to x_N-2
              for (let i = 1; i <= N - 2; i++) {
                  xi += h;
                  yi = expression(xi);
                  result += yi * h;
              }
              //x_N-1
              xi += h;
              yi = expression(xi)/2
              result += h*yi
              return result;
          }`,
    name: "Trapezoidal",
  },
];
