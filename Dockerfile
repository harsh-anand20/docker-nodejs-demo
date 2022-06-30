FROM node:alpine
EXPOSE 3000
COPY . /app
WORKDIR /app
CMD ["node", "app.js"]