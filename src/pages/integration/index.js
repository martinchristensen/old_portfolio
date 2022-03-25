import React, { useState } from "react";
import IntRectangleM from "./int-rectangle-m";
import IntegrateBox from "./integrate-box";
import CodeBox from "../../components/code-box";
import { Implementations } from "./implementations";
import IntTrapezoidalM from "./int-trapezoidal-m";
import IntSimpsonsM from "./int-simpsons-m";

const Integration = () => {
  const [expression, setExpression] = useState("Math.sin(x**2+1)+2");
  const [a, setA] = useState(1);
  const [b, setB] = useState(3);
  const [N, setN] = useState(10);

  const expressionCallback = (newExpression, newA, newB, newN) => {
    setExpression(newExpression);
    setA(parseFloat(newA));
    setB(parseFloat(newB));
    setN(parseFloat(newN));
  };

  return (
    <>
      <div className={"article-wrap"}>
        <h1>Numerical Integration</h1>
        <p>
          In this section I will cover three methods to, approximates the value
          of a definite integral, introduced to me in my course on Numerical
          Methods. I will not be going into detail with any of the methods. But if
          you aren't familiar with them and interested in learning more, I
          recommend this resource: <a
            target={"_blank"}
            href={
              "https://math.libretexts.org/Courses/Mount_Royal_University/MATH_2200%3A_Calculus_for_Scientists_II/2%3A_Techniques_of_Integration/2.5%3A_Numerical_Integration_-_Midpoint%2C_Trapezoid%2C_Simpson's_rule"
            }
        >
          math.libretexts.org
        </a>.
        </p>
        <h2>Contents</h2>
        <ol>
          <li>
            Extended Midpoint (Rectangle) Method
            <ol>
              <li>Showcase</li>
              <li>Implementation</li>
            </ol>
          </li>
          <li>
            Trapezoidal Method
            <ol>
              <li>Showcase</li>
              <li>Implementation</li>
            </ol>
          </li>
          <li>
            Simpson's Method
            <ol>
              <li>Showcase</li>
              <li>Implementation</li>
            </ol>
          </li>
        </ol>


        <h2>1 Extended Midpoint (Rectangle) Method</h2>
        <h3>1.1 Showcase</h3>
        <IntRectangleM expression={expression} a={a} b={b} N={N} />
        {/*eval() is bad practice. Look up XPath*/}
        <h3> 1.2 Implementation:</h3>
        <CodeBox codeData={Implementations} codeName={"Extended-Midpoint"} />


        <h2>2 Trapezoidal Method</h2>
        <a href={"https://math24.net/trapezoidal-rule.html"}>Resource</a>

        <h3>2.1 Showcase</h3>
        <IntTrapezoidalM expression={expression} a={a} b={b} N={N} />

        <h3>2.2 Implementation</h3>
        <CodeBox codeData={Implementations} codeName={"Trapezoidal"} />

        <h2>3 Simpson's Method</h2>
        <a href={"https://math24.net/simpsons-rule.html#example1"}>Resource</a>

        <h3>3.1 Showcase</h3>
        <IntSimpsonsM expression={expression} a={a} b={b} N={N} />
        <h3>3.2 Implementation</h3>
        <CodeBox codeData={Implementations} codeName={"Simpsons"}/>
      </div>
      <IntegrateBox expressionToParent={expressionCallback} />
    </>
  );
};

export default Integration;
