#use node 8 as runtime image
FROM node:16

#set working directory 
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install any needed packages
RUN npm install

# Make port 7005 available to the world outside this container
EXPOSE 7005

# app source
COPY . .

CMD  ["node","getAge.js"]
