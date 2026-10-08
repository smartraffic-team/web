# SmartTraffic

O SmartTraffic tem como proposta o controle inteligente de trânsito com visão computacional e inteligência artificial na borda, com detecção de veículos e pedestres e prioridade para pessoas com mobilidade reduzida.

Este repositório contém o **site de apresentação do projeto**, desenvolvido em React e TypeScript, com interface em português brasileiro. A detecção com IA e o controle de semáforos são objetivos do sistema e ainda não estão implementados neste código.

## Estado atual

| Área | Implementação atual |
| --- | --- |
| Início (`/`) | Apresentação da proposta, ilustração de semáforo e botões de demonstração e repositório. |
| Documentação (`/docs`) | Página criada, com mensagem de conteúdo em breve. |
| Sobre (`/about`) | Página criada, com mensagem de informações da equipe em breve. |
| Navegação | Cabeçalho com links entre as páginas e rodapé com link para a organização no GitHub. |
| Idioma | Textos em PT-BR e documento configurado como `pt-BR`. |
| Automação | GitHub Actions instala as dependências e executa o build em pushes e pull requests. |

Os botões “Ver demonstração” e “Repositório no GitHub” ainda não possuem ações. Os arquivos `PrioritySection.tsx` e `RepoSection.tsx` estão vazios e não são utilizados. Não há backend, banco de dados, autenticação, captura de vídeo ou integração com YOLOv8 neste repositório.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Componentes da interface. |
| TypeScript 6 | Tipagem do código. |
| Vite 8 | Servidor de desenvolvimento e build de produção. |
| React Router 7 | Navegação entre as páginas. |
| Tailwind CSS 3, PostCSS e Autoprefixer | Estilização e processamento de CSS. |
| ESLint 10 | Análise estática do código. |

As dependências estão declaradas no `package.json`, com versões de instalação registradas no `package-lock.json`.

## Como executar

Use Node.js 24 e npm. A versão Node.js 24.12.0 foi utilizada na validação do build. No estado atual, não é necessário configurar `.env` nem iniciar serviços externos.

Na pasta do projeto, execute:

```bash
npm ci
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`. Para encerrar o servidor, pressione `Ctrl + C`.

No PowerShell, se houver bloqueio da execução de `npm.ps1`, utilize:

```powershell
npm.cmd ci
npm.cmd run dev
```

## Build e verificação

```bash
# Analisar o código
npm run lint

# Verificar os tipos e gerar os arquivos de produção
npm run build

# Visualizar o build localmente, após a compilação
npm run preview
```

O build executa `tsc -b` e depois `vite build`. O resultado fica em `dist/`. O preview serve para conferir esse resultado localmente.

Para publicar o frontend, a hospedagem deve servir `dist/` e direcionar as rotas da aplicação para `index.html`, pois a navegação utiliza `BrowserRouter`. Isso permite abrir diretamente `/docs` e `/about`.

A automação em `.github/workflows/ci.yml` usa Node.js 20 e executa `npm ci` e `npm run build`. A inclusão do lint e a padronização da versão do Node.js fazem parte do plano abaixo. Não há script de testes automatizados configurado.

## Estrutura do projeto

```text
.github/workflows/ci.yml   Build automatizado
public/                   Arquivos públicos
src/
  assets/                 Recursos visuais
  components/             Cabeçalho, rodapé e apresentação inicial
  pages/                  Início, Documentação e Sobre
  styles/globals.css      Estilos globais e diretivas do Tailwind
  App.tsx                 Layout e rotas
  main.tsx                Inicialização do React
index.html                Documento HTML, idioma e título da aba
package.json              Dependências e comandos
vite.config.ts            Configuração do Vite
```

## Plano de desenvolvimento do sistema

As etapas a seguir são uma proposta de evolução. As tecnologias do backend, o hardware e os critérios de desempenho ainda precisam ser definidos; não representam funcionalidades já disponíveis.

### 1. Concluir o site de apresentação

- [ ] Preencher a página Sobre com equipe, contexto e objetivos.
- [ ] Preencher a Documentação com arquitetura proposta e instruções de uso.
- [ ] Conectar os botões aos destinos de demonstração e repositório.
- [ ] Criar as seções de prioridade de mobilidade e repositórios, se confirmadas no escopo.
- [ ] Revisar a interface em telas pequenas, a navegação por teclado e o contraste.

**Entrega:** site navegável com conteúdo completo e links funcionais.

### 2. Definir o escopo do protótipo

- [ ] Documentar os cenários de detecção de veículos e pedestres.
- [ ] Definir como identificar e atender a necessidade de prioridade na travessia.
- [ ] Selecionar a fonte de vídeo e o dispositivo de processamento na borda.
- [ ] Definir os dados trocados entre detecção, regras de trânsito e interface.
- [ ] Estabelecer métricas de precisão, latência e critérios de aceitação.

**Entrega:** especificação do protótipo e contratos de integração definidos.

### 3. Construir a demonstração visual

- [ ] Criar uma tela de demonstração com dados simulados.
- [ ] Exibir contagens de veículos e pedestres, estado do semáforo e solicitações de prioridade.
- [ ] Identificar claramente quando os dados forem simulados.
- [ ] Preparar estados de carregamento, indisponibilidade e erro.

**Entrega:** fluxo de demonstração validável antes da integração com a detecção.

### 4. Implementar detecção e serviço de integração

- [ ] Avaliar o YOLOv8 citado na apresentação com vídeos representativos do projeto.
- [ ] Implementar o processamento de vídeo e avaliar os resultados pelas métricas definidas.
- [ ] Criar o serviço responsável por disponibilizar eventos e estado do sistema.
- [ ] Integrar a interface aos dados processados.
- [ ] Definir se há necessidade de persistência e quais dados armazenar.

**Entrega:** demonstração integrada com detecções reais e limitações documentadas.

### 5. Implementar e validar as regras de controle

- [ ] Definir os estados do semáforo e as transições permitidas.
- [ ] Implementar as regras de prioridade e os tempos de travessia definidos para o protótipo.
- [ ] Definir o comportamento em caso de perda de vídeo ou comunicação.
- [ ] Validar os cenários em simulação e, depois, em bancada com o hardware escolhido.

**Entrega:** protótipo de controle validado em ambiente de teste, com resultados registrados.

### 6. Consolidar qualidade e publicação

- [ ] Adicionar testes para as regras de controle e os contratos de integração.
- [ ] Incluir lint e testes na integração contínua.
- [ ] Padronizar a versão do Node.js entre desenvolvimento e CI.
- [ ] Configurar a hospedagem do frontend e o ambiente dos serviços implementados.
- [ ] Documentar instalação, configuração, operação e limitações da demonstração.

**Entrega:** versão demonstrável, com build reproduzível e documentação de operação.
