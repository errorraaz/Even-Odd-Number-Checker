
let btn = document.getElementById("btn");
let Result = document.getElementById("result");

btn.addEventListener('click', () =>{
    let input = document.getElementById("input").value;
    if(input%2===0){
        Result.innerHTML = `Your Number is Even`;
    }else{
        Result.innerHTML = `Your Number is Odd`;
    }
});

