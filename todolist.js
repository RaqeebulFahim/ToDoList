// const Tasklist=[
//     { TaskName: "Prayer"},
//     { TaskName: "Cooking"},
// ]

// let liList='';
// Tasklist.forEach(task=>{
//     liList+=`<li>${task.TaskName}</li>`;
// });

// let printtasks=document.getElementById('tasklist');
// // console.log(printtasks);
// printtasks.innerHTML=liList;


let add= document.getElementById('add');
add.addEventListener('click',(e)=>{
    e.preventDefault();
    let newtask=document.getElementById('newtask');
    let newList=document.getElementById('newList');

    console.log(newtask);

   
    newList.innerHTML+=`<span class="d-flex justify-content-between"><li>${newtask.value} </li><button class="del btn btn-sm btn-danger m-1" style=" color: white; ">X</button></span>`;
    newtask.value='';

    let del=document.querySelectorAll(".del");

    del.forEach(delTask=>{
        delTask.addEventListener('click', ()=>{
        let delLi=delTask.parentElement;
        delLi.remove();
       })
    })


})