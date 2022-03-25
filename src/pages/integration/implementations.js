export const Implementations = [
  {
    lang: "javascript",
    code: `function intRectangleM(expression, a, b, N) {
              let h = (b-a) / N-1);
              let result =0;
              let mi = a;
                   for (let i = 0; i < N - 1; i++) {
                     if (i === 0) {
                       mi += h / 2;
                     } else {
                       mi += h;
                     }
                     result += expression(mi) * h;
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
              const h = (b - a) / N;
              //x_0
              let xi = a;
              let yi = expression(xi)/2;
              let result = h*yi;
              //x_1 to x_N-1
              for (let i = 1; i <= N - 1; i++) {
                  xi += h;
                  yi = expression(xi);
                  result += yi * h;
              }
              //x_N
              xi += h;
              yi = expression(xi)/2
              result += h*yi
              return result;
          }`,
    name: "Trapezoidal",
  },
  {
    lang: "javascript",
    code: `function intSimpsonsM(expression, a, b, N) {
              const h = (b - a) / N;
              //x_0
              let xi = a;
              let yi = expression(xi);
              let result = yi;
              //x_1 to x_N-1
              let c = 2;
              for (let i = 1; i <= N - 1; i++) {
                  i%2===0 ?  c = 2: c =4;
                  xi += h;
                  yi = expression(xi);
                  result += yi*c;
              }
              //x_N
              xi += h;
              result += expression(xi)
              return [result * (h/3), data];
           }`,
    name: "Simpsons",
  },
];
