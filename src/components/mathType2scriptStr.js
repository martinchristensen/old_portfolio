export function mathType2scriptStr (mathType)
{
    let scriptStr = mathType.replaceAll("^", "**");
    //Trig functions
    scriptStr = scriptStr.replaceAll("sin", "Math.sin");
    scriptStr = scriptStr.replaceAll("cos", "Math.cos");
    scriptStr = scriptStr.replaceAll("tan", "Math.tan");
    scriptStr = scriptStr.replaceAll("asin", "Math.asin");
    scriptStr = scriptStr.replaceAll("acos", "Math.acos");
    scriptStr = scriptStr.replaceAll("atan", "Math.atan");

    scriptStr = scriptStr.replaceAll("sqrt", "Math.sqrt");
    return scriptStr;
}