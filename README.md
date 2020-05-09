# Serverless API for your application with Google Cloud Platform

## NPM commands

- **deploy:dev**: deploy to the GCP dev environment
- **deploy:prod**: deploy to the GCP prod environment
- **deploy:local**: start local development environment
- **lint**: start tslint for project files
- **test**: start unit tests

## Project information

It is a skeleton for your Serverless applications for Google Cloud Platform. It uses typescript,
webpack plugin for Serverless function.

## Difference with AWS
GCP has totally different serverless architecture. Is uses just one function as entry point
because GCP does not have Gateway.
The API should be built from this point manually. Core concept is a basic Express server.

Serverless Framework supports GCP much worse than AWS. In this repo we use sls plugin as well as
 Functions Framework from GCP. It's tricky to develop APIs with GCP and SLS.
 
One more important thing about Google Functions is it uses package.json to install all not
 dev dependencies, and you not need to include them to package. You will see artifacts zip file
 with an index.js, and a package.json. That's it.

### It contains:

- Entry point routing example
- Dev server environment
- Dot Env support
- TypeScript with Webpack
- One test endpoint
## How to add evn variable

Here we use the pure .env scheme.

```dotenv
BASE_URL=http://localhost:4000
NAME=flo-api
```

.env is a default file for development, and it will be injected by webpack plugin directly
 to the index.js. You will not find it in the result file, but it will work in runtime.
 
This mechanism is a stage sensitive for deployment. You need to add files for each stage with the next schema:
`.env.{stage}` Example `.env.prod`
