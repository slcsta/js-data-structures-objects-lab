// Write your solution in this file!

// define a driver variable and assign it to an object

const driver = {};

function updateDriverWithKeyAndValue(object, key, value){
    const newDriver = { ...object};
    newDriver[key] = value;
    return newDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
const newerDriver = Object.assign({}, driver);
delete newerDriver[key];
return newerDriver;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
