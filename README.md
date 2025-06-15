
# UNISA - Portal Universitário Interativo

<div align="center">
  <img src="https://images.maisbolsas.com.br/content/superior/instituicao/logo/g/unisa.png" alt="UNISA Logo" width="200"/>
</div>

<p align="center">
  Um portal web moderno e responsivo para a Universidade de Santo Amaro (UNISA), construído com React, TypeScript e Tailwind CSS.
</p>

## ✨ Sobre o Projeto

Este projeto é uma simulação de um portal universitário interativo para a UNISA. O objetivo é fornecer uma interface de usuário rica e intuitiva para diferentes perfis de usuários, como visitantes, alunos e professores. A aplicação é desenvolvida com foco em boas práticas de UI/UX, responsividade e organização de código.

## 🚀 Funcionalidades Implementadas

Atualmente, o portal conta com as seguintes seções e funcionalidades:

*   **Navegação Principal:**
    *   Header fixo com logo da UNISA e links de navegação.
    *   Menu mobile responsivo.
    *   Funcionalidade de busca no site (UI implementada).
    *   Footer com links úteis e informações de contato.
*   **Página Inicial (Home):**
    *   Seção de herói com destaque para a tradição da UNISA.
    *   Seção sobre o Programa de Empregabilidade.
    *   Destaque de alguns cursos oferecidos.
    *   Galeria de imagens dos campus da universidade.
*   **Página da Universidade:**
    *   Informações sobre a história e missão da UNISA.
    *   Destaque da infraestrutura (Biblioteca, Laboratórios, Complexo Esportivo).
    *   Motivos para escolher a UNISA.
*   **Página de Cursos:**
    *   Listagem completa de cursos com filtros por nome/palavra-chave e categoria (Graduação, Pós-Graduação, Extensão).
    *   Cards detalhados para cada curso.
*   **Página do Aluno (Área do Aluno):**
    *   Layout com sidebar para navegação específica do aluno (Aulas Virtuais, Notas, Atividades).
    *   Perfil do aluno com avatar e RA.
    *   Listagem de "Aulas Virtuais" em formato de cards.
    *   Filtro para buscar matérias.
*   **Página do Professor (Área do Professor):**
    *   Layout com sidebar para navegação específica do professor (Minhas Turmas, Recursos, Calendário, Comunicados).
    *   Perfil do professor com avatar e departamento.
    *   Seção "Minhas Turmas" com cards informativos.
    *   Seção de "Avisos e Comunicados".
    *   Seção de "Ferramentas Rápidas" (Lançar Notas, Publicar Material, etc.).

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

```
.
├── index.html            # Ponto de entrada HTML principal
├── metadata.json         # Metadados do projeto
├── README.md             # Este arquivo
└── src/                  # Diretório principal do código fonte
    ├── App.tsx           # Componente principal da aplicação e roteamento
    ├── main.tsx          # Ponto de entrada do React (renderiza o App)
    ├── types.ts          # Definições de tipos e constantes globais
    ├── components/       # Componentes reutilizáveis
    │   ├── Icons.tsx
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── CourseCard.tsx
    │   └── VirtualClassCard.tsx
    └── pages/            # Componentes de página (cada página é um módulo)
        ├── Home/
        │   └── HomePage.tsx
        ├── Aluno/
        │   └── AlunoPage.tsx
        ├── Universidade/
        │   └── UniversidadePage.tsx
        ├── Cursos/
        │   └── CursosPage.tsx
        └── Professor/
            └── ProfessorPage.tsx
```

## 🛠️ Tecnologias Utilizadas

*   **React 19:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva.
*   **Babel Standalone:** Para transpilação de JSX/TypeScript em tempo real no navegador (configuração de desenvolvimento/prototipagem).
*   **FontAwesome:** Para ícones (utilizado no footer).
*   **Google Fonts:** Para as fontes Inter e Lora.
*   **ESM (via esm.sh):** Para importação de módulos React diretamente no navegador.



---

<p align="center">
  Feito para o projeto Integrador do curso de Engenharia de Software pela comunidade de desenvolvedores.
</p>
