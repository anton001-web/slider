import React from 'react'
import './App.css';
import {galleryData} from "./galleryData";
import {useState} from "react";
import prev from './images/prev.png'
import next from './images/next.png'

export default App;

function App() {
    const sliderModal = React.createRef()
    const [current, setCurrent] = useState(0)
    const slides = galleryData.length

    const toggleModalSlider = (e) => {
        if(e.target.dataset.setslide) {
            const slide = parseInt(e.target.dataset.slide)
            setCurrent(slide)
            if(sliderModal.current.classList.contains('active')) {
                sliderModal.current.classList.remove('active')
            } else {
                sliderModal.current.classList.add('active')
            }
        } else if(e.target.dataset.control) {
            sliderModal.current.classList.remove('active')
        }
    }

    const prevSlide = () => setCurrent(current === 0 ? slides - 1 : current - 1)
    const nextSlide = () => setCurrent(current === slides - 1 ? 0 : current + 1)

    return (
        <>
            <div className='gallery-block'>
                <div className='slider' ref={sliderModal} data-control onClick={toggleModalSlider}>
                    <div className='slide'>
                        <div className='slider-btns'>
                            <div className='btn-block' onClick={prevSlide}>
                                <img className='slider-btn btn-prev' src={prev}/>
                            </div>
                            <div className='btn-block' onClick={nextSlide}>
                                <img className='slider-btn btn-next' src={next}/>
                            </div>
                        </div>
                        {
                            galleryData.map((img, ind) => (
                                ind === current && (
                                    <img className='slider-img' src={img.src}/>
                                )
                            ))
                        }
                    </div>
                </div>
                <div className='gallery-list'>
                    {
                        galleryData && galleryData.map((item, index) => (
                            <div className='card' key={index}>
                                <img  src={item.src} data-slide={index} data-setslide className='img' onClick={toggleModalSlider}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
