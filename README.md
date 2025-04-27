# Monorepo Boilerplate

Este projeto é um **monorepo** moderno, utilizando [Turborepo](https://turbo.build/) para orquestração, com um frontend em **Vite + React + Tailwind CSS + shadcn/ui** e um backend em **TypeScript**. O gerenciamento de pacotes é feito com **pnpm**. O projeto já vem configurado com **ESLint** e outras ferramentas para garantir qualidade e produtividade no desenvolvimento.

---

## Estrutura do Projeto

```
monorepo-boilerplate/
├── apps/
│   ├── frontend/   # Aplicação web (Vite + React + Tailwind + shadcn/ui)
│   └── backend/    # Backend em TypeScript
├── packages/       # (opcional) Pacotes compartilhados
├── .vscode/        # Configurações recomendadas para o VS Code
├── turbo.json      # Configuração do Turborepo
└── pnpm-workspace.yaml
```

---

## Tecnologias Utilizadas

- **Monorepo:** [Turborepo](https://turbo.build/)
- **Gerenciador de pacotes:** [pnpm](https://pnpm.io/)
- **Frontend:** [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [TypeScript](https://www.typescriptlang.org/)
- **Lint:** [ESLint](https://eslint.org/)
- **Formatação:** [Prettier](https://prettier.io/)
- **Dev Experience:** Configuração recomendada para VS Code

---

## Primeiros Passos

### 1. Instale as dependências

```bash
pnpm install
```

### 2. Scripts principais

- **Rodar o frontend:**
  ```bash
  pnpm --filter frontend dev
  ```
- **Rodar o backend:**
  ```bash
  pnpm --filter backend dev
  ```
- **Lint (ESLint):**
  ```bash
  pnpm lint
  ```
- **Build:**
  ```bash
  pnpm build
  ```

### 3. Extensões recomendadas para VS Code

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

> As configurações recomendadas já estão no diretório `.vscode/`.

---

## Referências

- [Template Vite React TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
- [shadcn/ui](https://ui.shadcn.com/)

---

## Observações

- O ESLint está configurado tanto no backend quanto no frontend, com regras modernas para TypeScript, React e Tailwind.
- O Turborepo permite rodar e buildar os apps de forma paralela e eficiente.
- O uso de pnpm garante instalações rápidas e workspace compartilhado.
