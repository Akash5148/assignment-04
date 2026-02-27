1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## ans: getElementById is used to Selects only one element using its unique id and  returns a single element 

## getElementsByClassName  is used to Select elements using class name and Returns an HTMLCollection. It can select multiple elements.

## querySelector is used to Selects the first matching element.Uses CSS selector syntax.

## querySelectorAll is used to Selects all matching elements.Returns a NodeList.

2. How do you create and insert a new element into the DOM?

## ans: First, we create a new element using:document.createElement () This method allows us to create any HTML element dynamically, such as a div.After creating the element, we can add content to it using:innerText,innerHTML or  Then, we select the parent element where we want to insert the new element. Finally, we insert it using:appendChild()


3. What is Event Bubbling? And how does it work?
## ans:## Event Bubbling is a behavior in JavaScript where an event starts from the target element and then moves upward through its parent elements in the DOM tree.Let A button inside a div The div inside the body. If both the button and the div have click event listeners:When the button is clicked,First, the button’s event runs.Then, the div’s event runs.After that, the body’s event can also run.So the event moves from child → parent → higher parent.This upward movement of the event is called Event Bubbling.


4. What is Event Delegation in JavaScript? Why is it useful?
## ans:Event Delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of adding separate event listeners to multiple child elements.It improves performance (fewer event listeners). it is useful because: It reduces memory usage, It works for dynamically added elements, Code becomes cleaner and easier to manage


5. What is the difference between preventDefault() and stopPropagation() methods?
## ans:In JavaScript, preventDefault() and stopPropagation() are two different event methods, and they are used for different purposes.The preventDefault() method stops the browser’s default behavior for an event.t can stop a form from submitting.It can stop a link from navigating to another page.This method does not stop the event from bubbling. It only prevents the default browser action. one the other hand The stopPropagation() method stops the event from moving to parent elements.Normally, because of event bubbling, an event moves from child to parent. But if we use stopPropagation(), the event will stop at the current element and will not go upward.
























 












