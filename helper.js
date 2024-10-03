const students = require('./students.json');
console.log(students);
const f1 = (floor) => {
    let currentFloor = students.filter((st)=>{
        return st.dormitoryFloor == floor
    })
    return currentFloor;
}

const f2 = () => {
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
const f3 = () => {
    let diff = [];
    students.forEach((item)=>{
        if ((item.freeDormitory && item.dormitoryPrice !== null) || (!item.freeDormitory && item.dormitoryPrice === null) ){
            diff.push(diff)
        }
    })
    return diff.length;
}

f3();