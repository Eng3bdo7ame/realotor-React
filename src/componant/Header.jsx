import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const linkClasses = (path) => {
        return location.pathname === path
            ? 'py-2 text-gray-800 font-semibold border-b-4 border-red-500'
            : 'text-gray-500 hover:text-gray-800';
    };

    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
            <header className="flex justify-between items-center p-4 max-w-6xl mx-auto">
                <div>
                    <img
                        className="h-5 cursor-pointer"
                        src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
                        alt="logo"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div>
                    <ul className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-10 text-sm md:text-base">
                        <li><Link to="/" className={linkClasses('/')}>Home</Link></li>
                        <li><Link to="/offer" className={linkClasses('/offer')}>Offer</Link></li>
                        <li><Link to="/signin" className={linkClasses('/signin')}>SignIn</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
