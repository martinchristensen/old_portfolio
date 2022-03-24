import React, {useState} from 'react';
import Highlight from "react-highlight";
import './code-box.css'

const CodeBox = (Props) => {
    const [selected, setSelected] = useState(0)

    const data = Props.codeData
    return (
        <>
            <div className={"codeBox"}>
                {data.filter(item => item.name === Props.codeName).map((items, index) => {
                    return (
                        <>
                        <button key={items.key} className={index === selected ? "btnLang btnActive" : "btnLang"} onClick={e => {setSelected(index)}}>{items.lang}</button>
                        <div key={items.key} className={index === selected ? "highlightWrapper highlightActive" : "highlightWrapper"}>
                            <Highlight language="c++">
                                {items.code}
                            </Highlight>
                        </div>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default CodeBox;