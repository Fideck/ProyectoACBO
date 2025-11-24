# ProyectoACBO
Adelante del proyecto
Para realizar la prueba o testeo del modulo users se deben ejecutar los siguientes comandos en la terminal en la raiz del proyecto
Instalar dependencias principales:
npm install prisma --save-dev
npm install @prisma/client
npm install @nestjs/config
npm install @nestjs/jwt passport passport-jwt bcrypt @nestjs/passport
Inicializar Prisma:
npx prisma init
Otras dependencias:
npm install class-validator class-transformer
Iniciar el proyecto:
npm run start:dev  
IMPORTANTE!!!
- El desarrollo del proyecto usa PostgresSQL como base de datos, por lo cual si se intenta realizar alguna peticion POST o GET no funcionara salvo que se tenga instalado postgres y editado el archivo .env 
con la URL correcta.
- Otro dato importante se esta trabajando con las siguientes tecnologias:
    Angular CLI: 15.2.4
    Node: 25.2.1 (Unsupported)
    Package Manager: npm 11.6.2
  en caso de no tener actualizado saldran errores.
