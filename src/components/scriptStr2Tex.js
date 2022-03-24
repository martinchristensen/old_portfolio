export function scriptStr2Tex (scriptStr, index_x = true)
{
    let tex = scriptStr.replaceAll("**", "^");
    tex = tex.replaceAll("*", "\\cdot ");
    if (index_x) {
        tex = tex.replaceAll("x", "{x_i}");
    }
    //Trig functions
    tex = tex.replaceAll("Math.sin", "\\sin");
    tex = tex.replaceAll("Math.cos", "\\cos");
    tex = tex.replaceAll("Math.tan", "\\tan");
    tex = tex.replaceAll("Math.asin", "\\asin");
    tex = tex.replaceAll("Math.acos", "\\acos");
    tex = tex.replaceAll("Math.atan", "\\atan");

    return tex;
}