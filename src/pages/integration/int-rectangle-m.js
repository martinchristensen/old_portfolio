import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel, VictoryLine,
  VictoryTooltip,
} from "victory";
import { MathComponent } from "mathjax-react";
import React from "react";
import { scriptStr2Tex } from "../../components/scriptStr2Tex";

const IntRectangleM = (props) => {
  try {
    const result = intRectangleM(
      function (x) {
        return eval(props.expression);
      },
      props.a,
      props.b,
      props.N
    );
    const h = (props.b - props.a) / (props.N-1);
    const texSum =
      h.toFixed(3) +
      "\\sum_{i = 1}^{" +
      (props.N - 1) +
      "}\\left[" +
      scriptStr2Tex(props.expression) +
      "\\right]=" +
      result[0].toFixed(3);
    const texError =
      "\\mathcal{O} \\left( \\frac{1}" + "{" + props.N ** 2 + "} \\right)";

    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: 900 }}>
          <VictoryChart
            domainPadding={{ x: 0 }}
            domain={{ x: [props.a, props.b] }}
          >
            <VictoryLabel text={""} x={225} y={30} textAnchor="middle" />
            <VictoryBar
              labels={({ datum }) =>
                "yi: " +
                datum.y.toFixed(5) +
                "\nxi: " +
                datum.x.toFixed(5) +
                "\narea: " +
                (Math.abs(datum.y * h)).toFixed(5)
              }
              labelComponent={
                <VictoryTooltip
                  labelComponent={<VictoryLabel dx={-50} textAnchor="left" />}
                  flyoutStyle={{ stroke: "none", color: "none" }}
                  cornerRadius={0}
                  flyoutWidth={120}
                  center={{ x: 225, y: 100 }}
                  pointerLength={0}
                />
              }
              data={result[1]}
              x={"x"}
              y={"y"}
              barWidth={({ x }) => h*175}
              // barRatio={1.25}
              style={{ data: { fill: "#3770e3"} }}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onMouseOver: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => ({
                            style: { fill: "tomato" },
                          }),
                        },
                        {
                          target: "labels",
                          mutation: () => ({ active: true }),
                        },
                      ];
                    },
                    onMouseOut: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => {},
                        },
                        {
                          target: "labels",
                          mutation: () => ({ active: false }),
                        },
                      ];
                    },
                  },
                },
              ]}
            />
            <VictoryLine
                samples={2000}
                style={{data:
                      {stroke: "red", strokeWidth: 1}
                }}
                y={(data) => eval(props.expression.replaceAll("x", "data.x"))}
            />
            <VictoryAxis label={"x"} style={{ axisLabel: { fontSize: 10 } }} />
            <VictoryAxis
              dependentAxis
              label={"y"}
              padding={{ right: 100 }}
              style={{ axisLabel: { fontSize: 10, padding: 40 } }}
            />
          </VictoryChart>
        </div>
        <p>
          The integral is estimated to be:
        </p>
        <MathComponent tex={texSum} />
        <p>
          With an error of:
        </p>
        <MathComponent tex={texError} />
      </>
    );
  } catch (error) {
    return (
      <>
        <h3 style={{ color: "tomato" }}>
          {" "}
          {props.expression} cannot be evaluated{" "}
        </h3>
      </>
    );
  }
};

function intRectangleM(expression, a, b, N) {
  const h = (b - a) / (N - 1);
  let result = 0;
  const data = [];
  let xi = a;
  for (let i = 0; i < N - 1; i++) {
    if (i === 0) {
      xi += h / 2;
    } else {
      xi += h;
    }
    const yi = expression(xi);
    result += yi * h;
    data.push({ x: xi, y: yi });
  }
  return [result, data];
}

export default IntRectangleM;
