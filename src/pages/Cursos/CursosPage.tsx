import React, { useState } from 'react';
import CourseCard from '../../components/CourseCard';
import { SearchIcon, ChevronDownIcon } from '../../components/Icons';

const CursosPage = () => {
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

export default CursosPage;
