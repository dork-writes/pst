// console.log("Hello world");
// var str1 = "string";
// var marks = 
// {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.777
// };

// var und = undefined;
// var iit = null;

// function avg(a, b)
// {
//     return (a + b)/2;
// };  

// c = avg(4, 6);
// console.log(c);

// var arr = [1,2,3,4,5,6,7];

// arr.forEach(function(element)
// {
//     console.log(element);
// });

// console.log(arr.length);
// arr.shift();
// arr.unshift("Cap");
// console.log(arr);
// let newLen = arr.unshift("Capper");
// console.log(arr);
// console.log(newLen);
// let a = arr.toString();
// arr.sort();
// console.log(arr);
// console.log(a);

// let string = "ajjajdije";
// console.log(string.indexOf("je"));  
// //lastIndexOf
// console.log(string.slice(0, 3));
// let b = string.replace("ajj", "kal");
// console.log(b);
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());  //returns day number  
// console.log("Hello world");
// var str1 = "string";
// var marks = 
// {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.777
// };

// var und = undefined;
// var iit = null;

// function avg(a, b)
// {
//     return (a + b)/2;
// };  

// c = avg(4, 6);
// console.log(c);

// var arr = [1,2,3,4,5,6,7];

// arr.forEach(function(element)
// {
//     console.log(element);
// });

// console.log(arr.length);
// arr.shift();
// arr.unshift("Cap");
// console.log(arr);
// let newLen = arr.unshift("Capper");
// console.log(arr);
// console.log(newLen);
// let a = arr.toString();
// arr.sort();
// console.log(arr);
// console.log(a);

// let string = "ajjajdije";
// console.log(string.indexOf("je"));  
// //lastIndexOf
// console.log(string.slice(0, 3));
// let b = string.replace("ajj", "kal");
// console.log(b);
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());  //returns day number  
let timer = document.createElement("h1");
let currTime = new Date();
timer.innerHTML = "<span id = 'hours'>" + currTime.getHours() + "</span>" + " : " + "<span id = 'minutes'>" + currTime.getMinutes() + "</span>" + " : " + "<span id = 'seconds'>" + currTime.getSeconds() + "</span>";
document.body.appendChild(timer);
timer.className = "time";

let upCount = function()
{
    let hours = parseFloat(document.getElementById("hours").textContent);
    let minutes = parseFloat(document.getElementById("minutes").textContent);
    let seconds = parseFloat(document.getElementById("seconds").textContent);
    // hours++;
    // minutes++;
    seconds++;
    
    
    if (seconds === 60)
    {
        seconds = 0;
        minutes++;
    }
    
    if (minutes === 60)
    {
        minutes = 0;     
        hours++;
    }
    
    if (hours === 24)
    {
        hours = 0;
    }

    if (hours >= 10)
    {
        document.getElementById("hours").textContent = hours;
    }

    else
    {
        document.getElementById("hours").textContent = "0" + hours;
    }

    if (minutes >= 10)
    {
        document.getElementById("minutes").textContent = minutes;
    }

    else
    {
        document.getElementById("minutes").textContent = "0" + minutes;
    }

    if (seconds >= 10)
    {
        document.getElementById("seconds").textContent = seconds;
    }

    else
    {
        document.getElementById("seconds").textContent = "0" + seconds;
    }
};

window.setInterval(upCount, 1000);