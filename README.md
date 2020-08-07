# Guia Examen Prueba - sigma3ds

La prueba está generado una api backend escrito en NodeJS y el cual expondráuna API REST para la interacción con la aplicación frontend con Vue

## instalar el aplicativo

Se debe tener instalado

- nodejs
- npm

clonar el repositorio y ejecutar el comando `npm install`  

## Instalar la aplicacion entorno desarrollo local

- [x] npm install


## Status Codes
devuelve los siguientes códigos de estado en el API:

| Status Code | Description |
|-------------| ----------- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR`|


## Responses
API devuelven la representación JSON de los recursos creados o editados. Sin embargo, si se envía una solicitud no válida o se produce algún otro error, devuelve una respuesta JSON en el siguiente formato:

```
{
  "message" : string,
  "success" : bool,
  "data"    : string
}
```

El atributo `mensaje` contiene un mensaje comúnmente utilizado para indicar errores o, en el caso de eliminar un recurso, el éxito de que el recurso se eliminó correctamente.

El atributo `status` describe si la transacción fue exitosa o no.

El atributo `data` contiene cualquier otro metadato asociado con la respuesta. Esta será una cadena escapada que contiene datos JSON.


### Development Local

Ejecutar `npm run start`  permite navegar localmente.
- Local (Backend):    http://localhost:8081/  
- Local (Frontend):   http://localhost:8081/  
- Network (Frontend): http://192.168.1.3:8081/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
