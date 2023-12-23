
console.log(" hello world ");
console.log(" this is branch feature ");

let obj = {
  a:" Anonymous ", 
  b:21, 
  c:" Delhi "
}
let {a:name,b:age,c:place} = obj;
console.log(name,age,place);