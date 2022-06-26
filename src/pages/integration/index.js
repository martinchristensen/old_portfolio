import React, { useState } from "react";
import IntRectangleM from "./int-rectangle-m";
import IntegrateBox from "./integrate-box";
import CodeBox from "../../components/code-box";
import { Implementations } from "./implementations";
import IntTrapezoidalM from "./int-trapezoidal-m";
import IntSimpsonsM from "./int-simpsons-m";
import {Article, Bread, Header, Section, TableOfContents} from "react-article";

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
      <div className={"article-wrapper"}>
        <div className={"article-content"}>
          <Article>
            <Header>Numerical Integration</Header>
            <Bread>
              <p>
                In this section I show three methods (Extended Midpoint, Trapezoidal and Simpson's) to, approximates the
                value of a definite integral. I will not be going into detail with any of the
                methods. But if you aren't familiar with them and interested in
                learning more, I recommend this resource:{" "}
                <a
                    target={"_blank"}
                    href={
                      "https://math.libretexts.org/Courses/Mount_Royal_University/MATH_2200%3A_Calculus_for_Scientists_II/2%3A_Techniques_of_Integration/2.5%3A_Numerical_Integration_-_Midpoint%2C_Trapezoid%2C_Simpson's_rule"
                    }
                >
                  math.libretexts.org
                </a>
                .
              </p>
            </Bread>
            <TableOfContents text={"Table of Contents"} />
            <Section>
              <Header id={"em"}>Extended Midpoint (Rectangle) Method</Header>
              <Section>
                <Header id={"em-show"}>Showcase</Header>
                <Bread>
                  <IntRectangleM expression={expression} a={a} b={b} N={N} />
                </Bread>
              </Section>
              <Section>
                <Header id={"em-imp"}>Implementation</Header>
                <Bread>
                  <CodeBox codeData={Implementations} codeName={"Extended-Midpoint"} />
                </Bread>
              </Section>
            </Section>
            <Section>
              <Header id={"tm"}>Trapezoidal Method</Header>
              <Bread>
                <a href={"https://math24.net/trapezoidal-rule.html"}>Resource</a>
              </Bread>
              <Section>
                <Header id={"tm-show"}>Showcase</Header>
                <Bread>
                  <IntTrapezoidalM expression={expression} a={a} b={b} N={N} />
                </Bread>
              </Section>
              <Section>
                <Header id={"tm-imp"}>Implementation</Header>
                <Bread>
                  <CodeBox codeData={Implementations} codeName={"Trapezoidal"} />
                </Bread>
              </Section>
            </Section>
            <Section>
              <Header id={"sm"}>Simpson's Method</Header>
              <Bread>
                <a href={"https://math24.net/simpsons-rule.html#example1"}>
                  Resource
                </a>
              </Bread>
              <Section>
                <Header id={"sm-show"}>Showcase</Header>
                <Bread>
                  <IntSimpsonsM expression={expression} a={a} b={b} N={N} />
                </Bread>
              </Section>
              <Section>
                <Header id={"sm-imp"}>Implementation</Header>
                <Bread>
                  <CodeBox codeData={Implementations} codeName={"Simpsons"} />
                </Bread>
              </Section>
            </Section>
          </Article>
          <IntegrateBox expressionToParent={expressionCallback} />
        </div>
      </div>
    </>
  );
};

export default Integration;
