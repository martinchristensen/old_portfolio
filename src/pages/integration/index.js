import React, { useState } from "react";
import IntRectangleM from "./num-integration";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import IntegrateBox from "./integrate-box";
import CodeBox from "../../components/code-box";
import { Implementations } from "./implementations";

const config = {
  loader: { load: ["input/asciimath", "output/chtml", "ui/menu"] },
};

const Integration = () => {
  const [expression, setExpression] = useState("2*x+2");
  const [a, setA] = useState(1);
  const [b, setB] = useState(3);
  const [N, setN] = useState(50);

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
              <li>Example</li>
              <li>Implementation</li>
            </ol>
          </li>
          <li>Trapezoidal Method</li>
          <li>Simpson's Method</li>
        </ol>
        <h2>1 Extended Midpoint (Rectangle) Method</h2>
        <h3>1.1 Example</h3>
        <IntRectangleM expression={expression} a={a} b={b} N={N} />{" "}
        {/*eval() is bad practice. Look up XPath*/}
        <h3>
          1.2 Implementation (I know the indentation in the box is a little
          weird... I'm working on it.):
        </h3>
        <CodeBox codeData={Implementations} codeName={"Extended-Midpoint"} />
        <h2>2 Trapezoidal Method</h2>
        <p>
          <MathJaxContext config={config}>
            Here is an equation:
            <MathJax inline={false}>{"`frac(10)(4x) approx 2^(12)`"}</MathJax>{" "}
            Don't mind it. I haven't implemented this method yet. But it will be
            here soon enough.
          </MathJaxContext>
        </p>
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
