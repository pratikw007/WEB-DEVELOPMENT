// object inside Array
// very useful in real world application
const users =[
    {userId:1,firstName: 'pratik',gender:'male'},
    {userId:2,firstName: 'Ram',gender:'male'},
    {userId:3,firstName: 'pranay',gender:'male'},
]
for(let user of users){
    console.log(user.userId); //1 2 3 
    console.log(user.gender);
}
