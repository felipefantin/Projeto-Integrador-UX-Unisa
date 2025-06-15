import { BuildingLibraryIcon, BeakerIcon, UserGroupIcon, AcademicCapIcon, PresentationChartBarIcon } from '../../components/Icons';

const UniversidadePage = () => {
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

export default UniversidadePage;
