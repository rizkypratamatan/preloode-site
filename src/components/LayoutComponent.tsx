import {IconSearch} from "@tabler/icons-react";
import {Link, Outlet} from "react-router";


export default function LayoutComponent() {
    return (
        <>
            <header className="fixed z-50 flex gap-8 items-center w-full bg-black p-5 text-white">
                <h1 className="logo">
                    <Link to="/">
                        <img src="/resources/images/logo.png" alt="Preloode Digital Teknologi Logo"/>
                    </Link>
                </h1>
                <nav className="grow">
                    <ul className="main-menu">
                        <li><Link className="active" to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="flex bg-white rounded-lg text-gray">
                    <input className="w-[13.75rem] px-4 leading-11" placeholder="Search..."/>
                    <button className="w-[2.5rem] cursor-pointer"><IconSearch className="mx-auto" size={'1.25rem'}/>
                    </button>
                </div>
                <div className="flex">
                    <Link className="px-8 py-3 leading-5 font-semibold" to="/login/">Login</Link>
                    <Link className="px-8 py-3 bg-blue rounded-lg leading-5 font-semibold" to="/register/">Register</Link>
                </div>
                <div>
                    <img className="cursor-pointer" src="/resources/images/hamburger.png" alt="Hamburger Icon"/>
                </div>
            </header>
            <Outlet></Outlet>
        </>
    );
}