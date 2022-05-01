const { log } = require("console");

let b=[]
b=["abc","xyza","abcde","abdef"]
c=b.filter((ele,i)=>ele.length===5).toString()
console.log(c);

let d=["cars","bike","cycle"]
console.log(d.slice(1).join(" and "));

let e=["abc","xyze","namey"]
let f=e.some((val)=>val>5)
console.log(f);

let g=[30,40,50]
let h=[2,3,4]
console.log(h.concat(g));
console.log(g.concat(h));
console.log(h.concat(h));

let i="Hi im developer aa"
let k=i.split(" ")
let l=k.slice(0,2).join(" & ")
console.log(l);

let o=i.split(" ").filter((val) => val.length ===2).join(" & ")
console.log(o);

let x=[
    {
        name:"R",
        age:60
    },
    {
        name:"B",
        age:1
    },
    {
        name:"z",
        age:10
    }
]
let t=x.filter((ele) => ele.age>10)
console.log(t)

let r=['a','b','c','d']
let count=0;
r.forEach((ele,i)=>
{
count++;
})
console.log(count)