import React, { useEffect, useState } from 'react';
import Header from "./Header.js";
import {Link} from 'react-router-dom'
import "../css/Home.css";


export default function Form() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api-truyen.onrender.com/api/data')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    return (
        <>
            <Header />
            <div className="menu">
                <div>
                    <ul className="menu-nav">
                        <li className="menu-details">List</li>
                        <li className="menu-details">Category</li>
                        <li className="menu-details">News</li>
                        <li className="menu-details">Setting</li>
                    </ul>
                </div>
            </div>


            <div className='grid'>
                <div className='row'>
                    {data.map((story) => (
                        <div className='col c-4' key={story.id}>
                            <div className='wrap-product' >
                                <div className='wrap-img'>
                                    <img className='img' src={story.imageBackground} alt='' />
                                </div>
                                <div className='image-name'>{story.name}</div>
                                <button>
                                    <Link to={`/${story.id}`} className="button">Watch</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
