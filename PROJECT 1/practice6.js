const button=document.querySelectorAll('.colors')
console.log(button);
button.forEach((btn)=>{
    console.log(btn);
        btn.addEventListener('click',(event)=>{//it has to be carried a event object when a addEventListner method calls so we taken a event object as reference in the function call
            console.log(event);
            console.log(event.target);//returns the object from where the event occur
            if(event.target.id=='first'){
                document.body.style.backgroundColor='yellow'
            }
            if(event.target.id=='second'){
                document.body.style.backgroundColor='red'
            }
            if(event.target.id=='third'){
                document.body.style.backgroundColor='purple'
            }
            if(event.target.id=='fourth'){
                document.body.style.backgroundColor='pink'
            }
            if(event.target.id=='fifth'){
                document.body.style.backgroundColor='green'
            }
        })
})

//This Way also the funtion or the methods can be done
// btn.addEventListener('click',()=>{//it has to be carried a event object when a addEventListner method calls so we taken a event object as reference in the function call
//     console.log(btn);
//     // console.log(event.target);//returns the object from where the event occur
//     if(btn.id=='first'){
//         document.body.style.backgroundColor='yellow'
//     }
//     if(btn.id=='second'){
//         document.body.style.backgroundColor='red'
//     }
//     if(btn.id=='third'){
//         document.body.style.backgroundColor='purple'
//     }
//     if(btn.id=='fourth'){
//         document.body.style.backgroundColor='pink'
//     }
//     if(btn.id=='fifth'){
//         document.body.style.backgroundColor='green'
//     }
// })