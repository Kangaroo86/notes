# Higher Order Components:

## Objectives:
* be able to declare and use simple higher order functions.
* be able to declare and use simple higher order components
* be able to use the connect higher order component from the react-redux library.

## Higher Order Functions
* We're all familar with these by now. map, reduce, filter are examples of these.
* The say() function from this morning is another.

## Higher Order Components
A Higher Order Component is just a React Component that wraps another one.

* Code reuse, logic and bootstrap abstraction
* Render Highjacking
* State abstraction and manipulation
* Props manipulation

There are two patterns of creating Higher Order Components:

### Props Proxy

What can this pattern be used for?
* Conditional Rendering
* Manipulating props
* Abstracting State
* Wrapping the WrappedComponent with other elements

The most basic example of this is:

```
function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}
```

### Inheritance Inversion
A trivial example of this pattern looks like:
```
function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render()
    }
  }
}
```

## A Simple Higher Order Component
* Let's refactor `NoteList` to utilize a Higher Order Component to render 'loading...' if needed.
* Next, let's create a generic HOC that can check for missing props and if missing, render 'loading...'
* Next, let's refactor the NoteList component to abstract state management to a higher order component.
* Exercise: fork and clone this repo and create a new branch. There, refactor the existing `App` component to be a pure functional component. Create a Higher Order Component that encapsulates the state and passes whatever is needed by `App` to it as props.

## Let's write a `connect` layer between react and redux!

* Let's first write this layer ourselves for the `App` component.

* Now let's use the `connect` function from `react-redux` to do the same thing.
 
Great article on this topic: https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e
