### Topics Discussed :-

- Library
- Framework
- Print : HTML

### Important Points :-

### Notes :-

- Framework is a full fledged tool , Example : Angular
- Example : Image Carousal is a js Library and It takes minimum effort to put and use a library.
- How does Browser gets to know what is document / createElement / getElementbyID : So this comes from the browser apis , browser has a JS Engine , browser knows about Window Object.
- CDN : Content Delivery Network
- We use React and ReactDOM CDN to use the inbuilt react code and print the Hello World.
- React CDN is giving us react functions to use , that is the fastest way to use react.
- React is made from javascript only made by facebook engineers
- React is a global Object when using CDN.
- ReactDOM { Print it Secret internals do not use or you will be fired }
- React is made from javascript only made by facebook engineers
- React CDN is giving us react functions to use , that is the fastest way to use react.
- React is a global Object when using CDN
- ReactDOM { Print it Secret internals do not use or you will be fired }
- React - core library , ReactDOM - gives access to DOM of the Browser

---

- React is made from javascript only made by Facebook Engineers.
- Importing the CDN Links only is the shortest program of React because it gives us the React and ReactDOM Objects in the console which were not present previously.
- We can check by using React and ReactDOM in console like window.

---

- So therefore React is a global object like window.
- We inject 2 CDN links , React and ReactDOM :-
  - React : It is the Core library which we need to use react
  - ReactDOM : It is required to run Web based that requires the DOM Manipulation.
- Since we need react CDN in react native also , thats why React and ReactDOM are separated.

---

[React.createElement()](https://beta.reactjs.org/reference/react/createElement)

- Code : React.createElement("h1",{},"Hello world with React");

- Syntax of React.createElement() :-
  const element = createElement(type, props, ...children)

  - type : h1, h2 , p , a etc.
  - props : Must be either object or null { null => empty object}. React creates a element using that props like className , id etc.
  - children : It contains the text or whatever content we want.
    - Multiple children should only be passed if they are statically known.
    - Dynamic Children should be passed as array

Note : Dynamic Lists can change and thats why react warns about adding keys to them . Static lists do not requires this because they never reorder.

- Used for creating element without JSX

- Syntax of ReactDOM.createRoot();
- React.createElement returns a object i.e. called ReactElement and then it is passed to RootElement through render method. Render method takes the react element and injects it inside the browser DOM.

---

- So we can have our html code and also react code in single file because React Code is injected in div with id="root". So our code can look like this :-
    <div>
        <p>Hello World </p>
        <div id="root"></div>
    </div>

- If We had Elements inside <div id="root"> , we inject code through react , then all the code inside <div id="root"> will be replaced and React overrides whatever is present there.

- The React produces JS files , which takes time to load and thats why there is very minutee lag between rendering.

- Children in React.createElement should be passed using Array
- So here we see using React.createElement is easy but making complex structure is quite difficult and long messy way.
- So React came up with JSX , so that we dont need to create using createElement.
-

### Explore and Read it out :-

- Emmet Plugin
- CDN
- Crossorigin
- Async / Defer

### Class Tasks :-

- Printing Hello World using HTML only.
- Printing Hello World using Javascript only.
- Printing Hello World using React CDN.
