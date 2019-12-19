/*var pname = [
	"fauk",
	"love",
	"feeling",
	"happy",
	"seek"
	];*/
/*var pnamelength = pname.length;
for (var i=0; i<pnamelength; i++) {
	pname.pop();
}*/
/*var i = 10;
while (i >  0) {
	console.log(i);
	i--;
}*/
/*
for (var i=10; i>0; i--) {
	console.log(i)
}*/

/*for (var i = 0; i < 10; i++){
	console.log(i);
}*/

/*var i = 0;
while (i <10) {
	console.log(i);
	i++;
}*/

/*var i = 0;
do { console.log(i);
	i++; }
	while (i < 10);*/

/*var i = 0;
do { console.log(i);
	i++;} while(i<10);

	var i =10;
	do {console.log(i); i--;}
	while ( i > 0);*/
/*
	var pname = [
	"fauk",
	"love",
	"feeling",
	"happy",
	"seek"
	];

	var uname = ["my love",
		"your love",
		"nobody love"
		];*/

/*	pname.forEach( function(pname) { console.log(pname);})*/


/*
function logpname(pname, i){
	console.log(pname, i);
}

pname.forEach(logpname);*/


/*
function logarray(pname, i) {
	console.log(pname, i);
}
pname.forEach(logarray);
uname.forEach(logarray);*/

// facebook
/*
var database = [
	{
		username:'faruk',
		password:"love"
	},
	{
		username:"bakkr",
		password:"good"
	},
	{
		username:"tumi",
		password:"bad"
	}

	];

var newsfeed =[	{
		username:"shant",
		timeline:"javascript is sooo cool"
	},
	{
		username:"kanrul" ,
		timeline:"apple today only 5o taka kg"
	},
];


function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (username === database[i].username &&
			password === database[i].password){
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)){
		console.log(newsfeed);
	} else {
		alert("Sorry This Username and password is not corriect")
	}
}

var usernameprompt = prompt("What is your Username");
var passwordprompt = prompt("Enter Your password");


signIn(usernameprompt, passwordprompt);
*/
/*function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++ ) {
		if(username === database[i].username && 
			password === database[i].password ){
			return true;
		}
	}
	return false;
}

function signIn(username, password){
	if (isUserValid(username, password)){
		console.log(newsfeed);
	} else {
		alert('Sorry user and pssword is not corect');
	}
};

var usernameprompt = prompt("What is your user Name?");
var passwordprompt = prompt("What is your password?");


signIn(usernameprompt, passwordprompt);	
*/





/*var day = 3;

switch (day) {
	case 1 : console.log("Monday");
	break ;
	case 2 : console.log("tuseday");
	break ;
	case 3 : console.log("FRIDAY");
	break ;
	default : console.log("Not found");
}


var faruk = "faruk";

switch (faruk) {
	case "bigman" : console.log("faruk is a good boy");
	break ;
	case "somun" : console.log("faruk is the best Webdevolaper");
	break;
	default : console.log("faruk is one by one");
}

for (i = 0; i <= 10; i ++){
	if (i === 5 ){
		break;
	}
	console.log(i + "<br/>");
}

//What is the output of this code?
var sum=0; 
for(i=4; i<8; i++) {
  if (i == 5) {
     continue
     ;
  }
  console.log(i + "<br>");
 
}

function sayHello(name) {
	console.log("hi" +" "+ name + "how are you")
}

sayHello(faruk);

function sayAge(name, age) {
	console.log(name + " is " + age + " years old");
}

sayAge(faruk, 30);

sayAge(faruk);

function myfunction(a, b){
	return a+b;
	
}

var x = myfunction(5,5);
console.log(x);

function addnumber(x, y){
	var c = x * y;
	return c;
}

console.log(addnumber(11, 2));


var home = prompt("What is your house name");
 alert (home);

 var result = confirm ("Do you really want to leve is page");
   if (result === true) {
   	alert( "thank YOu");
   }
   else {
   	alert("come agine")
   }
   //object constructor writing

   function person(name, age, fevcolor){
   	this.name = name;
   	this.age = age;
   	this.fevcolor = fevcolor;
   	this.changname = function(name){
   		this.name=name;
   	}
   }

   var p1 = new person ("nadiya", 22, "green");
   var p2 = new person ("doli", 26, "black");

   console.log(p1.fevcolor);
    console.log(p2.name);

    p1.changname("jon");
    console.log(p1.name);

    var person1 =[];
    person1[0] = "manik";
    person1[1] = "m wife";
*/
 

/*
 console.log(Math.ceil(Math.random() * 10));

 var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);




var f = prompt("enter you number");
var answer1 = Math.sqrt(f);
alert("the square root of"+ f+ "is"+ answer1);

var sum ="square root total"+(Number(n)+Number(f)) + "is "+ (answer+answer1);
console.log(sum);*/





/*var name = "faruk";
function myfunction(name){
	alert("hello " + name + " how are YOU")
}


setInterval(myfunction(name), 3000);*/


/*function myfunction() {
   alert("Hi");
}
setInterval(myfunction, 3000);
*/


/*
var d = new Date();
var hours = d.getHours()
document.write(hours);
*/

/*function printTime(){
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var sec = d.getSeconds();
	document.body.innerHTML= hours + ":" + minutes + ":" + sec;
}

setInterval(printTime, 1000);
*/
/*
function printtime(){
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();

	var seconds = d.getSeconds();

document.getElementById("myclock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(printtime, 1000);*/
 // querySelector is select the first element;
 // querySelectorAll ia select the all element which element you select;
 // getElementsByClassName  is select all element which the same class name;
 // getElentntsByTagName is select all tag name is which 

/*var x = 8;
var y = 12;
var f = 25;
if (x ===6) {
	console.log("true")
} else if (y===10){
	console.log("y also true");
} 
else if (f===20){
	console.log("y also true");
}  else {
	console.log("all are not true");
}*/
/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
button.addEventListener("click", function() {
	if(input.value.length>0){
	var li= document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value="";
	}

})
*/

/*var button = document.getElementById('enter');
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
	if(input.value.length>0){
	var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value="";
	}
	
})

input.addEventListener("keypress", function(event){
	if  (input.value.length > 0 && event.keyCode=== 13)
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
})*/

/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
		var li =document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
}

function addlistafterclick(){
	if (inputLength()>0){
		createListElement();
	}
}

function addlistafterkeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addlistafterclick);
		

input.addEventListener("keypress", addlistafterkeypress);
*/
/*var button =document.getElementById("enter");
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

function inputvaluelength(){
	return input.value.length;
}
function createlistElement() {
	var li = document.createElement("li");
	var button = document.createElement("button")
	button.appendChild(document.createTextNode("Remove"));
	li.appendChild(document.createTextNode(input.value));
	
	ul.appendChild(li && button);
	input.value = "";
}
function addlistafterclick(){
	if(inputvaluelength() > 0){
	createlistElement();
	}
}
function addlistafterkeypress(event){
	if(inputvaluelength() > 0 && event.keyCode===13){
	createlistElement()
	}
	
}
button.addEventListener("click", addlistafterclick);

input.addEventListener("keypress", addlistafterkeypress);*/

/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
function inputValueLength(){
	return input.value.length;
}
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var removeButton = document.createElement('button');
	input.value="";
}
function addlistAfterClick(){
	if(inputValueLength()>0)
	createListElement();
}
function addlistAfterKeyPress(){
	if(inputValueLength()>0 && event.keyCode===13 )
	createListElement();
}
button.addEventListener("click", addlistAfterClick);

input.addEventListener("keypress", addlistAfterClick);*/

/*for(var i=0;i<names.length;i++){
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(names[i]));
   	var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("remove"));
    removeButton.setAttribute('onClick','removeName('+i+')');
    entry.appendChild(removeButton);
    list.appendChild(entry);
}*/
/*
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");



//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


//adding new items:

function inputLength(){
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}


function addToListAfterClick(){
	if(inputLength() > 0){
			createListElement();
		}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);
*/


/*var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName('delete');

for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(evt){
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick=function(event){
	var target = getEventTarget(event);
	target.classList.toggle("faruk");
}

//adding new items
function inputLength(){
	return input.value.length;
}
function createListElement(){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick= removeParent;

	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addToListAferClick(){
	if(inputLength()>0){
	createListElement();	
	}
}
function addToListAferKeupress(){
	if(inputLength()>0 && event.keyCode===13){
	createListElement();	
	}
}
button.addEventListener("click", addToListAferClick);
input.addEventListener("keypress", addToListAferKeupress);
*/



var button = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var deleteBtns = document.getElementsByClassName("delete");
//add event listener first 6 html buttons

for(var i = 0; deleteBtns.length>i; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);

}

function removeParent(event){
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();

}
//click on list items and strikethroughs
function addEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement
}
ul.onclick = function(evt){
	var target = addEventTarget(evt);
	target.classList.toggle("faruk");
}

//adding new items 
function inputLength(){
	return input.value.length;
} 
function createListElement(){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML +" ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}
function addToListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}
function addListAfterKeypress(){
	if(inputLength()>0 && event.keyCode===13){
		createListElement();
	} 
}
button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function backgr(){
	var r = document.getElementById("div1");
	r.style.background="red";
	r.style.width="500px"
	r.style.textAlign="center"
	r.style.borderRadius="10px"}
	backgr();

function styleP(){
	var x = document.getElementsByTagName("p");
	for(var i=0; i<x.length; i++){
	x[i].style.backgroundColor="black";
	x[i].style.color="white";
	x[i].style.width="400px";
	x[i].style.margin="auto"
	}
}
styleP()

/*window.onload = function(){
	// create new element
	var h1 = document.createElement("h1");
	// creat text node for the new element
	var node = document.createTextNode("faruk is under this demo");
	// add the text inside the new element
	h1.appendChild(node);

	var div = document.getElementById('demo');
	div.appendChild(h1)
}*/
	window.onload=function(){
		//careate a element 
		var h1 = document.createElement("h1");
		// carete text node for element 
		var node = document.createTextNode("i am gonig inside");
		// add text node inside the element 
		h1.appendChild(node);
		// add thr element to the inside the div tag
		var div = document.getElementById("div1");
		div.appendChild(h1);
	}

function removeItems(){
	var parent = document.getElementById("div1");
	var child = document.getElementsByClassName("myclass1")[0];
	parent.removeChild(child);

}
function careteButton(){
	var btn = document.createElement("button");
	var node = document.createTextNode("Delete");
	btn.appendChild(node);
	var div = document.getElementById('demo');
	div.appendChild(btn);}

careteButton();
var button = document.getElementById("demo");
button.addEventListener("click", removeItems);

function replaceElement(){
	var h3 = document.createElement("h3");
	var node = document.createTextNode("This is my h3");
	h3.appendChild(node);
	var parent = document.getElementById("div1");
	var child = document.getElementsByClassName("myclass1")[0];
	parent.replaceChild(h3, child); }

	replaceElement();
function animation(){
	var pos = 0;
	var box = document.getElementById("box");
	var t = setInterval(move, 10);

	function move(){
		if(pos >=150){
			clearInterval(t);
		} else {
			pos += 1;
			box.style.left = pos+"px";
		}
	}
};
animation(); 



function animation1(){
	var pos = 0;
	var pos4 = 0;
	var box1 = document.getElementById("box1");
	var box2 = document.getElementById("box2");
	var box3 = document.getElementById("box3");
	var t = setInterval(move, 20);

	
	function move(){

		if (pos >=440){
			clearInterval(t);
		}
		else{
			pos +=1;
			
			box1.style.left = pos+"px";
			box2.style.right = pos+"px";
			box3.style.left = pos+"px";
			

		}
	}
};
animation1();

function animationbox4(){
	var pos = 0;
	var box = document.getElementById("box4");
	var t = setInterval(move, 10);

	function move(){
		if(pos >=200){
			clearInterval(t);
		} else {
			pos += 1;
			box.style.top = pos+"px";
		}
	}
};
animationbox4();
function ncreateElemetInsideBox(){
	var p = document.createElement("h3");
	var node = document.createTextNode("faruk");
	p.appendChild(node);
	var parent = document.getElementById("box4");
	parent.appendChild(p);
}
ncreateElemetInsideBox();
function removefaruk(){
	var parent = document.getElementById("container1");
	var child = document.getElementById("box4");
	parent.removeChild(child);}

var deleteFarukBtns = document.getElementById("delfaruk");
	deleteFarukBtns.style.background = "blue";
	deleteFarukBtns.style.color="white";
	deleteFarukBtns.style.padding="5px 20px";
	deleteFarukBtns.style.fontSize="20px";
	deleteFarukBtns.style.border="solid red 2px";


	deleteFarukBtns.addEventListener("click", removefaruk);

	function change(){
		var x = document.getElementById("name");
		x.value = x.value.toUpperCase();
	};
function show(){
	var x = document.getElementById("demo2");
	x.innerHTML= Date();
    }
window.onload = function(){
	var btns = document.getElementById("btns");
	btns.addEventListener("click", myfunction);
	function myfunction(){
		var div = document.getElementById("demo3");
		div.innerHTML = prompt("what is you Name");
		 btns.removeEventListener("click", myfunction);
	}
}
  var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg',
    'https://cooldigital.photography/wp-content/uploads/2014/02/Spring-620x406.jpg',
    'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];
/*var i = 0;
function next() {
    var slider = document.getElementById('slider'); 
    i++;
    if(i >= images.length) {
        i = 0;
    }
    slider.src = images[i];
}
function prev() {
    var slider = document.getElementById('slider');
    i--;
    if(i < 0) {
        i = images.length-1;
    }
    slider.src = images[i];
}*/
/*var x=0;
function next(){
	var slider = document.getElementById("slider");
	x++; 
	if(x >=images.length){
		x=0
	}  
	slider.src = images[x];
}
function prev(){
	var slider = document.getElementById("slider");
	x--; if(x < 0){
		x = images.length-1
	}
	slider.src = images[x];
}
*/

var i=0;
function next(){
	var slider = document.getElementById("slider");
	i++;
	if(i>=images.length){
		i=0;
	}
	slider.src = images[i];
}
function prev(){
	var slider = document.getElementById("slider"); i--;
	if(i < 0){
		i = images.length-1
	}
	slider.src = images[i]; }
/*
function validate(){
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	if(num1.value !== "" && num2.value !== ""){
		if(num1.value == num2.value){
			return true;
		}
	} 
	alert("The values should be equal and not blank");
	return false;
}
*/
var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");

function validate(){
	if(n1.value!==" "&& n2.value !== " "){
		if(n1.value ==n2.value){sss
			return true;
		}
		alert("The value should be equal and not blank");
		n1.value="";
		n2.value="";
		return false;

	}
}
/*r (flet x=0; x<5; x++ ){
	console.log(x);
}*/
/*for (let x=10; x>0; x-- ){
	console.log(x);
}*/


// ******** start ES6 form here ################


function letTL(){
	let name = "faruk";
	let msg = "welcome"+name+"!"
	console.log(msg);
}
letTL();
function lettl1(){
	let name='faruk';
	let msg  = `Welcome ${name}!`;
	console.log(msg);
}
lettl1();
function lettl2(){
	let a = 5;
	let b = 10;
	let msg = `sum is ${a+b}`
	console.log(msg);
}
lettl2();
let faruk = 500;
function faruksum(){
	let a = 600;
	let msg = `faruk earning today ${faruk+a}! this the best earning for today
	 after the ens balabce  ${a-faruk}`
	console.log(msg);
}
faruksum();
let obj ={
	a:1, b:2, c:4
};
for(let f in obj){
	console.log(f);
}

const faruknew=(x, y)=>{
	let sum = x+y;
	console.log(sum);
}
faruknew(25, 5);

const num=()=>{
	console.log(faruknew(50, 50));

}
num();
const great=x=>"welcome" + x;

console.log(great("faruk"));

var arr=[2, 4, 6]
arr.forEach(function(el){
	console.log(el*2);
});

const arry=[6, 8, 12];
arry.forEach(v=>{
	console.log(v*2)
});
const someName = ['faruk1', 'faruk2', 'faruk3'];
someName.forEach(sn=>{
	console.log(sn)
})
const love=f=>{
	let sti="I love You " + f ;
console.log(sti);}
love("farukaa")

function names(na){
	console.log ("welcome mr "+ na);
}
names('farukee');
//for loop es6
let myArrys = [1, 2, 3, 4, 5];
for(let k = 0; k<myArrys.length; k++){
	console.log(myArrys[k]);
}
//for in loop es6
let myObj={a:2, b:3, c:4};
for (let v in myObj){
	console.log(v);
}
// for of loop es6
let snm = [12, 23,34,45, 56]
for(let mum of snm){
	console.log(mum);
}

 let tree = {
 	height:10,
 	color:"red",
 	grow(){
 		console.log(this.height +=2);
 	}
 }
 tree.grow();
 let height = 20;
 let health = 100;
 let heiHealth = {
 	height,
 	health,
 }
console.log(heiHealth.height);

var a = {
	x:1, x:2, x:3, x:4
}
console.log(a.x);

let car = {
  speed: 40,
  accelerate() {
    this.speed += 10;
  }
	};
	car.accelerate();
	car.accelerate();
	console.log(car.speed);


let peop = "name";
let id = 345;
let mobile = "01817638893";
let user = {
	[peop]:"farukee",
	[`user_${id}`]:`${mobile}`
}
console.log(user.name);
console.log(user.user_345);

var i = 0;
var a ={
	['foo' + ++i]:i,
	['foo' + ++i]:i,
	['foo' + ++i]:i,
	['foo' + ++i]:i }

console.log(a.foo1);
console.log(a.foo4);

var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() 
  + param.slice(1)]: 4
};
console.log(config);

let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
let newStudent = Object.assign({}, person, student);
newStudent.home="comilla"
console.log(person.name);
console.log(student.name);
console.log(newStudent.age);
console.log(newStudent.home);


//destructuring arrays
let arryy = [1, 3, 4];
let [one, three, four]=arryy
console.log(four);

let ax=()=>{
	return [10, 15, 20];
}
let [x, , z]=ax();
console.log(z);

let ae, b, c =4, d=8;
[ae, b=6]=[2];
console.log(ae);//2
console.log(b);//6
[c, d]=[d, c]
console.log(c)//8
console.log(d)//4

//destrucring Object 

let obje = {h:100, s:true}
let{h, s} = obje;
console.log(h)//100
console.log(s)// true

let ab, bb;
({ab, bb} = {ab:'hello ', bb:'faruk boss'});
console.log(ab+bb);// hello faruk boss

let {ap, bx} = {ap:'Hello', bx:'Jack ma Alli baba company'};
console.log(ap+bx);// Hello Jack ma Ali baba company;
var q = {h:42, s:50};
var {h:foo, s:bar}=q;
console.log(h);// Error
console.log(foo)//42
console.log(bar)//true
console.log(s);// error

var xobj = {ib:42, name:'baby'};
let {ib=10, age=20}=xobj;
console.log(ib);// 42
console.log(age);// 20
console.log(xobj.name);//baby

// rest and spread

/*function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));*/


/*function allcontainer(arr){
	for (let k = 1; k<arguments.length; k++){
		let num = arguments[k];
		if(arr.indexOf(num)===-1){
			return false;
		}

	}
	return true;

}
let xy =[2, 4, 6];
console.log(allcontainer(xy, 2, 4, 6));
console.log(allcontainer(xy, 6,7, 8));
*/
/*function allcontainer(arr){
	for(let k = 1; k<arguments.length; k++){
		let num = arguments[k];
		if(arr.indexOf(num)===-1){
			return true;
		}
	} return false;
}
let xy=[2, 4, 6];
console.log(allcontainer(xy, 2,3,4));
console.log(allcontainer(xy, 2, 4, 6));*/
/*function contaall(arr){
	for (let i=1; i<arguments.length; i++){
		let num =arguments[i];
		if(arr.indexOf(num)===-1){
			return true;
		}
	}
	return false;
}
let xx=[6, 7, 8];
console.log(contaall(xx, 6, 1, 3));
console.log(contaall(xx, 6, 7, 8));
*/
function yours(arr,...n){
	for( let num of n){
		if(arr.indexOf(num)===-1){
			return true;
		}
	} return false;
}
let y = [ 10, 20, 30];
console.log(yours(y, 10, 30, 20));
console.log(yours(y, 60, 10, 30));

function bilkisarr(arr){
	 for (let i =0; i<arguments.length; i++ ){
	 	let num = arguments[i];
	 	if(arr.indexOf(num)===-1){
	 		return true;
	 	}
	 } return false;
}
let dd=[4, 6, 8];
console.log(bilkisarr(dd, 9,7, 9));
console.log(bilkisarr(dd, 4,6,7));

function rubel(arr){
	for (let b =0; b<arguments.length; b++){
		let num = arguments[b];
		if(arr.indexOf(num)==="m"){
			return true;
		}
	} return false;

}
let R = [ "a", 'b', 'c', 'd'];
console.log(rubel(R, '5', 'b', 'f'));

function kader(arr,...rom){
	for(let num of rom){
		if(arr.indexOf(num===-5)){
			return true;
		}
	} return false;
}
let qb =[1, 2, 3];
console.log(kader(qb, 1,2,3));

function rahul(arr,...g){
	for (let num of g){
		if(arr.indexOf(num)===-1){
			return false;
		}
	} return true;
}
let gm = [10, 20, 30];
console.log(rahul(gm, 30, 60));


/*function mfunction(t, y, u, i){
	console.log(t+y+u+i);
}
var argses=[1, 2, 3];
mfunction.apply(null, argses.concat(4)); 

function tuhin(l, m, c){
	console.log(l+m+c);
}
var pp = [10, 20];
tuhin.apply(null, pp.concat(60)); */

function balovsha(t, u, c, s){
	console.log(t+u+c+s);
}
var cca=[2,4,6]
balovsha(...cca, 8);

var dateFields=[1990, 0, 1];
var date =new Date(...dateFields);
console.log(date);
// old arrays addi element
var darr = ['one', 'two', 'five'];
darr.splice(2,0, "three" );
darr.splice(3,0, "four");
console.log(darr);

//es6 make very simple

var xarr=['six', 'seven'];
var xyarr=['one', 'two', 'three', 'four', 'five',...xarr,'eight', 'nine', 'ten']
console.log(xyarr);

var xArr = [10, 30, 40];
var xyArr = [...xArr, 50, 60];
console.log(xyArr);

var objj1={foo:"bar", xxx:10};
var objj2={foo:"brez", zzz:20};
const colnedobjj={...objj1};
//console.log(objj);
//const mergedobjj = {}

class Rectangle{constructor(width, height){
	this.width=width;
	this.height=height;
}}
const square = new Rectangle(5, 5);
const poster = new Rectangle(3, 3);
console.log(square.height);
console.log(poster.width);

//named class
var farukq = class rect{constructor(width, height){
	this.width=width;
	this.height=height;
}}
const sqr = new farukq(10,20);
const post = new farukq(50, 60);
console.log(sqr.height);
console.log(post.width);

// unnamed class 
var farq = class { constructor(width, height){
	this.width = width;
	this.height = height;
}}
const suq = new farq(10,100);
const posst = new farq(400 , 600);
console.log(suq.height);
console.log(posst.width);
// map 
/*
let map = new Map([['k', 'v'], ['k2' , 'v2']]);
console.log(map.size);*/

let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');
console.log(map.get("k1"));
console.log(map.has("k2"))
console.log(map.delete("k1"))
console.log(map.size);
console.log(map.set("k1", 'v2'));
console.log(map.size);
console.log(map.keys());
console.log(map.values())
console.log(map.entries())
for (let kv of map.entries())
	console.log(kv[0]+":"+kv[1])

//****set####3
let set = new Set();
set.add("1").add("2").add("5");
console.log(set.has(5));
for (let vx of set.values())
  console.log(vx);

let fset = new Set();
fset.add(5).add("faruk").add(6).add(7);
console.log(fset.has('faruk'));
for (var fx of fset.values())
	console.log(fx);
// promises
/*setTimeout(function(){
	console.log("faruk1");
	setTimeout(function(){
		console.log("faruk2")
	}, 2000)    
},2000);
console.log('end');*/

// created new promise
/*new Promise(function(resolve, reject){
	if (success) 
		resolve(result);
	else reject(Error("failure"));

})*/

function aFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

aFunc("Work 1") // Task 1
.then(function(result) {
    console.log(result);
    return aFunc("Work 2"); // Task 2
}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End");


/* var css= document.querySelector("h3");
 var color1= document.querySelector('.color1');
 var color2=document.querySelector('.color2');
 var body = document.getElementById("gradient");
 function setGradient(){
 	body.style.background="linear-gradient(to right,"
 	+color1.value
 	+","
 	+color2.value
 	")";
 	css.textContent = body.style.background+";";
 }

 color1.addEventListener("input", setGradient);
 	
 color2.addEventListener("input", setGradient);
*/
/*var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var css = document.querySelector("h3");
var body = document.getElementById("gradient")

function setGradient(){
	body.style.background='linear-gradient(to right,'
	+color1.value
	+','
	+color2.value
	+')';
	css.textContent=body.style.background+';';
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);*/
var color1 = document.querySelector('.color1');
var color2 = document.querySelector(".color2");
var css =document.querySelector("h3");
var body = document.getElementById("gradient");

 function bodye(){
	body.style.background="linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+')';
	css.textContent=body.style.background;
}
color1.addEventListener('input', bodye);
color2.addEventListener('input', bodye);

 function userValid(bool){
 	return bool;
 }

 var account = userValid(true)? "oh its you":"oh its not for you";

const arrays = [2, 4, 6, 8, 9, 10];
const double = [];
const newArrays = arrays.forEach( (num)=> {
	double.push(num = 2);
})
console.log(double);