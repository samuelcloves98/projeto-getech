# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# projeto-getech

Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado no seu computador (ele já vem com o gerenciador de pacotes npm incluso). Você pode verificar se ele está instalado abrindo o terminal e digitando:

Bash
node -v
npm -v
Passo a Passo
1. Obtenha o código do projeto
Você pode fazer isso de duas formas:

Usando o Git (Recomendado): Abra o terminal na pasta onde deseja salvar o projeto e clone o repositório com o link do GitHub:

Bash
git clone <url-do-repositorio>
Baixando como ZIP: Na página do repositório no GitHub, clique no botão verde Code, selecione Download ZIP, e depois descompacte a pasta no seu computador.

2. Abra a pasta do projeto no editor de código
Abra o seu editor de preferência (como o VS Code) e abra a pasta do projeto que você acabou de baixar ou clonar. Abra também o terminal integrado do editor.

3. Instale as dependências
Como os arquivos de dependências (node_modules) não vão para o GitHub para economizar espaço, você precisa baixá-los. No terminal, na raiz do projeto, execute:

Bash
npm install
(Se o projeto usar o Yarn ou pnpm, você verá arquivos como yarn.lock ou pnpm-lock.yaml, e nesse caso usaria yarn ou pnpm install).

4. Inicie o servidor de desenvolvimento
Após a instalação terminar, verifique no arquivo package.json qual é o comando de inicialização do projeto. Os mais comuns são:

Para projetos modernos (Vite):

Bash
npm run dev

5. Acesse no navegador
Assim que o servidor iniciar, o terminal exibirá um endereço local (geralmente http://localhost:5173 para Vite. Basta segurar Ctrl e clicar no link ou copiá-lo e colar no seu navegador para ver a página rodando.

Dicas extras caso encontre erros:
Versão do Node: Se o projeto for muito antigo ou muito recente, pode haver conflito de versão do Node. O uso do nvm (Node Version Manager) ajuda a alternar versões facilmente se necessário.

Erros de dependências: Se o npm install falhar, tente apagar a pasta node_modules (se chegou a ser criada parcialmente) e o arquivo package-lock.json, e execute npm install novamente.