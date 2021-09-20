# nodejs-app-finished
* How to build:
```
docker build .
```
* How to run:
```
docker run -p 8080:8080 [name-build-image]
```
* Port app running  
Default app running on port `8080`. You change port on `./server.js`
```
app.listen(8080);
```
