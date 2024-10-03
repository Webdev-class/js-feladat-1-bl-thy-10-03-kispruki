const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    let data = {};
    students.forEach((item)=>{
        if (data.hasOwnProperty(item.club)){
            data[item.club] += 1;
        }
        else{
            data[item.club] = 1;
        }
    })
    return data;
}

module.exports = f2;