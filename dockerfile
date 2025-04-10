# base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install --legacy-peer-deps


# install vite globally if not already in dependencies
RUN npm install -g vite

# copy project files
COPY . .

# expose port
EXPOSE 9999

# run dev server
CMD ["npm", "run", "dev"]
