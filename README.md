# Construa uma plataforma LMS: Next.js 13, React, Stripe, Mux, Prisma, Tailwind, MySQL | Curso Completo 2023

Este é um repositório para construir uma plataforma LMS: Next.js 13, React, Stripe, Mux, Prisma, Tailwind, MySQL 


Características principais:

- Navegar e filtrar cursos
- Compre cursos usando Stripe
- Marcar capítulos como concluídos ou incompletos
- Cálculo do progresso de cada curso
- Painel do Aluno
- Modo professor
- Criar novos cursos
- Criar novos capítulos
- Reordene facilmente a posição do capítulo arrastando e soltando
- Faça upload de miniaturas, anexos e vídeos usando UploadThing
- Processamento de vídeo usando Mux
- Reprodutor de vídeo HLS usando Mux
- Editor de rich text para descrição do capítulo
- Autenticação usando Clerk
- ORM usando Prisma
- Banco de dados MySQL usando Planetscale


### Prerequisitos

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-lms-platform.git
```

### Instalar Pacotes

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Comando 

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
