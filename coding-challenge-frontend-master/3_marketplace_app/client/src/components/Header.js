import React from 'react'
import '../styles/header.css'

const Header = () => {
    return (
        <header>
            <div className='headerTopContainer'>
                <div>
                    <img
                        src={'https://www.ebay-kleinanzeigen.de/static/img/common/logo/logo-ebayk-402x80.hsn0x4ev0qi.png'} alt='no img'/>
                    <p>Kostenlos. Einfach. Lokal.</p>
                </div>
                <div>
                    <button>Registrieren</button>
                    <span>oder</span>
                    <button>Einloggen</button>
                </div>
            </div>
            <div className='headerBottomContainer'>
                <div>
                    <input type='text'/>
                    <input type='text'/>
                    <button>Finden</button>
                </div>
                <div>
                    <button>Anzeige aufgeben</button>
                    <button>Meins</button>
                </div>
            </div>
        </header>
    )
}

export default Header
