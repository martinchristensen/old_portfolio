import React from 'react';
import {scriptStr2Tex} from "../../components/scriptStr2Tex";
import {
    VictoryArea,
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryLabel,
    VictoryLine,
    VictoryTooltip
} from "victory";
import {MathComponent} from "mathjax-react";

const config = {
    loader: { load: ["input/asciimath", "output/chtml", "ui/menu"] },
};

const IntTrapezoidalM = (props) => {
    try {
        const result = intTrapezoidalM(
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
            "}\\left[" +
            scriptStr2Tex(props.expression) +
            "\\right] + " + (result[1][result[1].length -1 ]["y"]/2).toFixed(2) + "\\right)=" +
            result[0].toFixed(3);
        const texError =
            "\\mathcal{O} \\left( \\frac{" + ((props.b - props.a)**3).toFixed(2) + "f''}" + "{" + props.N ** 2 + "} \\right)";

        return (
            <>
                <div style={{ display: "flex", flexWrap: "wrap", maxWidth: 900 }}>
                    <VictoryChart
                        domainPadding={{ x: 0 }}
                        domain={{ x: [props.a, props.b] }}
                    >
                        <VictoryLabel text={""} x={225} y={30} textAnchor="middle" />
                        <VictoryLine
                            style={{ data: { stroke: "#376edf", strokeWidth: 1 }}}
                            data={result[1]}
                            x={"x"}
                            y={"y"}
                        />
                        <VictoryArea
                            style={{ data: { fill: "#638fde" }}}
                            data={result[1]}
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

function intTrapezoidalM(expression, a, b, N) {
    const h = (b - a) / (N-1);
    const data = [];
    //x_0
    let xi = a;
    let yi = expression(xi)/2;
    let result = h*yi;
    data.push({ x: xi, y: yi*2 });
    //x_1 to x_N-2
    for (let i = 1; i <= N - 2; i++) {
        xi += h;
        yi = expression(xi);
        result += yi * h;
        data.push({ x: xi, y: yi });
    }
    //x_N-1
    xi += h;
    yi = expression(xi)/2
    result += h*yi
    data.push({ x: xi, y: yi*2 });
    return [result, data];
}

export default IntTrapezoidalM;