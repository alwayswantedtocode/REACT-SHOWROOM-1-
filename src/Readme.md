\*\*\*Nav Bar throughout the webapp:
the used of <sharedlayout/> in a parent route allow for this to happen.

\*\*\* LOCATION USESTATE:
THE LOCATION USESTATE ALLOWS YOU TO OPEN THE SUBMENUE OF EACH NAV MENU AS YOU MOUSEOVER.

\*\*\* PAGE USESTATE:
THE PAGE USESTATE ALLOWS TO MARCH THE RIGHT CONTENT OF THE SUBMENU FROM DATA.JS

textContent:
textContent grabs the text of a element e.g botton, div etc. it is used with target.

How to make a postion absolute Element responsive:
1.The container of the element should be set as relative 2. The element itself should be set as absolute. 3. The element width, height, left or right and top or bttom shout be set with percentage not rem or em or px.

\*\*\*The && operator
In React, when you try to access a property of an object that is undefined or null, you'll encounter an error. This is because you cannot access the property of an object that doesn't exist.
You can use the && operator to check if the object exists before trying to access its properties. If the object exists, the expression on the right side of the && operator will be evaluated. If the object doesn't exist, the expression on the right side of the && operator won't be evaluated.

\*\*\*getBoundingClientRect
getBoundingClientRect is a method available on DOM elements that returns a DOMRect object with information about the position and size of the element relative to the viewport. The DOMRect object has properties like top, bottom, left, right, width, and height that can be used to get information about the element's position and size.

The getBoundingClientRect method is often used in web development for tasks such as detecting whether an element is in the viewport, positioning elements based on their position relative to other elements, or calculating the dimensions of an element. The DOMRect object returned by getBoundingClientRect is read-only, so its properties cannot be directly modified.

\*\*\*window.pageYOffset
window.pageYOffset is a property that returns the number of pixels that the document has been scrolled vertically. It represents the current vertical position of the scroll bar within the window.

\*\*\*onClick={(e) => e.stopPropagation()}
The onClick={(e) => e.stopPropagation()} prevent clicks on aside element from affecting code prevents this from happening by telling the main element to ignore any clicks that occur inside the submenu.

\*\*\*window.scrollTo
() is a method in the browser's Window object that allows you to scroll to a specific point on a webpage. It takes two arguments: x and y, which represent the coordinates of the point to which you want to scroll.

For example, if you want to scroll to the top of the page, you can use window.scrollTo(0, 0). This will scroll the page to the top-left corner. Similarly, if you want to scroll to a specific element on the page, you can get the coordinates of the element using element.getBoundingClientRect() and then use window.scrollTo() to scroll to that element.

window.scrollTo() also takes an optional third argument, behavior, which determines whether the scrolling should be smooth or instant. You can set it to 'smooth' to make the scrolling smooth and animated, or 'auto' to make it instant.
