import { PresentationChartBarIcon, BuildingLibraryIcon, BeakerIcon, UserGroupIcon, PlusIcon, PaperAirplaneIcon, AcademicCapIcon } from '../../components/Icons';

const ProfessorPage = () => {
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

export default ProfessorPage;
