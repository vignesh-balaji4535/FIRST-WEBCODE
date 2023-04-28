let div=document.createElement("div")
div.className="container";

let label=document.createElement("label");
label.setAttribute=("for","name");
label.innerHTML="Enter Name : ";

let input=document.createElement("input");
input.id="countryName";
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter one option Below")

let label1=document.createElement("label");
label1.innerHTML="michael"

let label2=document.createElement("label");
label2.innerHTML="matthew"

let label3=document.createElement("label");
label3.innerHTML="janel"

let p1=document.createElement("p");
p1.id="para1";
let p2=document.createElement("p");
p2.id="para2";
let p3=document.createElement("p");
p3.id="para3";
let p4=document.createElement("p");
p4.id="para4";
let p5=document.createElement("p");
p5.id="para5";






let button=document.createElement("button")
button.setAttribute=("type","submit");
button.addEventListener("click",getdata);
button.innerHTML="Submit";
button.style.margin="10px"

let br=document.createElement("br")

let br1=document.createElement("br")
let br2=document.createElement("br")


div.append(label,input,button,br,label1,br1,label2,br2,label3,p1);
document.body.append(div)

async function getdata(){
   let res=document.getElementById("countryName").value;
   console.log(res);

    let res1= await fetch(`https://api.nationalize.io/?name[]=${res}`);
    let res2= await res1.json();
 

for(let i=0;i<res2.length;i++){
    var result=res2[i].country
    console.log(result)}
 let resu0=`country_id : ${result[0].country_id} , probability : ${result[0].probability} `
 let resu1=`country_id ${result[1].country_id} , probability ${result[1].probability} `   
 let resu2=`country_id ${result[2].country_id} , probability ${result[2].probability} `
 let resu3=`country_id ${result[3].country_id} , probability ${result[3].probability} `
 let resu4=`country_id ${result[4].country_id} , probability ${result[4].probability} `
document.getElementById("para1").innerHTML=resu0,resu1,resu2,resu3,resu4;
//document.getElementById("para2").innerHTML=resu1;
//document.getElementById("para3").innerHTML=resu2;
//document.getElementById("para4").innerHTML= resu3;
//document.getElementById("para5").innerHTML=resu4;
}

      
        
    
 




  