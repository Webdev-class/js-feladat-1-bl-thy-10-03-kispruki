const students = require('../students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
   let currentFloor = students.filter((st)=>{
      return st.dormitoryFloor === floor
  })
  return currentFloor;
}
module.exports = f1;