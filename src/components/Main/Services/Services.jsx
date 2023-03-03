import React from 'react'
import './Services.scss'
import ServicesItem from './ServicesItem/ServicesItem'



function Services() {
    return (
        <div className='container services'>
            <div className="section-services">
                <div className="services__top">
                    <h3>Xizmatlar</h3>
                    <p>
                        Sizga qulay bo’lgan xizmatlar to’plamidan foydalanib vaqtingizni va pulingizni tejash imkoni 
                    </p>
                </div>
                <div className="services__center">
                    <ServicesItem desc='To’yxona' link="/wedding" />
                    <ServicesItem desc='Taklifnomalar' link="/invitations" />
                    <ServicesItem desc='Gullar' link="/flowers" />
                    <ServicesItem desc='Uzuk'  link="/ring" />
                    <ServicesItem desc='To’y liboslari' link="/weddingDresses" />
                    <ServicesItem desc='San’atkorlar' link="/artists" />
                    <ServicesItem desc='Sartarosh/Stilistlar' link="/hairdresser" />
                    <ServicesItem desc='Sahna bezagi' link="stageDecoration"  />
                    <ServicesItem desc='Sozandalar' link="/composers" />
                    <ServicesItem desc='To’y avtomobili' link="weddingCard" />
                    <ServicesItem desc='Shirinliklar'  link="sweets" />
                    <ServicesItem desc='Sovg’alar' link="gifts" />
                    <ServicesItem desc='Foto Video operator' link="photoVideoOperator" />
                    <ServicesItem desc='Oshpazlar' link="chefs" />
                    <ServicesItem desc='Multi qahramonlar' link="multiHeroes" />
                    <ServicesItem desc='FotoStudio' link="fotoStudio" />
                </div>
            </div>
        </div>
    )
}

export default Services
