
// a = 2**(1/2)
// let age= prompt ('what is your age', )
// alert ('your age is ' + age)
// console.log("your age is "+ age)
// console.log(`your age is ${age}`)
// let a = "hello ";

// let age = prompt('what is your age');
// output = (age <= 18) ? "child" : "grown up";
// alert("you are a  " + output + "!");

// let a =  ('hello');
// let b =  ('hello');
// console.log(a===b);
// a = new String('hello');
// b = new String('hello');
// console.log(a===b);


// let x = 'This this THis THIs is an example string';
// let y = x.replace('an example', 'a sample');
// y = y.replace(/this/ig, 'that')
// console.log(y)

// let x = 'this is an example string';
// let y = x.charAt(5);
// console.log(y); //output i



// for (i = 5; i >= 0; i--) {
    
// console.log(i)

// }

// let array1 = [2,6,4,9,3,7];
// let sum = 0;
// for (let i=0; i<6;i++) {
// sum += array1[i];
// }
// console.log('sum is ' + sum);

// let a = 10;
// let array1 = [2,6,4,a]

// console.log(array1)


// let d = new Date();
// console.log(d);


// let count = 0;
// function countVal() {
//     console.log(++count);
// }
// let counting = setInterval(countVal,2000);

// setTimeout(()=>clearInterval(counting),10000)



// // let count = 0;
// let tr = setInterval(() => console.log(++count),2000);
// // console.log(tr);
// setTimeout(() => clearInterval(tr),10000);

function mulNum(num1 = 2, num2 = 3) {
    let mul = num1 * num2;
    console.log(mul);
    return mul;
}

function addNum(num1, num2 = mulNum(undefined,8)) {
    let sum = num1 + num2;
    alert(sum);
}

addNum(5);


