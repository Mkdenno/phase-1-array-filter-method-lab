// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArray,about){
    return driversArray.filter(item=>{
        return item.toLowerCase()===about.toLowerCase();
    })
}
const fuzzyMatch=function(drivers,about){
   return drivers.filter(drivers=>{
       return drivers.toLowerCase().substring(0,about.length)===about.toLowerCase()
   })
}
const matchName=(drivers,about)=>{
    return drivers.filter(drivers=>{
        return drivers.name===about;
    })
}