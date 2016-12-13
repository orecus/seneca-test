# Seneca Microservice Test
This is a simple Seneca Microservice test application for usage with PM2. It contains one microservice that is called when the main index.js is started.

### Installation Instructions
1. clone this repository
  * ``` npm install ```
2. ``` pm2 start pm2.json ``` or ``` node index.js ``` and ``` node microservice/math/service.js ```

* ``` pm2 logs ``` should print log entries from both the microservice and the main server instance.

## Contribute
Yes Please! :)
