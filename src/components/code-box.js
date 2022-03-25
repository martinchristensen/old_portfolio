import React, {useEffect, useState} from 'react';
import Highlight from "react-highlight";
import './code-box.css'

const CodeBox = (props) => {
    const [selected, setSelected] = useState(0)

    const handleSelect = (e, index) => {
        setSelected(index);
        e.stopPropagation()
    }

    return  props.codeData ? (
        <>
            <div className={"codeBox"}>
                {props.codeData?.filter(item => item.name === props.codeName).map((items, index) => {
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
    ) : (<p>Loading...</p>);
};

export default CodeBox;