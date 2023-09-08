Projeto Kenzie motors:

DEPENDENCIAS BACKEND:
cors, @types/cors, bcryptjs, typeORM,jsonwebtoken,zod, pg, express, dotenv, swagger
DEPENDENCIAS FRONTEND:
@hookforms/resolvers, axios, react, react-router-dom, react-hook-form, zod, styled-components

#COMANDOS PARA INSTALAÇÃO DE DEPENDENCIAS:
npm install --production
#COMANDOS PARA INICIALIZAR SERVIDOR:
npm run dev

#PREECHIMENTO .ENV:
DATABASE_URL="postgresql://user:password@host:port/db"
SECRET_KEY =

#ROTAS BACKEND:
@USERS
post = /users
get = /users
get = /user/id
patch = /users/id
delete = /users/id

@CARS
post = /cars (Usuário logado)
get = /cars/user/id (Usuário logado)
get = /cars
patch = /cars/id (Usuário logado)
delete = /cars/id (Usuário logado)

@COMMENTS
post = /comments (Usuário logado)
get = /comments/id
patch = /comments/id (Usuário logado)
delete = comments/id (Usuário logado)

@DOC API
/api-docs
