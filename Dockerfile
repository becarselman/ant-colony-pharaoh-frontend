#get the latest alpine image from node registry
FROM node:20-alpine AS build-stage

#set the working directory
WORKDIR /app

#copy the package and package lock files
#from local to container work directory /app
COPY package.json /app/

#Run command npm install to install packages
RUN npm install

#copy all the folder contents from local to container
COPY . .

#create a react production build
RUN npm run build

#get the latest alpine image from nginx registry
FROM node:20-alpine

RUN npm install -g serve

#we copy the output from first stage that is our react build
#into nginx html directory where it will serve our index file
COPY --from=build-stage /app/build/ /app

WORKDIR /app

EXPOSE 3000

#CMD [ "npm", "start" ]
CMD serve -s -p 3000

