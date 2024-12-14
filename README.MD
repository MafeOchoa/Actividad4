# PASOS PARA CORRER EL PROYECTO:

## prerequisitos

1. Nodejs Versión 22
2. Base de datos MySql
3. Ejecutar los siguientes Scripts:
    - [Script de Tabla Usuario](scripts/usuario.sql)
    - [Script de Tabla Libro](scripts/tablalibro.sql)

## Variables de entorno
Copiamos el [env.templates](env.templates) lo renombramos a [.env](.env) y llenamos la informacion solicitada.


## Ejecutar la App
1. Instalar dependencias 

```
npm i
```
2. Iniciar App
```
npm start
```
3. Probar Endpoints 

    Importar la [coleccion](coleccion_postman/Libreria.postman_collection.json) en postman