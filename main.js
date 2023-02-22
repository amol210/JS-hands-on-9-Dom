// 1. Write the code to access element which is having id as "text"
let text = document.getElementById("text").innerText
console.log(text);
// 2. Write the code to access element which is having tag as "h1"
let head = document.getElementsByTagName("h1")
console.log(head);
// 3. Write the code to access element which is having class as "box"
let boxx = document.getElementsByClassName("box")
console.log(boxx);

// 4. "<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
console.log(document.getElementById("func").innerHTML="<h5>Hello World</h5>")

// 5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
function changeDirection(){
    document.getElementById("flex-container").style.flexDirection = "column";
}
// let direction=document.getElementById("btn").addEventListener("click",changeDirection)

// 6. What’s the difference between window vs document?


//7. "<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
let color = document.getElementById("heading").style.color = "red";
console.log(color);
// const colour = document.getElementsByTagName(h4)[0]
// colour.setAttribute("id","head")
// const change = document.getElementById('head')
// change.style.color = "red";


//8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

const textReplace = () => {
    document.getElementById("replac").innerHTML="Welcome to Elevation Academy"
}

//9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function displayTime(){
    let dt = new Date();
    let hrs = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    // console.log(hrs,min,sec);

    document.getElementById("hrs").innerHTML=hrs + ":"
    document.getElementById("min").innerHTML=min + ":"
    document.getElementById("sec").innerHTML=sec
}
setInterval(displayTime,1000);

//10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
let selection = document.querySelector('select');
let year = document.querySelector('#output');
selection.addEventListener('change',() =>{
    year.innerText = selection.options[selection.selectedIndex].text;
})
// "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"
function formvalidate(){
    let x = document.forms["formmy"]["fname"].value;
    // let name = document.getElementById("fname").value;
    let mail = document.getElementById("mail").value;
    let num = document.getElementById("phnum").value;
    let yr = document.getElementById("dofb").value;
    console.log(fname,mail,num,yr);
}
