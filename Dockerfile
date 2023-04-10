FROM node:19-alpine3.16
# RUN addgroup app && adduser -S -G app app
# USER app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5173

# Exec form
CMD ["npm", "run", "dev"]

# ENTRYPOINT ["npm", "run", "dev"] # like CMD but harder to override (need to specify --entrypoint)