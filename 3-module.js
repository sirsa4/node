//modules in node

//require() to use exported modules
//destructured method - to allow easy access
const {john, susan} = require('./3-names');
const {hello, bye} = require('./3-functions');

//run functions
//john
hello(john);
bye(john);
//susan
hello(susan);
bye(susan);
