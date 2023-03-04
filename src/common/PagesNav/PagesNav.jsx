import React from 'react'
import './PagesNav.scss'
import { NavLink } from 'react-router-dom'

function PagesNav() {
    return (
        <div className='pagesNav-section'>
            <NavLink to={"/wedding"} className='pagesNav'>
                To’yxonalar
            </NavLink>
            <NavLink to={"/stageDecoration"} className='pagesNav'>
                Sahna bezagi
            </NavLink>
            <NavLink to={"/weddingCard"} className='pagesNav'>
                To’y avtomobili
            </NavLink>
            <NavLink to={"/weddingDresses"} className='pagesNav'>
                To’y liboslari
            </NavLink>
            <NavLink to={"/invitations"} className='pagesNav'>
                Taklifnomalar
            </NavLink>
            <NavLink to={"/flowers"} className='pagesNav'>
                Gullar
            </NavLink>
            <NavLink to={"/ring"} className='pagesNav'>
                Uzuklar
            </NavLink>
            <NavLink to={"/sweets"} className='pagesNav'>
                Shirinliklar
            </NavLink>
            <NavLink to={"/gifts"} className='pagesNav'>
                Sovg’alar
            </NavLink>
            <NavLink to={"/fotoStudio"} className='pagesNav'>
                Foto studio
            </NavLink>
            <NavLink to={"/multiHeroes"} className='pagesNav'>
                Multi qahramonlar
            </NavLink>
            <NavLink to={"/photoVideoOperator"} className='pagesNav'>
                Foto Video operator
            </NavLink>
            <NavLink to={"/hairdresser"} className='pagesNav'>
                Sartarosh/Stilistlar
            </NavLink>
            <NavLink to={"/artists"} className='pagesNav'>
                San’atkorlar
            </NavLink>
            <NavLink to={"/composers"} className='pagesNav'>
                Sozandalar
            </NavLink>
            <NavLink to={"/chefs"} className='pagesNav'>
                Oshpazlar
            </NavLink>
        </div>
    )
}

export default PagesNav
