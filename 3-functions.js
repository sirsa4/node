//greeting function
const hello = name =>{
    console.log(`${name.name} ${name.age} years is saying hello to you`);
}

//goodbye function
const bye = name =>{
    console.log(`${name.name} says a goood byyyyeee. Btw, if you forgot ${name.name} is ${name.age} years old`);
}

module.exports = {hello, bye}