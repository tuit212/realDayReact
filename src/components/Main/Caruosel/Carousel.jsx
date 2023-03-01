import React from 'react' 
import './carousel.scss'
import img from "../../../Assets/images/main/caruosel/img.png"
import img1 from "../../../Assets/images/main/caruosel/img1.png"
import img2 from "../../../Assets/images/main/caruosel/img2.png"
import CarouselItem from './CarouselItem/CarouselItem'


function Carousel() {
    return (
        <div className='container' id='carousel'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img} alt="" className='d-block w-100 h-100' />
                        <CarouselItem 
                            title="QULAY KREDIT " 
                            text="Barcha xizmatlarni kredit orqali yopish imkoni" 
                            btn="Batafsil ma'lumot" 
                            link="/kredit" 
                        />
                    </div>
                    <div class="carousel-item">
                        <img src={img1} alt="" className='d-block w-100 h-100' />
                        <CarouselItem
                            title="Mo’jaz to’yxona" 
                            text="Barcha xizmatlarni kredit orqali yopish imkoni" 
                            btn="Batafsil ma'lumot" 
                            link="/to'yxona" 
                        />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} alt="" className='d-block w-100'  style={{height:"507px"}} />
                        <CarouselItem
                            title="HASHAMATLI ORZULAR RO’YOBI" 
                            text="Orzularingizni birga ro’yobga chiqaramiz" 
                            btn="Batafsil ma'lumot" 
                            link="/to'yxona" 
                        />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
