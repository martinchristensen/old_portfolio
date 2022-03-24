import React, { useState } from "react";
import IntRectangleM from "./int-rectangle-m";
import IntegrateBox from "./integrate-box";
import CodeBox from "../../components/code-box";
import { Implementations } from "./implementations";
import IntTrapezoidalM from "./int-trapezoidal-m";


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
    <div className={"integration"} id={"page-container"}>
      <div className={"article-wrap"}>
        <h1>Numerical Integration</h1>
        <p>
          In this section I will cover three methods to, approximates the value
          of a definite integral, introduced to me in my course on Numerical
          Methods.
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
        <h3>2.1 Implementation</h3>
        <IntTrapezoidalM expression={expression} a={a} b={b} N={N} />
        <h3>2.2 Implementation</h3>
        <CodeBox codeData={Implementations} codeName={"Trapezoidal"}/>

        <h2>3 Simpson's Method</h2>
        <p>
          I haven't implemented this method yet. But it will be here soon
          enough.
        </p>
      </div>
      <IntegrateBox expressionToParent={expressionCallback} />
    </div>
  );
};

export default Integration;
