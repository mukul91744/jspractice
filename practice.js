const employe = [
    {name:'mukul',comp:'ihb',inc:20000},
    {name:'sourav',comp:'tec',inc:50000},
    {name:'ajay',comp:'solv',inc:26000},
    {name:'nikhil',comp:'planet',inc:22000},
    {name:'vijay',comp:'Qrb',inc:24000},
];

let str = employe.filter((emp)=> {
    return emp.inc > 24000
})
console.log(str)
