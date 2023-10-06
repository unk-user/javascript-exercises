const leapYears = function(Year) {
    if(Year % 100 !== 0 && Year % 4 == 0)return true;
    if(Year % 100 === 0 && Year % 400 === 0)return true;
    else return false;

};

// Do not edit below this line
module.exports = leapYears;
