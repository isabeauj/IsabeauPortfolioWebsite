import './navbar.css'
import Image from 'next/image'

const Navbar = (props:any) => {
    return (
    
        <div className={`header ${props.className}`}>
            <Image
                src="/nav_logo.svg"
                alt="Isabeau Jackson's Logo"
                className="circle-background"
                width={100}
                height={24}
                priority
            />
            <div className='nav-text horiz-flex'>
                <h1 className='flex-item open-sans-bold'>PORTFOLIO</h1>
                <h1 className='flex-item open-sans-bold'>RESUME</h1>
                <h1 className='flex-item open-sans-bold'>CONTACT</h1>
            </div>

        </div>
        );
}

export default Navbar;