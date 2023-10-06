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
- Processamento de vídeo usando Mux(Substituido pelo Youtube Player)
- Reprodutor de vídeo HLS usando Mux(Substituido pelo Youtube Player)
- Editor de rich text para descrição do capítulo
- Autenticação usando Clerk
- ORM usando Prisma
- Banco de dados MySQL usando Planetscale


### Pre-requisitos

**Node version 18.x.x**

### Clonar Repositório

```shell
git clone [https://github.com/AntonioErdeljac/next13-lms-platform.git](https://github.com/Paulo-Santos20/CHS-Course-LMS.git)
```

### Instalar Pacotes

```shell
npm i
```

### Instalação .env file


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

### Comandos Prisma

Adicione MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Iniciar o app

```shell
npm run dev
```

## Comando 

Running commands with npm `npm run [command]`

| comando         | descrição                             |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
