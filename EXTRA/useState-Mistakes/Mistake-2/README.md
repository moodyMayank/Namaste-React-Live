### Mistake-2 :-

### React useState white screen problem fixed !!!

#### Situation

- We have a state variable of type object but in useState nothing is initialised as such and also user id null , Now when we try to print the user values with other Elements.

#### Problem

- When we try to print to state variable user values it gives us 'error' and Screen becomes white. So White Screen is the biggest Issue there.

`const [user, setUser] = useState();`
`<span>Username is : {user.name}</span>`

#### Approach

We will see different approaches here through which we can solve white screen issue.

- Conditional Redendering
- Optional Chaining
- Initialise useState() with empty values.
- Initialise useState() with Proper structures.

#### Solution

- Solution 1 :-
  `{user && <span>Username is : {user.name}</span>}`

  Here we are first checking whether user is null or not and then printing it.

- Solution 2 :-
  `<span>Username is : {user?.name}</span>`

  Here we are using Optional Chaining Operator ?. , it checks for null first and only then prints it.

- Solution 3 :-
  Initializing the useState Variable with Empty Object.

  `const [user, setUser] = useState({});`

- Solution 4 :- {Best Solution}

  Initialising the useState with Proper Object Structure/Values.

  `const [user, setUser] = useState({`
  `name: "",`
  `email: "",`
  `images: [],`
  `});`

- NOTE

  - Example :

    - `<span>Username is : {user?.name}</span>`
    - `<span>Profile Image is : {user.images[1]}</span>`
    - Here Profile Image is not Getting Printed if Default value of user is empty.

  - The reason behind this is Array is still empty , so we should use SOLUTION 4 always so that we don't run into this problem by mistake.
