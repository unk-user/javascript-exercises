const fibonacci = function(member) {
    if(member < 0)return "OOPS";
    if(member <= 2)return 1;
    else return fibonacci(member - 1) + fibonacci(member - 2);
};

// Do not edit below this line
module.exports = fibonacci;
