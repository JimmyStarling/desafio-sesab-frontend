# Frontend - Desafio SESAB

Este repositório contém o **frontend** desacoplado do projeto **Desafio SESAB**, desenvolvido em **Vue 3 + TypeScript + Pinia + Vite**.

---

## Instalação

Clone o projeto e instale as dependências:

```bash
git clone <url-do-repo>
cd desafio-sesab-frontend
npm install
```

---

## ▶️ Executando o projeto

Para rodar em ambiente de desenvolvimento:

```bash
npm run dev
```

O projeto ficará disponível em:
```
http://localhost:5173
```

---

## 🌐 Rotas principais

- `/login` → Tela de login  
- `/logout` → Efetua logout do usuário  
- `/register` → Cadastro de usuário  
- `/dashboard` → Área administrativa com listagem e gerenciamento de usuários  

---

## 👤 Usuário padrão

Ao rodar o projeto, você pode acessar com o usuário padrão:

- **E-mail:** `root@root.com`  
- **Senha:** `root`

---

## 📂 Estrutura

- `src/views` → Telas principais (`LoginView`, `RegisterView`, `DashboardView`, etc.)  
- `src/stores` → Gerenciamento de estado com Pinia  
- `src/components` → Componentes reutilizáveis (ex.: `UsersTable`)  

---

## 🔗 Integração com o Backend

Este frontend consome a API REST desenvolvida no repositório backend:  
👉 [Desafio SESAB Backend](https://github.com/JimmyStarling/desafio-sesab-backend/tree/dev)

---
