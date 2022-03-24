import React, {useState} from 'react';
import Highlight from "react-highlight";
import './code-box.css'

const CodeBox = (Props) => {
    const [selected, setSelected] = useState(0)

    const data = Props.codeData

    const handleSelect = (e, index) => {
        setSelected(index);
        e.stopPropagation()
    }
    return (
        <>
            <div className={"codeBox"}>
                {data.filter(item => item.name === Props.codeName).map((items, index) => {
                    return (
                        <div key={index.toString()+"IAmUnique"}>
                            <button className={index === selected ? "btnLang btnActive" : "btnLang"} onClick={ e => handleSelect(e, index)}>{items.lang}</button>
                            <div className={index === selected ? "highlightWrapper highlightActive" : "highlightWrapper"}>
                                <Highlight className={items.lang} language={items.lang}>
                                    {items.code}
                                </Highlight>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default CodeBox;

// onClick={e => {setSelected(index)}}