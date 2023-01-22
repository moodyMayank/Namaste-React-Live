### Notes - Igniting our App

- Build our own create-react-app
- We get the superpowers of react , that we can use .SO to use them we need to fetch those powers first

  - CDN : Import the links React and ReactDOM

- Minifiers and Bundlers
- React does not enforce anything , we can use a lot of libraries with.

- Bundlers

  - Webpack is one of the bundlers
  - parcel , vite are more examples
  - Babel is not a bundler

- Original create-react-app uses webpack as bundler, babel.

- We will study Parcel bundler
- Parcel is a bundler package , they do the minifying of the code , optimizations , remove console.logs.
- npm does not stand for node package manager. It is said by people only and even on npm site : they troll npm full form.
- NPM full form has its npm expansions repo , where people have submitted NPM funny full forms

- npm init { initialization } , It is used to get npm in our app.
- npm init -y { -y : skips a lot of options}

- npm init : Basically npm init is initializing the package.json file. Now we know that it is a config file. So there different settings that we do in this file. Now this file comes automatic with create-react-app but here we are setting it from scratch.

### Building Create-react-app from scratch

- npm init :-
  - This gives us the package.json file , with which we setup the whole config file.
  - Then we will add the devDependencies and Dependencies accordingly.
  - Then we add
  - Now our basic package.json is done.
  - Now we will do npm install it will add node_modules and package-lock.json file.
  - Now we add .gitignore file and dist folder
  - The main files App.js , index.html , index.css are already added with index.html being the main entryPoint.

### Package-lock.json

- It is a very important file as it locks the version of package.
- Never keep it in gitignore file. Then we will run on the issues that it is running on my system and not on production.
-
