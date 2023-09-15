import NavbarCSS from './navbar.module.css'
import Image from 'next/image'

const Navbar = (props:any) => {
    return (

        <div className={`${NavbarCSS.header} ${props.className}`}>
            <Image
                src="/nav_logo.svg"
                alt="Isabeau Jackson's Logo"
                className={`${NavbarCSS.circleBackground}`}
                width={100}
                height={24}
                priority
            />
            <div className={`${NavbarCSS.navText} ${NavbarCSS.horizFlex}`}>
                <h1 className={`${NavbarCSS.flexItem} ${NavbarCSS.openSansBold}`}>PORTFOLIO</h1>
                <h1 className={`${NavbarCSS.flexItem} ${NavbarCSS.openSansBold}`}>RESUME</h1>
                <h1 className={`${NavbarCSS.flexItem} ${NavbarCSS.openSansBold}`}>CONTACT</h1>
            </div>
        </div>
        );
}

export default Navbar;