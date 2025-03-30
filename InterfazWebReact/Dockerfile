# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor(interfazWebReact)
WORKDIR /app

# Copia los archivos de dependencias antes de copiar todo el código
COPY package.json ./

# Instala las dependencias
RUN npm install

# Copia todo el codigo del proyecto
COPY . .

# Expone el puerto que usa Vite  (5173)
EXPOSE 5173

# Comando por defecto para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]