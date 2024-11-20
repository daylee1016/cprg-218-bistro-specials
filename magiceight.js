shake.addEventListener("click",function(){
    console.log("Shake if off");

    let response = Math.random();
	console.log(response);
    response = Math.floor(Math.random() * 11); //0-10


    if(response == 0)
        output.innerHTML = "yes";
    if(response == 1)
        output.innerHTML = "sorry";
    if(response == 2)
        output.innerHTML = "I don't know";
    if(response == 3)
        output.innerHTML = "Maybe?";
    if(response == 4)
        output.innerHTML = "ask again";
    if(response == 5)
        output.innerHTML = "nice try";
    if(response == 6)
        output.innerHTML = "try again";
    if(response == 7)
        output.innerHTML = "think about it";
    if(response == 8)
        output.innerHTML = "sure";
    if(response == 9)
        output.innerHTML = "good luck";
    if(response == 10)
        output.innerHTML = "of course";



})