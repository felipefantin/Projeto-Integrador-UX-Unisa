import CourseCard from '../../components/CourseCard';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '../../components/Icons';

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

const HomePage = () => (
    <>
        <HomeHeroSection />
        <EmployabilityProgramSection />
        <CoursesSection />
        <UniversityCampusesSection />
    </>
);

export default HomePage;
