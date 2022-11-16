import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {
    const [mobileNavStatus,setMobileNavStatut]=useState(false)

    return (
        <div className="navbar-wrapper">
            <nav>
                <div className="menu-container">
                    <Image className='logo' priority src="/logo.svg" alt='logo-vikendica miki' width={150} height={70} />
                    <div className="hamburger-container" onClick={()=>setMobileNavStatut(!mobileNavStatus)}>
                        <div className={mobileNavStatus?"activeHamburger":"hamburger"} />
                    </div>
                    <ul className='widescreen-nav'>
                        <li><Link href="/">Pocetna</Link></li>
                        <li><Link href="/about">O nama</Link></li>
                        <li><Link href="/gallery">Galerija</Link></li>
                        <li><Link href="/contact">Kontakt</Link></li>
                    </ul>
                </div>
                <div className={mobileNavStatus?"active-mobile-nav":"mobile-nav"}>
                    <ul className="nav-list">
                        <li><Link href="/">Pocetna</Link></li>
                        <li><Link href="/about">O nama</Link></li>
                        <li><Link href="/gallery">Galerija</Link></li>
                        <li><Link href="/contact">Kontakt</Link></li>
                    </ul>
                </div>    
            </nav>
        </div>
     );
}
 
export default NavBar;