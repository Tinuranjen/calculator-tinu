 let result=document.getElementById("inputext");        

 //Function for calculate using arrow function method
 let calculate=(number)=>{
    result.value+=number;

 }

 //Function for Result using arrow function method
 let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Syntax error");
    }

 }

 //Function for clear using arrow function method
 let clr=()=>{
    result.value="";
 }


//Function for delete using normal function expression
 function del(){
    result.value=result.value.slice(0,-1);      
 }