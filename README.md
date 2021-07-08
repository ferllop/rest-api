# Almighty simple rest api

A small library to have a response from a given endpoint.

It is made to be used in the middle of an http request and an http response, so you can use any http server.

There is a working example inside the example directory. But first, remember to install the dependencies with:
```
$ npm install
```
And the you can run the example with:
```
$ npm run example
```

and from another terminal, running:
```
$ curl localhost:3000
```

will respond with:
```
{"message":"In Endpoint"}
```

and if you run:
```
$ curl localhost:3000/not-existing-endpoint
```

will respond with:
```
{"error":"Not Found"}
```
