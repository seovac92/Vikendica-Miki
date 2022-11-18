import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {
    const [mobileNavStatus,setMobileNavStatut]=useState(false)

    return (
        <header>
        <div className="navbar-wrapper">
            <nav>
                <div className="menu-container">
                    <Image className='logo' priority src="/logo.svg" alt='logo-vikendica miki' width={150} height={70} />
                    <div className="hamburger-container" onClick={()=>setMobileNavStatut(!mobileNavStatus)}>
                        <div className={mobileNavStatus?"activeHamburger":"hamburger"} />
                    </div>
                    <ul className='widescreen-nav'>
                        <li><Link href="/">Почетна</Link></li>
                        <li><Link href="/about">О&nbsp;нама</Link></li>
                        <li><Link href="/gallery">Галерија</Link></li>
                    </ul>
                </div>
                <div className={mobileNavStatus?"active-mobile-nav":"mobile-nav"} onClick={()=>setMobileNavStatut(false)}>
                    <ul className="nav-list">
                    <li><Link href="/">Почетна</Link></li>
                        <li><Link href="/about">О нама</Link></li>
                        <li><Link href="/gallery">Галерија</Link></li>
                    </ul>
                </div>    
            </nav>
        </div>
        </header>
     );
}
 
export default NavBar;