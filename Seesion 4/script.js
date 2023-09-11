console.log("hello there guys ");

//- ------------- - ELEMENT GETTER ---------------

// 1. get Element by ID

// let headingElement = document.getElementById("heading");
// let paragraphElement = document.getElementById("paragraph");

// console.log(headingElement);
// console.log(paragraphElement);

// // 2. get Element(s) by className

// const divContainers = document.getElementsByClassName("red"); // HTML collection, IT is Array Like structure
// //  but in reality in is NOT ARRAY

// console.log(divContainers);

// 3. get Element(s) by TagName

// const divContainers = document.getElementsByTagName("div");
// console.log(divContainers);

// 4. query Selector -> it takes CSS selectors... (TO select Relationships)

// const paragraph = document.querySelector("div  p"); -> this will give the fisrt element ONLY.
// const heading = document.querySelectorAll("#heading"); //-> this will give a LIST of the elements

// console.log(heading);

console.log(document.querySelector(".asdas"));

// RULE -> getElement(s) -> it will always return HTML Collection (Array LIKE Structure)

// div > p

//  ------------------ EDIT/UPDATE ELEMENT -----------------

let paragraphElement = document.getElementById("paragraph");
console.log(paragraphElement);

// paragraphElement.innerText = "<b>hello</b> guys I am a pragaph";
// paragraphElement.innerHTML = "<b>hello</b> guys I am a pragaph";

// paragraphElement.className = "container fruits";

//  ------------------- CREATE/ADD ELEMENT ----------------------

// 1. Create and Edit element
const listItemELement = document.createElement("li");
listItemELement.innerText = "suresh 007 cool";

// 2 -> select the parent or LIST

const list = document.getElementById("nameList");

// 3. TO add newly Created ELEMETN we have 2 ways ...

//  3.1 -> Append

list.append(listItemELement);
// list.prepend(listItemELement);

// list.children[2] = listItemELement; // cant have this

// console.dir(list);

// 3.2 -> innerHTML

// list.innerHTML = list.innerHTML + "<li>suresh 007 cool</li>";

//  ------------- DELETE ELEMENTS ---------------

const paragraphElemetn = document.getElementById("paragraph");
paragraphElemetn.remove();

list.removeChild(listItemELement);
