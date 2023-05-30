# Backend Padel Trotters

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#Tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
  </ol>
</details>

## Sobre el proyecto
Este proyecto requería una API funcional para un proyecto final de libre creacion. En este caso estamos creando una base de datos sobre una aplicacion de padel, con al menos una relación de uno a muchos y una relación de muchos a muchos, donde puedes registrarte, loguearte y crear partidas con un entrenador asociado.

## Tecnologias utilizadas

<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascript-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.mysql.com/">
  <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>

## Diagrama BD
<img width="537" alt="Captura de pantalla 2023-05-12 a las 14 02 46" src="https://github.com/s0usaa/dav-fsd-geekshub-BBDD-final/assets/120210515/2074e115-9858-4846-8d73-f237159567f1">

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install ` para instalar las dependencias.
3. Conectamos nuestro repositorio con la base de datos en el config.json
4. Creamos la base de datos con ``` $ npx sequelize-cli db:create```
5. Ejecutamos las migraciones con: ``` $ npx sequelize-cli db:migrate ``` 
6. Ejecutamos los seeders con: ``` $ npx sequelize-cli db:seed:all ``` 
7. Para iniciar el servidor:  ``` $ npm run dev ```

## Endpoints
<details> -->
<summary>Endpoints</summary>
  
  Para ver y utilizar los endpoints del proyecto, basta con descargar la compilacion e importarla en Postman.
  
  [PadelTrotters.postman_collection 2.json.zip](https://github.com/s0usaa/dav-fsd-geekshub-BBDD-final/files/11601644/PadelTrotters.postman_collection.2.json.zip)

