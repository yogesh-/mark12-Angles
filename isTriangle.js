const angles = document.querySelectorAll(".angle-input");
const checkResult = document.querySelector("#check");
const result = document.querySelector("#output");


checkResult.addEventListener("click",isTriangle);

function isTriangle(){
    const sumOfAngles = calcsumOfAngles(Number(angles[0].value),Number(angles[1].value),
        Number(angles[2].value));
    if(sumOfAngles=== 180){
        console.log("Yes, The angles form a triangle")
        result.innerText = "Yes, The angles form a triangle"; 
    }else{
        console.log("The given angles dont form a triangle");
        result.innerText="The given angles dont form a triangle";
    }    
    
}

function calcsumOfAngles(angle1, angle2, angle3){
     const sumOfAngles = (angle1 + angle2 + angle3);
    console.log(sumOfAngles);
   return sumOfAngles;  
}
