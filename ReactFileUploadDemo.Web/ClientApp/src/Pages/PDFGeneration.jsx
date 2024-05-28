import { useState, useRef } from 'react';
import axios from 'axios';


const PDFGeneration = () => {

    const [name, setName] = useState('');


    const onDownloadClick = async() => {
        window.location.href = `/api/fileupload/GeneratePdf?name=${name}`;
    }

    return (
        
        <div className="d-flex vh-100" style={{ marginTop: -70 }}>
            <div className="d-flex w-100 justify-content-center align-self-center">
                <div className="row">
                    <div className="col-md-10">
                        <input value={name} onChange={e => setName(e.target.value)} className='form-control' />
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={onDownloadClick}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PDFGeneration;