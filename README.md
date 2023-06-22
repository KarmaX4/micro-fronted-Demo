# micro-fronted-Demo

This is a basic example of how Mico-frontend works with Module Federation and how we can use redux in it.

#how-to-run
step 1 =>  install on packages with npm install (npm i)
           (make sure to do this with all 3 apps )
           
step 2 =>  run all 3 apps with npm start.

step 3 => now just use the host app.

The host app work as container, all the other apps in this mf are working on the container app and it will running on http://localhost:8080/
in client-1 we made a redux store which we are using in host and client-2
