# Chai or Backend

## Notes

### .gitkeep
```
gitkeep used for keep those file which you want 
```
### gitignore
```
gitignore generation website help to generate all ignoring files name:

```
link: https://www.toptal.com/developers/gitignore

```
.env file renamed to -> .env.sample
beacuse we just need to push this file to git for our learning othrwisw .gitignore ignore this .env file
```
### touch file create

```
touch filename.js 

above command only used in git Bash CMD we can't used in vs code terminal 
```
### package.json setting

```
on JS we import file using common or module here we choose module ok

package.json -> write "type": "module",

that's it

go to Script:-> add -> start: index.js


```

### Nodemon     
 ```
nodemon : to restart the server whenerver file save

You can also install nodemon as a development dependency:

npm i -D nodemon

below nodemon will be installed globally to your system path.

npm i nodemon


suggestion is to install nodemon as a development dependency not globally ok

```
```Javascript
// change package.json file so nodemon can reload the scripts

 "scripts": {
    "dev":"nodemon src/index.js"
  },
  
```
## prettier


https://www.npmjs.com/package/prettier

```Javascript
// installation using terminal

npm i -D prettier

// after installation 

create a file on root dir named as: 

.prettierrc

// now look into that fike what we write thanks

```
### detenv require solution
```
dotenv jo hai usme vo require ko use krta h but hu import ko use kr rhe hai toh abhi iska solution yeh hai ki :

```

#### contants.js

```Javascript

// contants file : we define our db name:

export const db_Name = "videotube"

// export isliy likha h q ki kisi or file m import krna pdega db name ko.

```
## DB Connection
```JAVASCRIPT
always use:  async & try catch

// Immediately Invoked Function Expressions (IIFE) 

;()()
import mongoose from "mongoose";

import { DB_NAME } from "./constant";

import { Express } from "express";

( async ()=>{
try {

  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 
  app.on("error", (error)=>{
    console.log("Error:", error);
    throw error
  })

  app.listen(process.env.PORT, ()=>{
    console.log(`App is Listening on ${process.env.PORT}`);
  })


} catch (error) {
    console.error("ERRROR:", error);
    throw err
}



})()



```
## Promises Meaning

```Javascript

Short mein, promises allow karte hain ki aap ek asynchronous operation ke completion ka wait karein, aur phir kisi specific task ko perform karein jab woh complete ho jaaye, chahe success ho ya failure. Ye error handling aur readability mein improvement laati hain as compared to traditional callback-based approaches.

```

## Try & Catch

```Javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}


// This mechanism is synchronous, and it's primarily used for handling errors that occur during the execution of synchronous code. It's different from asynchronous code and doesn't involve callback functions directly.

```

### For asynchronous code and handling promises

```javascript

somePromiseFunction()
  .then(result => {
    // Code to handle the successful result
  })
  .catch(error => {
    // Code to handle errors in the promise chain
  });


then k andr call back function kuch aise likhte h :


.then(function() {

})

or


.then(()=>{

})

two ways to write

```

### CORS POLICY:

```Javascript
// CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the original web page. The same-origin policy is a fundamental security measure to prevent potentially malicious interactions between different origins (domains).

CORS ISUUE SOLUTION:

PROXY:

In the context of Vite, the term "proxy" typically refers to the proxy configuration that allows you to redirect requests during development to avoid CORS issues or to simulate requests to a backend server. Vite has built-in support for proxying requests, making it easier to work with APIs during development.

Here's a basic example of setting up a proxy in a Vite project:

Create or navigate to your Vite project.

Open the vite.config.js file (if it doesn't exist, you can create it in the root of your project).


```

### Add the following code to vite.config.js to configure the proxy:

```Javascript

// vite.config.js

export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace with the actual backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};


```
## Cookie Parser:

```Javascript


// Cookie parser is a middleware used in Express.js (a web application framework for Node.js) to handle HTTP cookies. Cookies are small pieces of data sent from a server and stored on the client's browser. They are often used to store user session information, preferences, or other data.

// The cookie-parser middleware in Express simplifies the process of working with cookies. It parses the incoming cookies in the HTTP request and makes them available in the req.cookies object. This allows developers to easily read and set cookies in their Express applications.



npm i cookie-parser cors
```

## mongoose-aggregate-paginate-v2

https://www.npmjs.com/package/mongoose-aggregate-paginate-v2

```Javascript

Mongoose ka ek plugin hai jo MongoDB mein complex queries, jise hum aggregate kehte hain, ko paginate karne mein madad karta hai. Is plugin ka use karke aap MongoDB mein data ko chunks mein retrieve kar sakte hain, jisse large datasets ko handle karna asaan ho jata hai.

npm i mongoose-aggregate-paginate-v2

```
## bcrypt liberary


```JS

`bcrypt` is a library used for securely hashing passwords in a way that is resistant to brute-force attacks. It is commonly used in web development to store user passwords securely by hashing them. The primary goal of `bcrypt` is to slow down the hashing process, making it computationally expensive and thereby reducing the effectiveness of brute-force attacks.

npm i bcrypt 

```
## jsonwebtoken (JWT)


```JS

// jsonwebtoken is a tool used in web development to create and check special codes called JSON Web Tokens (JWT). These tokens are used to securely transmit information between different parts of a web application, often for user authentication and authorization purposes. It helps ensure that data is exchanged securely between the server and the client.

for more visit:

https://jwt.io/

npm i jsonwebtoken

```
## PRE

Pre middleware functions are executed one after another, when each middleware calls next

## File Upload

Two middlewares that used for upload files</br> 
WE use MULTER 

1: [Express-fileupload](https://www.npmjs.com/package/express-fileupload) --> Simple express middleware for uploading files.

2: [multer](https://www.npmjs.com/package/multer)
-->> Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.


npm install multer

## npm install cloudinary

```
Cloudinary is a cloud-based service that provides a comprehensive solution for managing, optimizing, and delivering images and other media assets on the web. Here are some reasons why developers and businesses use Cloudinary:


Hitesh Sir Explain the stretdgy to upload the files to cloudinary : 

step 1:  first hum user se file lenge or temperary server pr locally store krenge

step:2 then multer ka use krke file ka  localpath hum cloudinary ko denge to upload the file

After uploding file ko hum server se remove kr denge 

in sb k liye hum node jsfile system use krenge 
```

###  node js file system (fs)

read write delete operation k methods milte h vo use krenge 
uske liye phle ->>  import fs from "fs" likho 
then we can use `fs.unlinkSync` or etc etc .. 

## MulterMiddleware Example from documentation
```

app.post('/profile', upload.single('avatar'), function (req, res, next) {

})

ye jo profile k bad humne -->>
 upload.single('avatar') likha h ye hi hai middleware 

```


