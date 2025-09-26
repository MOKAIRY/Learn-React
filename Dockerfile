FROM node:22-alpine

WORKDIR /app

ARG PROJECT_NAME
ENV PROJECT_NAME=$PROJECT_NAME

COPY ${PROJECT_NAME}/package*.json ./ 

RUN npm install

COPY ${PROJECT_NAME} ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
