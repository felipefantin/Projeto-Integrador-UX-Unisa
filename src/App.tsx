import React, { useState } from 'react';
import { PageName } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import AlunoPage from './pages/Aluno/AlunoPage';
import UniversidadePage from './pages/Universidade/UniversidadePage';
import CursosPage from './pages/Cursos/CursosPage';
import ProfessorPage from './pages/Professor/ProfessorPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState<PageName>('Home');

    const navigateTo = (page: PageName) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <HomePage />;
            case 'Aluno':
                return <AlunoPage />;
            case 'Universidade':
                return <UniversidadePage />;
            case 'Cursos':
                 return <CursosPage />;
            case 'Professor':
                return <ProfessorPage />;
            default:
                return <HomePage />;
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

export default App;
