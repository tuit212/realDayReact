import React from 'react'

function WeddingHero() {
    return (
        <div className='WeddingHero_top'>
                <div className="body">
                    <p className='body__text1'>Bosh sahifa-To’yxonalar</p>
                    <h1 className='body__title'>To’yxonalar, Banketniy zal</h1>
                    <p className='body__text2'>O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping.</p>
                         <div className="body__box">
                        <input type="text" placeholder='To’yxona nomi orqali qidiruv...' className='body__box__input' />
                        <i class="fa-solid fa-magnifying-glass body__box__lupa"></i>
                        <select className='body__box__select'>
                            <option value="">Viloyatni tanlang...</option>
                            <option value="">Toshken</option>
                            <option value="">Sirdaryo</option>
                            <option value="">Samarqand</option>
                            <option value="">Buxoro</option>
                            <option value="">Farg'one</option>
                        </select>
                     </div>
                        <button className='body__box__btn'> <i class="fa-solid fa-location-dot body__box__btn__icon"></i>Kartada</button>
                </div>
        </div>
    )
}

export default WeddingHero
