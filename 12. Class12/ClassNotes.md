- There are 2 types of layer in web application :- - Data Layer - UI Layer
  These 2 layers work together , the view that we see on the screen is inside the UI layer.
  They work both in sync and this happens all in browser.

- Handling Data in web applications is a very crucial thing , when it comes to large Production ready apps , thats where we need to manage data very well . So thats where we need to use REDUX. Redux can manage data layer very well
- Context API - is very small version of Redux and is mostly used to avoid Prop drilling in React where we keep on passing States from parents to child and further
- Context is a central place , any component can access and modify Context. But when project grows , then library like Redux is the best option.

- Redux is used for data/state management .
- Cons of Redux : -
  - It is complex to setup
  - Huge learning curve

That's why Redux has come up with a toolkit called REDUX TOOLKIT.

Problems that Redux Toolkit solves : -

1.  Configuring a Redux store is too complicated .
2.  Have to add a lot of packages to get Redux to do anything useful.
3.  Redux required too much boilerplate code.

Redux Toolkit :

- Redux Store : At the end of the Day , Redux Store is a big Object ,which has different sections . All the components can access Redux Store .
- We can only have 1 store in the whole Application.
- We will create slice's of the store for the logical separation.
- Slice examples could be : User Slice , Cart Slice , Theme Slice etc.
-

State Variable Scope : Its Scope is only restricted to that component and is independent of the other Components ///// Store is a central place , it is not tied to any component and can be accessed by any of the components.

Context can be multiple but we can only have single store in React Application
