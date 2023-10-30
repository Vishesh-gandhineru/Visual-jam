import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);


    const handelNav = () => {
        setIsOpen (!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="headerContainer z-50 bg-white  py-3 md:py-6 ">
        
        <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
               <Link to="/">
               <img src="/public/logo.svg" alt="Logo" className="h-8" />
               </Link> 
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10 text-black items-center">
                
                <Link to="/work" className="font-normal uppercase text-[14px] tracking-wider">Our work</Link>
                <Link to="/our-team" className="font-normal uppercase text-[14px] tracking-wider ">Our crew</Link>
                <Link to="/contact-us" className="font-normal uppercase text-[14px] tracking-wider">Email us</Link>
                <button className='text-[14px] bg-[#01adef] p-3 text-[#fff] font-normal upprecase' >  Book a call</button>
            </nav>

            

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <i className="fas fa-bars"></i>
            </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
            <div className="mobileNav md:hidden container mx-auto mt-4 space-y-4 bg-[#000] text-[white] px-4 py-5">
                <Link to="/work" className="block text-xs text-center tracking-[2px] text-white uppercase font-light" onClick={handelNav}>Our Work</Link>
                <Link to="/our-team" className="block text-xs text-center text-white  uppercase font-light" onClick={handelNav}>Our crew</Link>
                <Link to="/contact-us" className="block text-xs text-center text-white uppercase font-light" onClick={handelNav}>Email us</Link>
                <button className='uppercase w-full text-xs bg-[#01adef] p-3 text-white font-light' onClick={handelNav} >  Book a call</button>
   
            </div>
        )}
    </header>
);
}

