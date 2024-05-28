import React, { useState, useRef, useEffect } from 'react';

const Home = () => {

    const textRef = useRef(0);

    const textboxRef = useRef();
    const imageRef = useRef();

    const [text, setText] = useState('');

    useEffect(() => {
        console.log(textRef.current);
    }, [text]);


    const onTextChange = e => {
        setText(e.target.value);
        textRef.current++;
    }

    const onButtonClick = () => {
        textRef.current += 10;
    }

    const onFocusClick = () => {
        textboxRef.current.focus();
    }

    const onScollClick = () => {
        imageRef.current.scrollIntoView();
    }

    return <div style={{ marginTop: 80 }}>
        <div className="row">
            <div className='col-md-6'>
                <input type='text' onChange={onTextChange} className='form-control' />
            </div>
            <div className='col-md-6'>
                <h1>{text}</h1>
            </div>
        </div>
        <div className="row">
            <div className='col-md-6'>
                <button className='btn btn-danger w-100' onClick={onButtonClick}>Click me!!</button>
            </div>
        </div>

        <div className="row">
            <div className='col-md-6'>
                <input ref={textboxRef} type='text' className='form-control' />
            </div>
            <div className='col-md-6'>
                <button className='btn btn-dark' onClick={onFocusClick}>Focus</button>
                <button className='btn btn-info' onClick={onScollClick}>Scroll</button>
            </div>
        </div>
        <div>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
            <h1>Hello world!!</h1>
        </div>
        <img ref={imageRef} src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_01_m.jpg' />
    </div>
};

export default Home;