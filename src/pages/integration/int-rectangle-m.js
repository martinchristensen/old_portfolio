import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel, VictoryLine, VictoryScatter,
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
      scriptStr2Tex(props.expression).replaceAll("x", "m") +
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
            <VictoryArea
                style={{ data: { fill: "#638fde" }}}
                data={result[2]}
                x={"x"}
                y={"y"}
            />
            <VictoryBar
              labels={({ datum }) =>
                "yi: " +
                datum.y.toFixed(5) +
                "\nmi: " +
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
              barRatio={0.01}
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
  const bars = [];
  let mi = a;
  let xi = mi;
  bars.push({x: xi, y: expression(xi + h/2)})
  for (let i = 0; i < N - 1; i++) {
    if (i === 0) {
      mi += h / 2;
    } else {
      mi += h;
    }
    const yi = expression(mi);
    result += yi * h;
    data.push({ x: mi, y: yi });

    xi += h;
    bars.push({x: xi, y: expression(mi)})
    bars.push({x: xi, y: expression(mi + h)
  })
  }
  return [result, data, bars];
}

export default IntRectangleM;
