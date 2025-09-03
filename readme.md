
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:*getElementById("something") means selecting a unique name or id changing its inner element. Id is used only one place. it return only single element.
*getElementByClassName("something") means 
selecting class name which stay in another place and change its inner element. it return her node list.
*querySelector means matching element and return only first element.
*querySelectorAll means matching element and return all element.

2. How do you **create and insert a new element into the DOM**?
Answer:create element: const newElement = document.createElement("p");
add content: newElement.innerText = 'Girl friend is temporary but success is permanent';
insert element: const place = document.getElementById("list")
place.appendNewChild(newElement)



3. What is **Event Bubbling** and how does it work?
Answer: It means when an event triggered it can spread parents to grandparents or child or another html element it can't stop its work.
It works with document.getElementById("").addEventListener("click",function(){
    console.log("clicked the button")
}) 

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:It means set a single event listener to attached a parent element and this eventlistener can use multiple places.
It is useful because it simplifies event handling, improve performance and decrease code writing.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:preventDefault() means prevent the default browser behavior for a given element.
stopPropagation() stops an event from bubbling or propagating up the dom tree.


