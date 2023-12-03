    // 1. Ways to print in JavaScript
    // console.log("Hello World"); 
    // alert("me");  //warning comes in small box from top of screen
    //  document.write("This is document write");


    // 2. Javascript console API
    // console.log("Hello navnit28", 11+17, "Another log");
    // console.warn("This is warning"); //printed in yellow in console
    // console.error("This is an error"); //in red in console


    // 3. JavaScript Variables 
    // Containers to store data values 

    // var number1 = 34;
    // var number2 = 56;
    // console.log(number1+number2);

    // 4. Datatypes in JavaScript
    
    //Numbers 
    // var num1 = 455;
    // var num2 = 56.76;

    //String 
    // var str1 = "This is a string";
    // var str2 = 'This is also a string';
    // console.log(str2); 

    //Objects
    // var marks = {
    //     ravi: 34, 
    //     shubham: 99.977,
    //     harry: 100, 
    // }

    // console.log(marks); 

    //Booleans
    // var a = true; 
    // var b = false;
    // console.log(a,b); 

    // var und = undefined 
    // var und; 
    // console.log(und); 
    // var n = null;
    // console.log(n); 

    // At a very high level there are two types of dataypes in javascript:
    // 1. Primitive: undefined, null, numbers, string, boolean, symbol
    // 2. Reference: arrays, objects 

    // var arr = [1, 2, "string", 3, 4, 5]

    // console.log(arr)

    // Operator in Javascript
    // Arithmetic operators
    // var a = 34;
    // var b = 56;
    // console.log("The value of a+b is", a+b)
    // console.log("The value of a-b is", a-b)
    // console.log("The value of a*b is", a*b)
    // console.log("The value of a/b is", a/b)

    //Assignement operators
    // var c = b;
    // c+=2;
    //c = c+2
    // c-=2 
    //c = c-2

    // console.log(c);

    //Comparision Operators
    // var x = 34;
    // var y = 56; 
    // console.log(x==y);
    // console.log(x>=y); //false
    // console.log(x<=y);
    // console.log(x>y);
    // // console.log(x<y);

    //Logical Operators
    //Logical and
    // console.log(true&&true)
    // console.log(true&&false)
    // console.log(false&&false) //false
    // console.log(false&&true) 

    //Logical Or
    // console.log(true||true)
    // console.log(true||false)
    // console.log(false||false)
    // console.log(false||true)

    //Logical not

    // console.log(!false);
    // console.log(!true);
// 

    //Funtions in JS
    // //DRY = do not repeat yourself 
    // function avg(a,b){
    //     return (a+b)/2; 
    // }

    // c1 = avg(4,6);
    // c2 = avg(14,66);
    // console.log(c1, c2); 

    /*
    //conditionals in JavaScript
    var age = 44;
    //Single if statement
    if(age>8){
        console.log('You are not a kid')
    }

    // if-else 
    if(age>8){
        console.log('You are not a kid')
    }
    else{
        console.log('You are a kid')
    }

    //if-else ladder
    age= 32
    if(age>88){
        console.log('You are not a kid')
    }
    else if(age>14){
        console.log('You are not a kiddo')
    }
    else if(age>100){
        console.log('Hui hui')
    }
    else{
        console.log("Bachhe ho tum to")
    }
    console.log("End of ladder")
    */

    // var arr = [1,2,3,4,5,6,7];
    // console.log(arr); 
    // for(var i =0; i<arr.length; i++){
    //     if(i==2){
    //         continue;      //3 not printed as its index is 2
    //     }
    //     console.log(arr[i])}

    //     arr.forEach(function(element){
    //         console.log(element);
    //     } )
    // }

    // const a = 0;
    // ac++;
    // ac=ac+1;

    // Let j=0; 

    // while(j<arr.length){
    //     console.log(arr[j]);
    //     j++;
    // }

    // let myArr = ["Fan", "Camera", 34, null, true];
    // //Array Methods 
    // console.log ( myArr.length);
    // myArr.pop();     // removes last element 
    // myArr.push("Harry");
    // myArr.shift()   //  removes first element
    // myArr.unshift("Harry");
    // const newLen = myArr.unshift("Harry");
    // console.log(newLen);
    // console.log(myArr);

    // String Methods in JS 
    let myLovelyString = "Riya is a bad bad girl"; 
    // console.log(myLovelyString.length)
    // console.log(myLovelyString.indexOf("bad"))     //returns index of first occurence 
    // console.log(myLovelyString.lastIndexOf("bad")) //returns index of last occurence
    
    // console.log(myLovelyString.slice(1,3))        //start to (end-1)
    d = myLovelyString.replace("Riya", "Rohan")      //replaces only the first occurence
    console.log(d, myLovelyString)

    // let myDate = new Date();
    // // console.log(myDate.getTime());
    // console.log(myDate.getFullYear());
    // console.log(myDate.getDay());
    // console.log(myDate.getMinutes());
    // console.log(myDate.getHours());

    //DOM Manipulation
    let elem = document.getElementById('click'); 
    console.log(elem); 

    let elemClass = document.getElementsByClassName('container');
    console.log(elemClass); 
    elemClass[0].style.background = "yellow" 
    elemClass[0].classList.add("bg-primary")  
    elemClass[0].classList.add("text-success")
    console.log(elem.innerHTML);
    // console.log(elem.innerText);

    // console.log(elemClass[0].innerHTML);
    // console.log(elemClass[0].innerText);

    // tn = document.getElementsByTagName('div');
    // console.log(tn);
    // createElement = document.createElement('p');
    // createElement.innerText = "This is a created para"
    // // createElement = document.createElement('p');

    // tn[0].appendChild(createElement);  //tn 0 is the first div element
    // createElement2 = document.createElement('b');
    // createElement2.innerText = "This is a created bold text";
    // tn[0].replaceChild(createElement2, createElement); //for replacing texts
    

    // //Selecting using Query
    // sel = document.querySelector('.container'); //searches the document for the first element with the class name 'container'. If such an element exists, it will be selected.
    // console.log(sel)
    // sel = document.querySelectorAll('.container')
    //If you need to select multiple elements with the same class, you can use document.querySelectorAll('.container'), which will return a NodeList containing all the elements with the class 'container'
    // console.log(sel)

    // function clicked(){     
    // console.log('The button was clicked')}

    //Events in JS

    // firstContainer.addEventListener('click', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
    //     console.log("Clicked on Container") 
    // })

    //when the firstContainer element is clicked, then the given block of code is executed. 

    // window.onload = function(){
    //     console.log('The document was loaded')
    // }


    // firstContainer.addEventListener('mouseover', function(){
    //     console.log("Mouse on Container")
    // } )
    // firstContainer.addEventListener('mouseout', function(){
    //     console.log("Mouse out Container")
    // } )

    // let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
    // firstContainer.addEventListener('mouseup', function(){
    //     console.log("Mouse up Container")
    // } )


    // firstContainer.addEventListener('mousedown', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    //     console.log("Mouse down Container")
    // } )



    // Arrow Functions
    // function summ(a,b){
    //     return a+b;
    // }
    
    // summ = (a,b)=>{
    //     return a+b; 
    // }

    // logKaro =()=>{
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    //     console.log("I am your log");
    // }
    
    // SetTimeout and SetInterval 
    //clr = setTimeout(logKaro, 5000);
    //clr = setInterval(logKaro, 2000);
    //use clearInterval/clearTimeout to cancel setInterval/setTimeout
    
    //JavaScript localStorage
    // localStorage.setItem('name', 'harry')
    // localStorage
    // localStorage.getItem('name')
    // localStorage.removeItem('name')

    //JSON
    // obj = {name:"harry", length : 1, a:{this: "that"}} //json files just have double quotes
    // jso = JSON.stringify(obj);  //converts object to string
    // // console.log(typeof jso)
    // console.log(jso)
    // parsed = JSON.parse(`{"name":"harry", "length" : 1, "a":{"this": "that"}}`) //converts string to object 
    // console.log(parsed); 

    // Template literals - Backticks
    a = 34;
    console.log(`this is my ${a}`)  // to embed the variable a directly inside the string 


   





    

   
    
   



    



    

