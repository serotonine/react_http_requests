
You don't connect straight a React APP to a database. Of course because this a client-side code so all the code is available to users.
Only CRUD with a REST API.

## Fetch

In React async syntax is not allowed.

```
export default **async** function AvailablePlaces({ onSelectPlace }) {

  const response = **await** fetch('http://localhost:3000/places');
}
```

SO

````
 fetch('http://localhost:3000/places').then((response) => {});
```
````
# REACT PRACTICE PROJECT
### Repository
[https://github.com/serotonine/react_http_requests](https://github.com/serotonine/react_http_requests)

### Page
[ https://github.com/serotonine/react_http_requests](https://github.com/serotonine/react_http_requests)

### About
Build [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller) react_investment_calculator : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836928 (see Udemy course).

***

### REACT 
##### Summary
- Components,
- useState(),
- useRef(),
- forwardRef(),
- createPortal()
- useImperativeHandle(),
- TailwindCSS
- Vite build tool.

