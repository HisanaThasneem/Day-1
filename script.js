a=5;
var a=9;
console.log(a);
let b=20;
console.log(b);
{
    let b=19;
    console.log(b)
    const t=10
}
console.log(typeof(b));

var d=true;
console.log(typeof(d));
var m;
console.log(typeof(m));
var arr1=['orange','apple',10]
console.log(arr1[0])
console.log(arr1.length)
arr1.push('banana')
console.log(arr1)
//javascript objects
let person={
    name:'hisana',
    age:21,
    location:'trivandrum'
}
console.log(person.age)
let arr2=[{
    name:'hisana',
    age:21,
    location:'trivandrum'
},{
    name:'jennath',
    age:22,
    location:'trivandrum'
}]
console.log(arr2[1].age)
function add(x,y){
    var sum=x+y;
    return sum;
}
var p=add(11,30)
console.log(p)
let h=1;
let j=h++;
console.log(h)
console.log(j)
var p=10
var q=20
if (p>q) {
    console.log('p is greater than q')
}
 else if(p==q){
    console.log('p is equal to q')
 }
 else {
    console.log('p is less than q')
 }
//looping statements
var array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);    
}
 for (const key in person) {
console.log(person[key])
 }
 for (const i of array) {
    console.log(i)
 }