#  Luz e Cena

Uma aplicação web para exibição de filmes em cartaz, desenvolvida com React, TypeScript e Vite para o curso de aplicações tipadas e escaláveis com TypeScript da Alura
## Funcionalidades

- **Catálogo de Filmes**: Visualização de filmes em cartaz com informações detalhadas
- **Sistema de Busca**: Busca por título de filmes em tempo real
- **Filtros Avançados**: Filtragem por categoria (2D/3D), censura e gênero
- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Newsletter**: Seção para cadastro de newsletter
- **API REST**: Backend simulado com JSON Server

## Tecnologias Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca para interface de usuário
- **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática
- **Vite 7.1.7** - Build tool moderna e rápida
- **CSS Modules** - Estilização modular e escopada
- **React Icons** - Biblioteca de ícones

### Backend & Ferramentas
- **JSON Server** - API REST simulada
- **Axios** - Cliente HTTP para requisições
- **ESLint** - Linter para qualidade de código
- **Classnames** - Utilitário para manipulação de classes CSS

## Estrutura do Projeto

```
luz-e-cena/
├── public/                 # Arquivos estáticos
│   ├── capas_de_filmes/   # Capas dos filmes
│   ├── Ícones/           # Ícones da aplicação
│   ├── Imagens/          # Imagens e banners
│   └── Logo_Favicon/     # Logo e favicon
├── src/
│   ├── api/              # Configuração da API
│   ├── components/       # Componentes React
│   │   ├── Banner/       # Componente de banner
│   │   ├── Button/       # Botão reutilizável
│   │   ├── CardMovie/    # Card de filme
│   │   ├── Fieldset/     # Campo de formulário
│   │   ├── Footer/       # Rodapé da aplicação
│   │   ├── Header/       # Cabeçalho da aplicação
│   │   ├── Input/        # Campo de entrada
│   │   ├── Link/         # Link personalizado
│   │   ├── Logo/         # Componente de logo
│   │   ├── Menu/         # Menu de navegação
│   │   ├── MovieList/    # Lista de filmes
│   │   ├── MovieSection/ # Seção principal de filmes
│   │   ├── Newsletter/   # Seção de newsletter
│   │   ├── Selector/     # Seletor de filtros
│   │   ├── Tag/          # Tag de categoria
│   │   └── Types/        # Definições de tipos TypeScript
│   ├── hooks/            # Custom hooks
│   │   ├── useFetchMovies.ts  # Hook para buscar filmes
│   │   └── useFilterMovies.ts # Hook para filtrar filmes
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Ponto de entrada da aplicação
│   └── index.css         # Estilos globais
├── db.json               # Base de dados JSON
├── package.json          # Dependências e scripts
└── vite.config.ts        # Configuração do Vite
```

## Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd luz-e-cena
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Em outro terminal, inicie o JSON Server**
   ```bash
   npm run server
   ```

5. **Acesse a aplicação**
   - Frontend: http://localhost:5173
   - API: http://localhost:3001

## 📋 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint
- `npm run server` - Inicia o JSON Server na porta 3001

### Hooks Customizados
- `useFetchMovies`: Gerencia o carregamento de dados dos filmes
- `useFilterMovies`: Controla a lógica de busca e filtros

### API
- Base URL configurável em `src/api/index.ts`
- Endpoints RESTful simulados pelo JSON Server
- Tratamento de erros implementado
---

**Nota**: Este é um projeto de demonstração desenvolvido para fins educacionais e de portfólio.
