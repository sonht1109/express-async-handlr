# ExpressJS Async Handler

## Installation
```bash
yarn add express-async-handlr
```
or
```bash
npm i express-async-handlr
```

## Usage
This module can both handle async exception and returning data

First, add these middlewares into your express application

```javascript
import express from 'express';

const app = express();

// middleware that handles async error
app.use((error, req, res, next) => {
  console.log({ error })
  return res.status(500).json({ message: error?.message });
});

// middleware that handles returning data
app.use((req, res, next) => {
  const data = res.locals.data;
  return res.status(200).json({ data });
});
```

And then, import `express-async-handlr` and wrap it onto every async function that needs handing
```javascript
const asyncHandler = require('express-async-handlr')

app.get('/', asyncHandler(async (req, res, next) => {
  const users = await userRepository.findAll(); // errors will be automatically handled if any
  return users;
}))
```

Without `express-async-handlr`, you have to do try/catch like this on every function
```javascript
app.get('/', asyncHandler(async (req, res, next) => {
  try {
    const users = await userRepository.findAll();
    res.json({ data: users })
  }
  catch(e){
    next(e)
  }
}))
```