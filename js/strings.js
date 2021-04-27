//STEP 1
let perName = prompt("Please enter your name");
alert (perName.length);
 
//STEP 2

 let personName = prompt("Please enter your name");
 let num = prompt("Please enter  numeric value");
 if (num < personName.length){
    alert (personName.charAt(num));
 }else
 alert("It is not currect vaule")
 
//STEP 3

let firstName = prompt("Please enter your first name");
let asd = " ";
let lastName = prompt("Please enter your last name");
let nameFirst = firstName.concat(asd);
alert(nameFirst.concat(lastName));


//STEP 4

let text4 = "The quick brown Fox jumps over the lazy dog";
alert(text4.indexOf("Fox"));

//STEP 5
let text5 ="The quick brown Fox jumps over the lazy Fox";
alert(text5.lastIndexOf("Fox"));

//STEP 6

let text6 = "The quick brown fox jumped over the lazy dog";

let fullName = prompt ("Please enter the full name");

let userName = prompt (text6.replace("the lazy dog",fullName));
alert(userName);


//STEP 7"

let text7 = "The quick brown fox jumped over the lazy dog";
userWord = prompt("Please enter the word");
alert(text7.search(userWord));

//STEP 8
let oldString = "The quick brown fox jumped over the lazy dog";
newString = "the lazy dog"
let startPoint = oldString.search(newString);
let lenstor = newString.length;
let subStr = oldString.substr(startPoint,lenstor).toUpperCase();
alert(subStr);

//STEP 9

let text9 = "           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          " ;
let space = text9.trim().toLowerCase();
alert(text9.trim().toLowerCase());

//STEP 10
let text10 = "the quick brown fox jumps over the lazy dog";
let caps =  text10.charAt(0).toUpperCase() + text10.slice(1);
alert(caps);





