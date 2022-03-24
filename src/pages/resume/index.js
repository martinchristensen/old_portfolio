import React from 'react';
import {Document, Page, pdfjs} from "react-pdf";
import ResumePDF from './martinC-public-resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    return (
        <div  id={'page-container'}>
            {/*<Document file={ResumePDF} OnLoadError={console.error}>*/}
            {/*    <Page className={'pdf'} pageNumber={1}/>*/}
            {/*</Document>*/}
            <iframe style={pdfIframe} src={ResumePDF + "#view=FitV"} width={"100%"} height={"100%"}/>
        </div>
    );
};

const  pdfIframe = {
    position: "absolute",
    left: "0"
}

export default Resume;