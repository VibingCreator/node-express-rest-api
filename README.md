# url-shortener
implementation of url shortener using node, express and redis
### usage
```
git clone https://github.com/VibingCreator/url-shortener.git vibingcreator-url-shortener
cd vibingcreator-url-shortener
docker build . -t vibingcreator/url-shortener
docker-compose up
```
### http reference
**POST** /?url=valid-url-to-shorten
```
curl -X POST http://0.0.0.0:3000/?url=https://google.com
```
*response returns URI of shortened URL -> iDKvGOx1dt*

**GET** /
```
curl http://0.0.0.0:3000/
```
*response returns all URIs -> ["iDKvGOx1dt", ...]*

**GET** /:id
```
curl http://0.0.0.0:3000/iDKvGOx1dt
```
*response returns redirect to specific URL based on URI -> https://google.com*