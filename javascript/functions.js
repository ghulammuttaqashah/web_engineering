function print()
{
    console.log("this si simple function");
}
print();

//function as expression/Anyonymous function
let x=function()
{
    console.log("This si the function as expression");
}
console.log(x());

//Arrow function
let myfunc=()=>"this is arrow function";
console.log(myfunc());
