import React from 'react';
import {scriptStr2Tex} from "../../components/scriptStr2Tex";
import {VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryTooltip} from "victory";
import {MathComponent} from "mathjax-react";

const IntSimpsonsM = (props) => {
    try {
        const result = intSimpsonsM(
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
            "\\left(" + (result[1][0]["y"]/2).toFixed(2) + "+" +
            "\\sum_{i = 1}^{" +
            (props.N - 2) +
            "}\\left[c_i\\cdot" +
            scriptStr2Tex(props.expression) +
            "\\right] + " + (result[1][result[1].length -1 ]["y"]/2).toFixed(2) + "\\right)=" +
            result[0].toFixed(3) +
            "\\quad \\text{where}\\; c_i=" +
            "\\bigg\\{\\begin{array}{lr}\n" +
            "        2, & \\text{for}\\; i\\; \\text{is even}\\\\\n" +
            "        4, & \\text{for}\\; i\\; \\text{is odd}\\\\\n" +
            "        \\end{array}";
        const texError =
            "\\mathcal{O} \\left( \\frac{1}" + "{" + props.N ** 4 + "} \\right)";

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
                            data={result[1]}
                            interpolation="cardinal"
                            x={"x"}
                            y={"y"}
                        />
                        <VictoryBar
                            labels={({ datum }) =>
                                "yi: " +
                                datum.y.toFixed(5) +
                                "\nxi: " +
                                datum.x.toFixed(5)
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
                            style={{ data: { fill: "#376edf" } }}
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
                    with an error of:
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

function intSimpsonsM(expression, a, b, N) {
    const h = (b - a) / N;
    const data = [];
    //x_0
    let xi = a;
    let yi = expression(xi);
    let result = yi;
    data.push({ x: xi, y: yi });
    //x_1 to x_N-1
    let c = 2;
    for (let i = 1; i <= N - 1; i++) {
        i%2===0 ?  c = 2: c =4;
        xi += h;
        yi = expression(xi);
        result += yi*c;
        data.push({ x: xi, y: yi });
    }
    //x_N
    xi += h;
    yi = expression(xi)
    result += yi
    data.push({ x: xi, y: yi });
    return [result * (h/3), data];
}

export default IntSimpsonsM;