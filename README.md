# Almighty simple rest api

A small library to have a response from a given endpoint.

It is made to be used in the middle of an http request and an http response, so you can use whether http server that you want.


When cloning this repository, it has dependencies managed as git submodules so you can clone the project and its submodules adding --recursive to the clone command:

```
git clone --recursive git@github.com:ferllop/rest-api.git
```

There is a working example inside the example directory. To run it:
```
npm run start
```

and from another terminal, running:
```
curl localhost:3000
```

will respond with:
```
{"message":"In Endpoint"}
```

and if you run:
```
curl localhost:3000/not-existing-endpoint
```

will respond with:
```
{"error":"Not Found"}
```

If you want to run tests or start the example in watch mode remember to install the required dependencies with:
```
npm install
```

