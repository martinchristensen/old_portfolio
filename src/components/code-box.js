import React, {useEffect, useState} from 'react';
import Highlight from "react-highlight";
import './code-box.css'

const CodeBox = (Props) => {
    const [selected, setSelected] = useState(0)
    // const [data, setData] = useState({...Props.codeData})
    //
    // useEffect(() => {
    //     let isMounted = true;
    //     fetchData();
    //     return () => {
    //         isMounted = false;
    //     };
    //     // simulate some Web API fetching
    //     function fetchData() {
    //         setTimeout(() => {
    //             // drop "if (isMounted)" to trigger error again
    //             // (take IDE, doesn't work with stack snippet)
    //             if (isMounted) setData(Props.data)
    //             else console.log("aborted setState on unmounted component")
    //         }, 10000);
    //     }
    // },[Props.codeData]);

    const handleSelect = (e, index) => {
        setSelected(index);
        e.stopPropagation()
    }

    console.log(Props.codeData);

    return  Props.codeData ? (
        <>
            <div className={"codeBox"}>
                {Props.codeData?.filter(item => item.name === Props.codeName).map((items, index) => {
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

// onClick={e => {setSelected(index)}}