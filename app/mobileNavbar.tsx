import MobileNavbarCSS from './mobileNavbar.module.css'
import Image from 'next/image'

const MobileNavbar = (props: any) => {
    return (

        <div className={`${MobileNavbarCSS.header} ${props.className}`}>
            <Image
                src="/nav_logo.svg"
                alt="Isabeau Jackson's Logo"
                className={`${MobileNavbarCSS.circleBackground}`}
                width={100}
                height={24}
                priority
            />
            <div className={`${MobileNavbarCSS.navText} ${MobileNavbarCSS.horizFlex}`}>

                <svg className={`${MobileNavbarCSS.hamburger}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2H22" stroke="#CF7B0C" stroke-width="4" stroke-linecap="round" />
                    <path d="M2 12H22" stroke="#CF7B0C" stroke-width="4" stroke-linecap="round" />
                    <path d="M2 22H22" stroke="#CF7B0C" stroke-width="4" stroke-linecap="round" />
                </svg>

            </div>
        </div>
    );
}

export default MobileNavbar;