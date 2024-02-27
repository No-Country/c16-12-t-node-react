# Dev

1. Entrar a la carperta `Back` y dentro de ella ejecutar el siguiente comando para instalar las dependencias.

```bash
$ pnpm install
```

2. Copiar el archivo `.env.template` y renombrar con `.env` y modificar la variables de entorno, ejemplo:

```bash
BD_NAME=nocountry
```

3. En tu máquina local tiene que estar ejecutandose el server de **mysql**

4. Ejecutar el siguiente comando para poblar la base de datos

```bash
$ pnpm run seed
```

5. Ejecutar el comando para iniciar el proyecto.

```bash
$ pnpm run dev
```
