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
                    <ServicesItem desc='To’yxona' />
                    <ServicesItem desc='Taklifnomalar' />
                    <ServicesItem desc='Gullar' />
                    <ServicesItem desc='Uzuk' />
                    <ServicesItem desc='To’y liboslari' />
                    <ServicesItem desc='San’atkorlar' />
                    <ServicesItem desc='Sartarosh/Stilistlar' />
                    <ServicesItem desc='Sahna bezagi' />
                    <ServicesItem desc='Sozandalar' />
                    <ServicesItem desc='To’y avtomobili' />
                    <ServicesItem desc='Shirinliklar' />
                    <ServicesItem desc='Sovg’alar' />
                </div>
            </div>
        </div>
    )
}

export default Services
