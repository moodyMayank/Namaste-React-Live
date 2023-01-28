### Mistake-1 :-

#### useState Functional Update : Why useState doesn't update immediately ?

#### Situation

- We have 2 Buttons and 1 Result which is a counter value.
- Counter Value can be updated using both the buttons.
- Button1 increases normally.
- Button2 increase after setTimeout of 2 secs.

#### Problem

- Problem is After clicking on Button2 , If we click on Button1 immediately, counter will increase but Button2 will not pick previous value and consistency of Data is lost.

#### Approach

`const [number,setNumber] = useState(0);`
`setNumber(number+1);`

- Problem is with : setNumber(number+1);
- Here we are directly updating the state with number and not using the previous Updated State value.
- Since we are directly updating state and not using the previous value , button2 does not picks previous value and it only remembers the state it picked when onclick was called.

#### Solution :

- We need to use previous Value of the State.
- We pass a callback here which uses the previous value of the state and updates the latest state value only.
- `setNumber((prev) => prev + 1);`
