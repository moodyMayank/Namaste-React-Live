### Package-lock.json

- It is a very important file as it locks the version of package.
- Never keep it in gitignore file. Then we will run on the issues that it is running on my system and not on production.
-

### Topics Discussed :-

### Important Points :-

### Notes :-

- The Code in previous is good but its not production ready. So making our code production ready we need

  - Minify the code
  - Bundle things up
  - server to run our app
  - Remove Console.logs
  - A lot more stuff

- React does not enforce anything and we can use a lot of different libraries with it.
- Example by default React gives us the webpack as bundler but we can use our own different bundler like parcel, Vite.
- npx create-react-app uses webpack as a bundler.
- Bundlers

  - Webpack is one of the bundlers
  - parcel , vite are more examples
  - Babel is not a bundler

- So before using any of the packages , we need package manager , where we can see and manage our packages => npm.
- npm does not stand for node package manager. It is said by people only and even on npm site : they troll npm full form.
- NPM full form has its npm expansions repo , where people have submitted NPM funny full forms
- npm init { initialization } , It is used to get npm in our app.
- npm init -y { -y : skips a lot of options}
- So instead of using NPM , we can also use yarn.

- Initialise a project : Food App with npm init and fill the options although we can modify later also.
- npm init gives us the package.json file where we do project setup.

- So the crux of the NPM is , we use it because we need a lot of packages. Those helper packages come inside Package.json file.
- Install the Parcel Bundler as dev Dependency.
- DevDependency installing means it is not required in production.
- Installing a Package also introduces package-lock.json and node_modules.

- "devDependencies": {
  "parcel":
  }

### Explore and Read it out :-

- Read about what all we need to do , to make our code production ready
- Read about caret ^ and ~ sign.
