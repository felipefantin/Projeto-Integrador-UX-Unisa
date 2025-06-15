
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- Icons ---
const SearchIcon = ({ className = "w-6 h-6" }: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const ChevronLeftIcon = ({ className = "w-5 h-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon = ({ className = "w-5 h-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

const PlusIcon = ({ className = "w-5 h-5"}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const PaperAirplaneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const AcademicCapIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.708 2.057c.507-.302 1.079-.302 1.586 0l7.292 4.353a.75.75 0 0 1 .414.652v5.03c0 3.308-2.014 6.248-4.917 7.55a.75.75 0 0 1-.58-.024l-2.032-.887a.75.75 0 0 0-.58.025l-2.031.887a.75.75 0 0 1-.581.024c-2.903-1.302-4.917-4.242-4.917-7.55V7.062a.75.75 0 0 1 .414-.652l7.292-4.353Z" />
        <path d="m5.373 8.352 6.127 3.66V17.25l-5.71-2.141a.75.75 0 0 1-.416-.653V8.352Z" />
        <path d="m18.627 8.352-6.127 3.66V17.25l5.71-2.141a.75.75 0 0 0 .416-.653V8.352Z" />
    </svg>
);

const BuildingLibraryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.265 18.623A7.72 7.72 0 0 0 12 19.5a8.217 8.217 0 0 0 3.561-1.015 2.25 2.25 0 0 1-.902-1.806 7.512 7.512 0 0 0-3.316-1.782.75.75 0 0 0-.587.025l-.029.014a5.249 5.249 0 0 1-2.583-.024.75.75 0 0 0-.582.025 7.512 7.512 0 0 0-3.316 1.782 2.25 2.25 0 0 1-.902 1.806Zm1.44-8.083a.75.75 0 0 0 .582-.025l.029-.014a5.249 5.249 0 0 1 2.583.024.75.75 0 0 0 .587-.025l.029-.014a5.249 5.249 0 0 1 2.583.024.75.75 0 0 0 .587-.025l1.468-.733a.75.75 0 0 0 .029-1.316l-4.13-2.36a.75.75 0 0 0-.696 0l-4.13 2.36a.75.75 0 0 0 .029 1.316l1.468.733Z" />
        <path fillRule="evenodd" d="M3 8.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 8.25Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
);

const BeakerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 0 0-2.25 2.25v3.165c0 .324-.048.643-.142.945l-.089.297-.173.575-.174.576-.057.19-.041.135a13.33 13.33 0 0 0-1.042 3.868c0 2.16.033 4.298.098 6.425a.75.75 0 0 0 .749.749H17.25a.75.75 0 0 0 .749-.749c.065-2.126.098-4.264.098-6.424a13.333 13.333 0 0 0-1.042-3.868l-.041-.135-.057-.19-.174-.576-.173-.575-.089-.297A2.235 2.235 0 0 1 15.75 9.165V6a2.25 2.25 0 0 0-2.25-2.25h-3Zm.036 6.644a.75.75 0 0 0-.174-1.066 5.253 5.253 0 0 1 0-7.424.75.75 0 0 0 1.06-1.06 6.753 6.753 0 0 0 0 9.548.75.75 0 0 0-.885-.008Z" clipRule="evenodd" />
    </svg>
);

const UserGroupIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.104.75.75 0 0 0 .42-1.283 4.125 4.125 0 0 0-3.277-2.477c-.596.344-1.213.639-1.84.86Z" />
    </svg>
);

const PresentationChartBarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-3v-1.5h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm6 6.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Zm3.75-1.5a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm3.75-2.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V6Z" />
    </svg>
);


// --- Types ---
type PageName = 'Home' | 'Universidade' | 'Cursos' | 'Aluno' | 'Professor';
const NAV_ITEMS: PageName[] = ['Home', 'Universidade', 'Cursos', 'Aluno', 'Professor'];
const UNISA_LOGO_URL = "https://images.maisbolsas.com.br/content/superior/instituicao/logo/g/unisa.png";

// --- Header Component ---
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
        if (isSearchActive) setIsSearchActive(false); // Close search if opening menu
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const handleMobileLinkClick = (page: PageName) => {
        navigateTo(page);
        setIsMobileMenuOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchActive(prev => !prev);
        setSearchTerm(''); // Clear search term when toggling
        if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close mobile menu if search is activated
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
            // Future: navigateToSearchResults(searchTerm);
            // For now, just log and potentially close search
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
                        {/* Logo */}
                         <div 
                            className={`flex-shrink-0 cursor-pointer ${isSearchActive && 'md:hidden'}`} // Hide logo on mobile when search is active
                            onClick={() => navigateTo('Home')}
                            role="button"
                            tabIndex={0}
                            aria-label="UNISA Home"
                        >
                           <img 
                                src={UNISA_LOGO_URL} 
                                alt="UNISA Logo" 
                                className="h-20 md:h-auto w-auto max-h-[60px] md:max-h-[70px]" // Adjusted max height
                            />
                        </div>

                        {/* Search Input - Desktop and Mobile (when active) */}
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
                            // Desktop Navigation (only if search is not active)
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

                        {/* Right side icons (Search toggle, Mobile menu toggle) */}
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
                            {/* Mobile Menu Button - only show if search is not active */}
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

            {/* Mobile Menu - only show if not in search mode */}
            {!isSearchActive && (
                <div 
                    className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} pt-20`} // pt-20 to offset header
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

// --- Page Content Components ---

// --- Home Page ---
const HomeHeroSection = () => (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="md:w-1/2 w-full order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-unisa-blue mb-6 font-serif leading-tight">
              Tradição que conecta<br />você ao futuro.
            </h1>
            <p className="text-gray-700 mb-4 text-base lg:text-lg text-justify">
              Os alunos da EAD Unisa estão em todo o Brasil, em seus mais de 450 polos educacionais (em todo o Estado do Brasil há um polo Unisa).
            </p>
            <p className="text-gray-700 mb-8 text-base lg:text-lg text-justify">
              A Universidade Santo Amaro - Unisa é uma das principais instituições de ensino superior do Brasil, com mais de 55 anos de tradição.
            </p>
          </div>
          <div className="md:w-1/2 w-full order-1 md:order-2">
            <img 
                src="https://www.unisa.br/wp-content/uploads/2024/08/background-3-1.webp" 
                alt="Estudantes Unisa interagindo com tecnologia" 
                className="rounded-lg w-full h-auto object-cover max-h-[400px] md:max-h-[250px]" 
            />
          </div>
        </div>
      </div>
    </section>
);

const EmployabilityProgramSection = () => (
    <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 w-full h-64 md:h-96 graduates-bg-image rounded-lg shadow-md">
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Programa de Empregabilidade</h2>
                    <p className="text-gray-600 mb-6 text-justify">
                        Na Unisa, todos os alunos e ex-alunos têm acesso exclusivo ao Conecta, o Programa de Empregabilidade da Universidade. São vagas de empregos e estágios em companhias de todo o País, oficinas de preparação para entrevistas e confecção de currículos, dicas e muito mais. Tudo gratuito! Está matriculado ou concluiu o curso e ávido por uma vaga no mercado? É só conectar com a gente!
                    </p>
                    <div className="flex items-center justify-between mb-6">
                        <button className="text-unisa-blue hover:text-unisa-lightblue flex items-center text-sm font-medium" aria-label="Voltar no programa de empregabilidade">
                            <ChevronLeftIcon className="w-4 h-4 mr-1" />
                            Voltar
                        </button>
                        <button className="text-unisa-blue hover:text-unisa-lightblue flex items-center text-sm font-medium" aria-label="Avançar no programa de empregabilidade">
                            Avançar
                            <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                    <button className="border border-unisa-blue text-unisa-blue hover:bg-unisa-blue hover:text-white font-semibold py-2.5 px-6 rounded-md flex items-center transition-colors duration-200">
                        Conheça mais
                        <PlusIcon className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    </section>
);

interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    level?: string; // e.g., Graduação, Pós-Graduação
}
const CourseCard = ({ title, description, imageUrl, level }: CourseCardProps) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-full h-48 bg-gray-200 relative">
             <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
             {level && <span className="absolute top-2 left-2 bg-unisa-blue text-white text-xs font-semibold px-2 py-1 rounded">{level}</span>}
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-unisa-blue transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{description}</p>
        </div>
    </div>
);

const CoursesSection = () => {
    const courses = [
        { title: 'Engenharia de Software', description: 'Se dedica ao desenvolvimento, manutenção e gestão de software de forma sistemática e controlada.', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', level: 'Graduação' },
        { title: 'Análise e Desenvolvimento de Sistemas', description: 'Área da tecnologia da informação (TI) que se dedica à criação, implementação e manutenção de sistemas computacionais.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', level: 'Graduação' },
        { title: 'Engenharia da Computação', description: 'Área da engenharia que se concentra no desenvolvimento e integração de hardware e software para criar sistemas computacionais.', imageUrl: 'https://www.unisa.br/wp-content/uploads/2025/02/uc-58.png', level: 'Graduação' },
    ];

    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">Conheça Nossos Cursos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => <CourseCard key={course.title} {...course} />)}
                </div>
                 <div className="text-center mt-12">
                    <button 
                        onClick={() => {/* Implement navigation to full courses page */}}
                        className="bg-unisa-blue text-white font-semibold py-3 px-8 rounded-md hover:bg-unisa-lightblue transition-colors duration-200"
                    >
                        Ver todos os cursos
                    </button>
                </div>
            </div>
        </section>
    );
};

const UniversityCampusesSection = () => {
    const campusImages = [
        { 
            src: 'https://www.unisa.br/wp-content/uploads/2024/11/Apresentacao1cara.png', 
            alt: 'Campus UNISA Adolfo Pinheiro - Fachada Principal' 
        },
        { 
            src: 'https://imagens.ebc.com.br/1W7yr2uKF-wOd7w_ZoStc7z-MeU=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/unisa.jpg?itok=XCqX1ucc', 
            alt: 'Campus UNISA Marechal Deodoro - Área de Convivência' 
        },
        
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">Conheça os campus da Universidade</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {campusImages.map((image, idx) => (
                        <div key={idx} className="bg-gray-200 h-48 md:h-64 rounded-lg shadow-md flex items-center justify-center overflow-hidden group">
                             <img 
                                src={image.src}
                                alt={image.alt} 
                                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HomePageContent = () => (
    <>
        <HomeHeroSection />
        <EmployabilityProgramSection />
        <CoursesSection />
        <UniversityCampusesSection />
    </>
);

// --- Aluno Page Components ---
interface VirtualClassCardProps {
    title: string;
    status: string;
    imageUrl: string;
    badge?: boolean;
}

const VirtualClassCard = ({ title, status, imageUrl, badge }: VirtualClassCardProps) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-full h-40 bg-gray-200">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-md font-semibold text-gray-800 mb-1 group-hover:text-unisa-blue transition-colors">{title}</h3>
            <p className="text-xs text-gray-500">{status}</p>
        </div>
        {badge && (
            <div className="absolute top-2 right-2 bg-unisa-blue text-white p-1 rounded-full" title="Concluído ou Destaque">
                <AcademicCapIcon className="w-4 h-4" />
            </div>
        )}
    </div>
);

const AlunoPageContent = () => {
    const virtualClasses = [
        { title: "Programação Orientada a Objetos", status: "Aula 2/6 assistidas", imageUrl: "https://apexensino.com.br/wp-content/uploads/2017/08/More-To-Software-Development-1024x576-1024x576.png" },
        { title: "Projeto Integrador: UX Design", status: "Prazo final de entrega: 16/06", imageUrl: "https://cdn-wcsm.alura.com.br/2025/04/diagrama-de-design-visual.jpg" },
        { title: "Eletrônica Digital", status: "Aula 6/6 assistidas", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", badge: true },
        { title: "Ética", status: "Aula 2/8 assistidas", imageUrl: "https://nectar.empregare.com/wp-content/uploads/2023/12/etica-profissional-6.jpg" },
    ];

    const studentAvatar = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80&facepad=3&h=200&w=200";

    return (
        <div className="bg-gray-100 py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif">Área do Aluno</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="md:w-1/4 lg:w-1/5 bg-white p-6 rounded-lg shadow-xl h-fit sticky top-24">
                        <img 
                            src={studentAvatar} 
                            alt="Avatar do Aluno" 
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-unisa-blue"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 text-center mb-1">Lucas Martins</h2>
                        <p className="text-sm text-gray-500 text-center mb-4">RA: 1234567</p>
                        <nav className="space-y-2">
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 hover:text-unisa-blue rounded-md"><AcademicCapIcon className="w-5 h-5 mr-3 text-unisa-blue" />Aulas Virtuais</a>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 hover:text-unisa-blue rounded-md"><BuildingLibraryIcon className="w-5 h-5 mr-3 text-unisa-blue" />Notas e Faltas</a>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 hover:text-unisa-blue rounded-md"><BeakerIcon className="w-5 h-5 mr-3 text-unisa-blue" />Atividades</a>
                        </nav>
                    </aside>

                    <main className="md:w-3/4 lg:w-4/5">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Aulas Virtuais</h2>
                            <div className="relative w-full sm:w-64">
                                <select 
                                    aria-label="Procurar por matéria"
                                    className="block w-full appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2.5 pr-8 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-unisa-blue focus:border-unisa-blue"
                                >
                                    <option>Procure a matéria</option>
                                    {virtualClasses.map(vc => <option key={vc.title}>{vc.title}</option>)}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <ChevronDownIcon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {virtualClasses.map(vc => (
                                <VirtualClassCard key={vc.title} {...vc} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

// --- Universidade Page Components ---
const UniversidadePageContent = () => {
    const facilities = [
        { name: "Biblioteca Central", description: "Vasto acervo físico e digital, salas de estudo e pesquisa.", icon: <BuildingLibraryIcon className="w-10 h-10 text-unisa-blue mb-3"/>, imageUrl: "https://qb-assets.querobolsa.com.br/university_content/159/biblioteca.png" },
        { name: "Laboratórios Modernos", description: "Equipados com tecnologia de ponta para aulas práticas e inovação.", icon: <BeakerIcon className="w-10 h-10 text-unisa-blue mb-3"/>, imageUrl: "https://www.noticiasdaregiao.com.br/wp-content/uploads/2020/01/Cursos-Unisa-500-foto-site-1024x683.jpg" },
        { name: "Complexo Esportivo", description: "Incentivo à prática esportiva e bem-estar com diversas modalidades.", icon: <UserGroupIcon className="w-10 h-10 text-unisa-blue mb-3"/>, imageUrl: "https://medicina.unisa.br/wp-content/uploads/2024/09/Atividades-esportivas-768x432-1.jpg" },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-unisa-blue text-white py-16 md:py-24 relative">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1491841550275-500effdd95ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
                    aria-hidden="true"
                ></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4">Conheça a UNISA</h1>
                    <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">Tradição e Inovação a serviço da Educação de Excelência.</p>
                </div>
            </section>

            {/* About UNISA Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Nossa História e Missão</h2>
                            <p className="text-gray-700 mb-4 text-justify">
                                Fundada há mais de 55 anos, a UNISA tem sido um pilar na educação brasileira, comprometida com a formação de profissionais qualificados e cidadãos conscientes. Nossa missão é promover o conhecimento e a cultura, preparando nossos alunos para os desafios do mercado e da vida.
                            </p>
                            <p className="text-gray-700 text-justify">
                                Valorizamos a inovação, a ética e a responsabilidade social, buscando constantemente a excelência em ensino, pesquisa e extensão.
                            </p>
                        </div>
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                                alt="Campus UNISA" 
                                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[350px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">Nossa Estrutura</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map(facility => (
                            <div key={facility.name} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="w-full h-40 mb-4 rounded-md overflow-hidden">
                                     <img src={facility.imageUrl} alt={facility.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                {facility.icon}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-unisa-blue">{facility.name}</h3>
                                <p className="text-gray-600 text-sm">{facility.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose UNISA */}
            <section className="py-12 md:py-20 bg-unisa-blue text-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center mb-12">Por que escolher a UNISA?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <AcademicCapIcon className="w-12 h-12 mx-auto mb-4 text-white"/>
                            <h3 className="text-xl font-semibold mb-2">Tradição e Qualidade</h3>
                            <p className="text-gray-200 text-sm">Mais de meio século formando profissionais de destaque.</p>
                        </div>
                        <div>
                            <PresentationChartBarIcon className="w-12 h-12 mx-auto mb-4 text-white"/>
                            <h3 className="text-xl font-semibold mb-2">Foco na Empregabilidade</h3>
                            <p className="text-gray-200 text-sm">Programas e parcerias que conectam você ao mercado.</p>
                        </div>
                        <div>
                            <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-white"/>
                            <h3 className="text-xl font-semibold mb-2">Corpo Docente Qualificado</h3>
                            <p className="text-gray-200 text-sm">Mestres e doutores com vasta experiência acadêmica e profissional.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


// --- Cursos Page Components ---
const CursosPageContent = () => {
    const allCourses = [
        { title: 'Engenharia de Software', description: 'Desenvolvimento e manutenção de sistemas de software complexos.', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', level: 'Graduação' },
        { title: 'Análise e Desenvolvimento de Sistemas', description: 'Criação e implementação de sistemas computacionais para diversas necessidades.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', level: 'Graduação' },
        { title: 'Direito', description: 'Formação completa para atuar nas diversas áreas jurídicas.', imageUrl: 'https://uva.br/conteudo/curso-direito-carreira-vantagens-perspectivas-scaled.webp', level: 'Graduação' },
        { title: 'Psicologia', description: 'Estudo do comportamento humano e processos mentais.', imageUrl: 'https://portal.pucrs.br/wp-content/uploads/2024/07/curso-psico.jpg', level: 'Graduação' },
        { title: 'MBA em Gestão de Projetos', description: 'Especialização para liderar projetos com eficiência e estratégia.', imageUrl: 'https://netproject.com.br/blog/wp-content/uploads/2023/12/projetos.png', level: 'Pós-Graduação' },
        { title: 'Marketing Digital Avançado', description: 'Aprofunde seus conhecimentos em estratégias de marketing online.', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', level: 'Extensão' },
        { title: 'Engenharia da Computação', description: 'Desenvolvimento e integração de hardware e software.', imageUrl: 'https://www.uva.br/conteudo/hardware-software-faz-engenheiro-de-computacao-scaled.webp', level: 'Graduação' },
        { title: 'Administração', description: 'Formação para gerenciar negócios e organizações com visão estratégica.', imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', level: 'Graduação' },
    ];
    const [filter, setFilter] = useState('');
    const [category, setCategory] = useState('Todos');
    const categories = ['Todos', 'Graduação', 'Pós-Graduação', 'Extensão'];

    const filteredCourses = allCourses.filter(course => 
        (course.title.toLowerCase().includes(filter.toLowerCase()) || course.description.toLowerCase().includes(filter.toLowerCase())) &&
        (category === 'Todos' || course.level === category)
    );

    return (
        <div className="bg-gray-100 py-8 md:py-12">
            {/* Hero Section */}
            <section 
                className="py-16 md:py-24 bg-cover bg-center text-white mb-12"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80')"}}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4">Explore Nossos Cursos</h1>
                    <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">Encontre a formação ideal para o seu futuro profissional.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filters */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                    <div className="grid sm:grid-cols-2 gap-6 items-end">
                        <div>
                            <label htmlFor="search-course" className="block text-sm font-medium text-gray-700 mb-1">Buscar curso</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="search-course"
                                    placeholder="Nome ou palavra-chave..." 
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-unisa-blue focus:border-unisa-blue text-sm pr-10"
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    aria-label="Buscar curso por nome ou palavra-chave"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <SearchIcon className="w-5 h-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category-course" className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                            <div className="relative">
                                <select 
                                    id="category-course"
                                    className="block w-full appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2.5 pr-8 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-unisa-blue focus:border-unisa-blue"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    aria-label="Filtrar cursos por categoria"
                                >
                                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <ChevronDownIcon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredCourses.map(course => <CourseCard key={course.title} {...course} />)}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 py-10">Nenhum curso encontrado com os filtros aplicados.</p>
                )}
            </div>
        </div>
    );
};

// --- Professor Page Components ---
const ProfessorPageContent = () => {
    const professorAvatar = "https://media.istockphoto.com/id/1468138682/pt/foto/happy-elementary-teacher-in-front-of-his-students-in-the-classroom.jpg?s=612x612&w=0&k=20&c=sUJz_LDuIw7qs4Cwe6JXc7xIsWKVzO9jy4S1Em9lvLo=";
    const classes = [
        { id: "CS101", name: "Introdução à Ciência da Computação", students: 45, schedule: "Seg/Qua 10:00-11:50" },
        { id: "DS302", name: "Estruturas de Dados", students: 32, schedule: "Ter/Qui 14:00-15:50" },
        { id: "AI500", name: "Inteligência Artificial", students: 25, schedule: "Sex 09:00-12:50" },
    ];
    const announcements = [
        { id: 1, title: "Reunião de Departamento", date: "15/07/2024", content: "Lembrete: Reunião do departamento de Tecnologia na próxima segunda-feira às 14h." },
        { id: 2, title: "Atualização Sistema Acadêmico", date: "10/07/2024", content: "O sistema acadêmico passará por uma atualização programada no dia 20/07. Poderá haver instabilidade."}
    ];

    return (
        <div className="bg-gray-100 py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif">Área do Professor</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Sidebar */}
                    <aside className="md:w-1/4 lg:w-1/5 bg-white p-6 rounded-lg shadow-xl h-fit sticky top-24">
                        <img 
                            src={professorAvatar} 
                            alt="Avatar do Professor" 
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-unisa-blue"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 text-center mb-1">Prof. Dr. Leonardo Silva</h2>
                        <p className="text-sm text-gray-500 text-center mb-4">Departamento de Computação</p>
                        <nav className="space-y-2">
                            <a href="#" className="flex items-center p-2 text-gray-700 bg-gray-100 text-unisa-blue rounded-md font-semibold"><PresentationChartBarIcon className="w-5 h-5 mr-3 text-unisa-blue" />Minhas Turmas</a>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 hover:text-unisa-blue rounded-md"><BuildingLibraryIcon className="w-5 h-5 mr-3 text-unisa-blue" />Recursos Didáticos</a>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 hover:text-unisa-blue rounded-md"><BeakerIcon className="w-5 h-5 mr-3 text-unisa-blue" />Calendário Acadêmico</a>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 hover:text-unisa-blue rounded-md"><UserGroupIcon className="w-5 h-5 mr-3 text-unisa-blue" />Comunicados</a>
                        </nav>
                    </aside>

                    {/* Right Content Area */}
                    <main className="md:w-3/4 lg:w-4/5 space-y-8">
                        {/* Minhas Turmas Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Minhas Turmas</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {classes.map(c => (
                                    <div key={c.id} className="bg-white p-5 rounded-lg shadow-lg group hover:shadow-xl transition-shadow">
                                        <h3 className="text-lg font-semibold text-unisa-blue mb-1">{c.name} ({c.id})</h3>
                                        <p className="text-sm text-gray-600 mb-1"><UserGroupIcon className="w-4 h-4 inline mr-1" /> {c.students} alunos</p>
                                        <p className="text-sm text-gray-600 mb-3">{c.schedule}</p>
                                        <button className="text-sm bg-unisa-blue text-white py-1.5 px-3 rounded-md hover:bg-unisa-lightblue transition-colors">
                                            Ver Detalhes
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Avisos e Comunicados Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Avisos e Comunicados</h2>
                            <div className="bg-white p-5 rounded-lg shadow-lg space-y-4">
                                {announcements.map(ann => (
                                    <div key={ann.id} className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                                        <h3 className="text-md font-semibold text-gray-700">{ann.title}</h3>
                                        <p className="text-xs text-gray-500 mb-1">{ann.date}</p>
                                        <p className="text-sm text-gray-600">{ann.content}</p>
                                    </div>
                                ))}
                                {announcements.length === 0 && <p className="text-gray-500">Nenhum aviso no momento.</p>}
                            </div>
                        </section>
                         {/* Ferramentas Rápidas Section */}
                         <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ferramentas Rápidas</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <button className="bg-unisa-lightblue text-white p-4 rounded-lg shadow hover:bg-unisa-blue transition-colors text-sm font-medium flex flex-col items-center justify-center">
                                    <PlusIcon className="w-6 h-6 mb-1" />
                                    Lançar Notas
                                </button>
                                <button className="bg-unisa-lightblue text-white p-4 rounded-lg shadow hover:bg-unisa-blue transition-colors text-sm font-medium flex flex-col items-center justify-center">
                                    <PaperAirplaneIcon className="w-6 h-6 mb-1" />
                                    Publicar Material
                                </button>
                                <button className="bg-unisa-lightblue text-white p-4 rounded-lg shadow hover:bg-unisa-blue transition-colors text-sm font-medium flex flex-col items-center justify-center">
                                    <AcademicCapIcon className="w-6 h-6 mb-1" />
                                    Agendar Reunião
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};


// --- Footer Component ---
const Footer = ({ navigateTo }: { navigateTo: (page: PageName) => void }) => {
    const polos = ["Adolfo Pinheiro", "Santo Amaro", "Marechal Deodoro", "Interlagos"]; // corrected typo

    return (
        <footer className="bg-unisa-blue text-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Polos</h3>
                        <ul className="space-y-2">
                            {polos.map(polo => (
                                <li key={polo}><a href="#" className="hover:text-white text-sm transition-colors">{polo}</a></li>
                            ))}
                        </ul>
                    </div>
                     <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold text-white mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            {NAV_ITEMS.map(item => (
                                <li key={`footer-${item}`}>
                                    <button 
                                        onClick={() => navigateTo(item)}
                                        className="hover:text-white text-sm transition-colors text-left w-full"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                         <h3 className="text-xl font-semibold text-white mb-4">Entre em contato</h3>
                         <form className="flex mb-6 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Seu melhor e-mail" 
                                aria-label="Seu email para contato"
                                className="bg-unisa-lightblue text-white px-4 py-2.5 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-white/50 w-full placeholder-gray-300" 
                            />
                            <button 
                                type="submit"
                                aria-label="Enviar email"
                                className="bg-white text-unisa-blue px-4 py-2.5 rounded-r-md text-sm font-semibold hover:bg-gray-200 transition-colors"
                            >
                                <PaperAirplaneIcon className="w-5 h-5" />
                            </button>
                         </form>
                         <div className="flex space-x-6">
                            <a href="#" aria-label="Facebook da UNISA" className="text-gray-300 hover:text-white transition-colors"><i className="fab fa-facebook-f fa-lg"></i> <span className="sr-only">Facebook</span></a>
                            <a href="#" aria-label="Instagram da UNISA" className="text-gray-300 hover:text-white transition-colors"><i className="fab fa-instagram fa-lg"></i> <span className="sr-only">Instagram</span></a>
                            <a href="#" aria-label="LinkedIn da UNISA" className="text-gray-300 hover:text-white transition-colors"><i className="fab fa-linkedin-in fa-lg"></i> <span className="sr-only">LinkedIn</span></a>
                         </div>
                    </div>
                </div>
                <div className="border-t border-unisa-lightblue/50 pt-8 text-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} UNISA - Universidade de Santo Amaro. Todos os Direitos Reservados.</p>
                </div>
            </div>
        </footer>
    );
};

// --- App Component ---
const App = () => {
    const [currentPage, setCurrentPage] = useState<PageName>('Home');

    const navigateTo = (page: PageName) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <HomePageContent />;
            case 'Aluno':
                return <AlunoPageContent />;
            case 'Universidade':
                return <UniversidadePageContent />;
            case 'Cursos':
                 return <CursosPageContent />;
            case 'Professor':
                return <ProfessorPageContent />;
            default:
                return <HomePageContent />;
        }
    };
    
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 selection:bg-unisa-blue selection:text-white">
            <Header navigateTo={navigateTo} currentPage={currentPage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer navigateTo={navigateTo} />
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root container not found for React application.");
}
