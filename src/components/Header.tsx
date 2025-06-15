import React, { useState, useEffect, useRef } from 'react';
import { PageName, NAV_ITEMS, UNISA_LOGO_URL } from '../types';
import { SearchIcon, MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
    navigateTo: (page: PageName) => void;
    currentPage: PageName;
}

const Header = ({ navigateTo, currentPage }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef<HTMLInputElement>(null);

    const toggleMobileMenu = () => {
        if (isSearchActive) setIsSearchActive(false);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const handleMobileLinkClick = (page: PageName) => {
        navigateTo(page);
        setIsMobileMenuOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchActive(prev => !prev);
        setSearchTerm(''); 
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (isSearchActive && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchActive]);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log("Search term:", searchTerm);
            // setIsSearchActive(false); 
        }
    };
    
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="bg-white sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                         <div 
                            className={`flex-shrink-0 cursor-pointer ${isSearchActive && 'md:hidden'}`}
                            onClick={() => navigateTo('Home')}
                            role="button"
                            tabIndex={0}
                            aria-label="UNISA Home"
                        >
                           <img 
                                src={UNISA_LOGO_URL} 
                                alt="UNISA Logo" 
                                className="h-20 md:h-auto w-auto max-h-[60px] md:max-h-[70px]"
                            />
                        </div>

                        {isSearchActive ? (
                            <form onSubmit={handleSearchSubmit} className="flex-grow flex items-center min-w-0">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Buscar no site..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:ring-unisa-blue focus:border-unisa-blue focus:outline-none text-sm"
                                    aria-label="Campo de busca"
                                />
                                <button
                                    type="button"
                                    onClick={toggleSearch}
                                    className="p-2.5 text-gray-500 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200 hover:text-unisa-blue"
                                    aria-label="Fechar busca"
                                >
                                    <CloseIcon className="w-5 h-5" />
                                </button>
                            </form>
                        ) : (
                            <nav className="hidden md:flex space-x-6 items-center flex-grow justify-center">
                                {NAV_ITEMS.map((item) => (
                                    <button 
                                        key={item} 
                                        onClick={() => navigateTo(item)}
                                        className={`text-sm font-medium pb-1 ${currentPage === item ? 'text-unisa-blue border-b-2 border-unisa-blue' : 'text-gray-600 hover:text-unisa-blue'}`}
                                        aria-current={currentPage === item ? 'page' : undefined}
                                    >
                                        {item.toUpperCase()}
                                    </button>
                                ))}
                            </nav>
                        )}

                        <div className={`flex items-center ${isSearchActive ? 'md:ml-2' : 'ml-auto md:ml-0'}`}>
                            {!isSearchActive && (
                                <button 
                                    aria-label="Abrir busca" 
                                    className="text-gray-500 hover:text-unisa-blue p-2"
                                    onClick={toggleSearch}
                                >
                                    <SearchIcon />
                                </button>
                            )}
                            {!isSearchActive && (
                                <button 
                                    className="md:hidden text-gray-500 hover:text-unisa-blue p-2 ml-2" 
                                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                                    aria-expanded={isMobileMenuOpen}
                                    onClick={toggleMobileMenu}
                                >
                                    {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {!isSearchActive && (
                <div 
                    className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} pt-20`}
                >
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        {NAV_ITEMS.map((item) => (
                            <button 
                                key={item} 
                                onClick={() => handleMobileLinkClick(item)}
                                className={`w-full text-left py-3 px-4 rounded-md text-lg ${currentPage === item ? 'bg-unisa-blue text-white font-semibold' : 'text-gray-700 hover:bg-gray-100 hover:text-unisa-blue'}`}
                                aria-current={currentPage === item ? 'page' : undefined}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
