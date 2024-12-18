# Etapa 1: Construcción
FROM node:14 AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir archivos estáticos
FROM nginx:alpine

# Copiar los archivos de build generados en la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto en el contenedor
EXPOSE 5050 

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
