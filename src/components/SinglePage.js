import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../css/SinglePage.css";
import Header from './Header';

export default function SinglePage () {
    const [data, setData] = useState([])

    const location = useLocation();
    const productId = location.pathname.split('/')[1];
    // const path = location.pathname;
    // console.log(productId, path);
    useEffect(() => {
        fetch(`https://api-truyen.onrender.com/api/data/${productId}`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [productId])
    console.log(data)
    return (
        <>
            <Header />

            <h1 className='storytitle'>Story Information</h1>
            <hr/>
            
            <div className='grid'>
                    <div>
                    <div className='wrap' key={data.id}>
                        <div className='pic-story'>
                        <img className='pic' src={data.imageBackground} alt=''/>
                        </div>
                        <div className='descrip'>
                            <div className='storyname'>{data.name}</div>
                            <div className='summary'><b>Author:</b> {data.author}</div>
                            <div className='summary'><b>Type: </b>{data.type}</div>
                            <div className='summary'><b>Status:</b> {data.status}</div>
                            <div className='summary'><b>Chapter:</b> {data.long}</div>
                            <div className='summary'>
                                {data.description && data.description.map((value,index) => (
                                    <p className='paragraph' key={index}>{value}</p>
                                ))}
                            </div>
                            <button className='btn'>Read</button>
                        </div>
                    </div>

                    <h1 className='storylist'>Chapter List</h1>
                    <hr />

                    <div className='grid'>
                        <div className='row'>
                        {data.chapter && data.chapter.map((value,index) => 
                        (
                            <div className='col descrip-list' key={index}>
                                <li className='list'>{value}</li>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}