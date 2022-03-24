import React, {useState} from 'react';
import {MathComponent} from "mathjax-react";
import {scriptStr2Tex} from "../../components/scriptStr2Tex";
import {mathType2scriptStr} from "../../components/mathType2scriptStr";

const IntegrateBox = ({ expressionToParent }) => {
    const [expression, setExpression] = useState("sin(x^2+1)+2");
    const [a, setA] = useState(1);
    const [b, setB] = useState(3);
    const [N, setN] = useState(5);

    const toParent = e => {
        expressionToParent(mathType2scriptStr(expression), a, b, N)
        e.stopPropagation()
    }

    return (
        <>
        <div className={"fixed-box"}>
            <p style={{flexDirection: "column-reverse"}}> Change the showcases here</p>
            <table>
                <tbody>
                    <tr>
                        <td><label>Expression: </label></td>
                        <td><MathComponent tex={"f(x)="} /></td>
                        <td><input type="text" value={expression} onChange={e => setExpression(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Lower bound:</label></td>
                        <td><MathComponent tex={"a="} /></td>
                        <td><input type="number" value={a} onChange={e => setA(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Upper bound:</label></td>
                        <td><MathComponent tex={"b="} /></td>
                        <td><input type="number" value={b} onChange={e => setB(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td><MathComponent tex={"N="} /></td>
                        <td><input type="number" min={2} max={1000} value={N} onChange={e => setN(e.target.value)}/></td>
                    </tr>
                </tbody>
            </table>
            <MathComponent tex={"I = \\int_{" + a + "}^{" + b + "} " + scriptStr2Tex(mathType2scriptStr(expression), false) + "\\;\\mathrm{d} x"} />
            <button onClick={toParent} style={{padding: "5px", fontSize: "1rem", marginBottom: "20px", display: "flex", marginLeft: "auto", marginRight: "auto"}}>
                Estimate integral
            </button>
        </div>
        </>
    );
};

export default IntegrateBox;
