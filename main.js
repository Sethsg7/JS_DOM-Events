console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

//Create variables often to link to areas in the HTML.
let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(\"node1\") method to access this.";


// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
//This property returns a list, so we selected the 0 index.
let node2 = document.getElementsByClassName("node2")[0];
node2.textContent = "I used the getElementByClassName(\"node2\") method to access this."



// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
//This also returned a list, allowing us to make a for loop.
let h3s = document.getElementsByTagName("h3");

for(let h3 of h3s) {
    h3.textContent = "I used the getElementByTagName(\"h3\") method to access all of these."
}





/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/


// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let para = document.createElement("p");
para.textContent = "I am a <p> tag. This node was created using the createElement() method.";



// TODO: Append the created node to the parent node using the element.appendChild() method

let parent2 = document.querySelector("#parent");
parent2.appendChild(para);



// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
// BONUS: Add a link href to the <a>
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
let anc = document.createElement("a");
anc.textContent = "I am an <a> tag."

//Opens new tab.
anc.target = '_blank';
anc.href = "https://personacentral.com"

parent2.insertBefore(anc, para);


/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let child3 = document.createElement("p");
child3.textContent = "New Child Node";

let parent3 = document.querySelector("#exercise-container3");
let replaceChild = document.querySelector("#N1");

parent3.replaceChild(child3, replaceChild);

// TODO: Remove the "New Child Node"

//Could also be written by setting the function to a variable.
setTimeout(() => {
   parent3.removeChild(child3);}, 
   3000);



/*----------- Exercise #4: LIST ITEMS ----------- */


// Use the following array of values to generate a list on the DOM

let list = [ "apples", 
"bananas", 
"carrots", 
"dragon fruit", 
"eggplant", 
"fish", 
"grapes", 
"honey", 
"ice bag", 
"juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul");


// TODO: Iterate over the array values, and create a list item element for each
for(let item of list) {

// TODO: Append the new list items to the unordered list element

    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}

// TODO: Append the unordered list to the `div#container` under exercise 4 
let container4 = document.querySelector("#container");
container4.appendChild(ul);



/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen


function show() {
    let modalContainer = document.createElement("div");
    let modalBody = document.createElement("div");
    let title = document.createElement("h2");
    let content = document.createElement("p");
    let closeButton = document.createElement("button");
    
    //Modal appearance was set in the CSS file.
    title.textContent = "Action Required";
    content.textContent = "You need to ...";
    closeButton.textContent = "Close";

    modalContainer.id = "modal";
    modalBody.classList.add("modal-card");

    // div.classList.add("modal");
    // div.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

    modalBody.append(title, content, closeButton);
    modalContainer.appendChild(modalBody);
    document.body.appendChild(modalContainer);

}

let btn = document.querySelector("#btn");

btn.addEventListener("click", show);




// BONUS: The modal popup should be able to be closed. Refactor for this functionality
    


