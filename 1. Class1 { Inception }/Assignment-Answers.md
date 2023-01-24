#### What is Emmet ?

Emmet is a plugin for many popular text editors which greatly improves HTML
and CSS workflow. !+ tab produces a clean HTML Boilerplate template which we can use for our code.

#### Difference between a Library and Framework ?

Library :-

- It is a collection of helper modules , classes , objects, functions , pre-written code etc.
- React is a library and it can be used throught CDN also.
- Building a library requires less code , so there is better performance and fast load time.
- Libraries can be integrated easily into existing projects to add some specific functionality.
- Ex: JQuerry , ReactJS.

Framework :-

- It comprises of lot of APIs , compilers , support programs, libraries etc.
- Angular is a framework and cannot be used properly using CDN.
- A framework development requires a lot of code that decrease performanece and increase the load time.
- Including framework smoothly into an existing project is impossible.
- Ex : AngularJS , Spring , NodeJS.

#### What is CDN ? Why do we use it ?

A CDN { Content Delivery Network } refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

- Improving website Load times
- Reducing bandwidth costs
- Increasing content availability and redundancy

#### Why React is known as React ?

- React was developed for applications(Facebook) that have constantly changing data.
- React is a frontend library , means that as the user clicks around and changes the app's data, the view should "react" or change with those user events.
- One More factor is component can be reused , so they react again.

#### Why React is called Single Page Application ?

Single Page Application is a web application that interacts with the web browser by dynamically rewriting the current page with new data from the web server, instead of the default method of the browser loading entire new pages.

- This means that the url of your website will not change completely(page will not reload)instead it will keep getting content and rewriting the DOM with it.

- Technical Answer :
- When building react-app, one can see that there is only one App.js from where your entire web app is loaded in fragments and components.
- This behaviour of rendering components and pages on a single page and changing the DOM( is a single page behaviour)

#### What is crossorigin in script tag ?

crossorigin attribute valid on <audio>,<img>,<link>,<script>,<video> elements, provides support for CORS.

- anonymous :
  Request uses CORS headers and credentials flag is set to 'same-origin'. There is not exchange of user credentials via cookies, SSL certificates or HTTP authentication, unless destination is the same origin.

Example :-
You can use the following <script> element to tell a browser to execute the "https://example.com/example-framework.js" script without sending user-credentials.

<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous">
</script>

#### What is CORS ?

Cross-Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins(domain,scheme,port) other than its own from which a browser should permit loading resources.

- CORS also relies on mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.

#### What is difference React and ReactDOM ?

React - Package
ReactDOM - Package

- React package holds the react source for components, state, props and all the code that is react.

- ReactDOM package as the implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().

#### Why to Split React and ReactDOM ?

The reason React and ReactDOM were split into two packages was due to the arrival of React Native.

#### What is the difference between react.development.js and react.production.js files via CDN ?

- Production CDN file of react is just a minified and optimized version that makes rendering of file on end user's browser very quick and performance enhancing.

- Development CDN file is solely for local development purposes. It will take more time to build compared to production build.

#### What is async and defer ?

When we load a webpage , there are 2 major things happening 1. HTML Parsing 2.Loading Script : Fetching and running script.

- <script src="" />
- Browser is parsing the html line by line , suddenly encounters <script> tag , so here browser fetches the script and load the script , then rest of the HTML parsing is done.
- Here script is blocking the rendering of the HTML.

- <script async src="" />
- So here fetching is done as soon as <script> tag is there with parallel rendering of HTML but after fetching loading of script starts , thats where HTML rendering stops for sometime and only continues after loading of script is done.

- <script defer src="" />
- In this fetching of <script> is done in parallel with HTML parsing and it is only loaded once the HTML parsing is completed.

- async attribute does not guarantee the order of execution of scripts but defer does.
- So if we have multiple scripts and some are dependent on each other , we should avoid "async" and should use "defer".
- Suppose we have to load scripts and they are independent of each other , we can use async.
- Mostly we should use "defer" because HTML parsing is done and then scripts are loaded.
