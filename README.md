# create-graphql-api

```
npx create-graphql-api my-api
cd my-api
npm start
```

## Example

https://www.youtube.com/watch?v=WhzIjYQmWvs

## How to Deploy to Heroku

0. Make sure you have Git setup
1. Setup Heroku CLI: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
2. Create a `Procfile` in the root folder of your project and put the following in it:
```
web: node dist/index.js
```
3. In your `package.json` add the following script to run the TypeScript compiler before Heroku runs your project:
```
"heroku-postbuild": "tsc"
```
4. In the root folder of your project, use the Heroku CLI to create a new project:
```
heroku create
```
5. Add a PostgreSQL database addon
```
heroku addons:create postgres
```
6. Push your code to Heroku
```
git push heroku master
```


