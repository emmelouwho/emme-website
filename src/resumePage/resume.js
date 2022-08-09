import React from 'react';
import pdf from './main-resume.pdf';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf'

const SectionTitle = styled.div`
    font-family: 'Fjalla One', sans-serif;
    font-size: 20px;
    text-transform: uppercase;

    align-self: flex-start;
    margin: 15px;
`;

class Resume extends React.Component {
    constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    render() {
        return (
            <div className='resume'>
                <Document file={pdf} onLoadError={console.error} >
                    <Page pageNumber={1}/>
                </Document>

                <a className='resume-download' href={pdf} download>
                    download my resume!
                </a> 
            </div>
        );
    }
}

export default Resume;
