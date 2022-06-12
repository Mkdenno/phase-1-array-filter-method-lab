// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driver,about){
    return driver.filter(driver=>{
        return driver.toLowerCase()===about.toLowerCase();
    })
}
const fuzzyMatch=function(driver,about){
   return driver.filter(driver=>{
       return driver.toLowerCase().substring(0,about.length)===about.toLowerCase()
   })
}
const matchName=(driver,about)=>{
    return driver.filter(driver=>{
        return driver.name===about;
    })
}