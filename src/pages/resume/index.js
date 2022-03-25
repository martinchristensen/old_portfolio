import React from 'react';
import {Document, Page, pdfjs} from "react-pdf";
import ResumePDF from './martinC-public-resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    return (
        <>
            <iframe style={pdfIframe} src={ResumePDF + "#view=FitV"} width={"100%"} height={"100%"}/>
        </>
    );
};

const  pdfIframe = {
    position: "absolute",
    left: "0"
}

export default Resume;