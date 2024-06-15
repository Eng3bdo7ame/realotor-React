import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // to the link of page active
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    // function if linke active == link : make syle for it 
    const linkClasses = (path) => {
        return location.pathname === path
            ? ' py-2 text-gray-500 font-semibold border-b-[3px] border-red-500 text-black'
            : 'text-gray-500 hover:text-gray-800';
    };



    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
            <header className="flex justify-between p-4 max-w-6xl mx-auto">
                <div>
                    <img className="h-5 cursor-pointer" src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo"
                        onClick={() => navigate('/')} />
                </div>
                <div>
                    <ul className="flex justify-center space-x-10">
                        <li><a href="/" className={linkClasses('/')}>Home</a></li>
                        <li><a href="/offer" className={linkClasses('/offer')}>Offer</a></li>
                        <li><a href="/signin" className={linkClasses('/signin')}>SignIn</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
