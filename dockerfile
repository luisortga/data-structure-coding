# Utilizamos la imagen oficial de Python
FROM alpine

# Establecemos el directorio de trabajo
WORKDIR /src/js

# Copiamos el script de Python al directorio de trabajo
COPY async.js .

# Ejecutamos el script Javscript
CMD ["node ", "async.js"]