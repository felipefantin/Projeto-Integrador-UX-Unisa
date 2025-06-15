import VirtualClassCard from '../../components/VirtualClassCard';
import { AcademicCapIcon, BuildingLibraryIcon, BeakerIcon, ChevronDownIcon } from '../../components/Icons';

const AlunoPage = () => {
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

export default AlunoPage;
