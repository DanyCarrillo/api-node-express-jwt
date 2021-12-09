# Documentación API Película


Guía que permitirá conocer todo lo necesario para ejecutar y consumir la API de película.

## Requesitos

- Nodejs 14.x
- Mysql
- Insomnia

## Instalación de dependencias

1. Clonar el proyecto https://github.com/DanyCarrillo/api-node-express-jwt.git
2. Ejecutar `npm install` para instalar todas las dependencias. 

## Configuraciones

3. Ingresar a la carpeta `docs/database` y ejecutar query que se encuentra en el archivo `goluukdb.sql`
4. Cambiar de nombre el archivo `.env.example` por `.env`, además, se debe ingresar las variables de entorno.
5. Importar la colección de insomnia que se encuentra en la carpeta `docs/insomnia-collection`.

Si ya tenemos todos los pasos ejecutados, estamos listos para correr el proyecto.

## Ejecutar el proyecto

- `npm run start` para ejecutar el proyecto.
- Consumir los servicios que se encuentran en la colección de insomnia.
