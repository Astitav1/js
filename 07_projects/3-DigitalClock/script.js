const clock = document.getElementById('clock') //both are correct
//const clock = document.querySelector('#clock') //both ways are correct


setInterval(function(){
    let date = new Date()
   // console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString(); 
}, 1000)