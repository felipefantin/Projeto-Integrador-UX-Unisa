import { PageName, NAV_ITEMS } from '../types';
import { PaperAirplaneIcon } from './Icons';

interface FooterProps {
    navigateTo: (page: PageName) => void;
}

const Footer = ({ navigateTo }: FooterProps) => {
    const polos = ["Adolfo Pinheiro", "Santo Amaro", "Marechal Deodoro", "Interlagos"];

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

export default Footer;
