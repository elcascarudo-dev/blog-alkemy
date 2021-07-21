#Warm-up challenge sync - Back-end


### Pasos para entorno de desarrollo

  1.- Levantar contenedor con MySQL

  Crear el archivo docker-compose.yml

```
version: '3.1'

services:

  db:
    image: mysql
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: alkemy
    ports: 
      - 3306:3306
      - 33060:33060

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

  2.- ejecutar contenedor

```
docker-compose up -d
```


  3.- Clonar repositorio

```
git clone https://github.com/elcascarudo-dev/blog-alkemy.git
```

  4.- Instalar paquetes 

```
cd blog-alkemy
npm install
```

 5.- Ejecutar en modo desaroollo

```
npm run start:dev
```