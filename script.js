let div=document.createElement("div")
div.className="container";
div.style.textAlign="center";
div.style.paddingTop="200px";
div.style.backgroundColor="rgb(67, 209, 248)";
div.style.height="100vh"


let label=document.createElement("label");
label.setAttribute=("for","name");
label.innerHTML="Enter Name : ";
label.style.fontWeight="800"


let input=document.createElement("input");
input.id="countryName";
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter one option Below")
input.style.fontWeight="400";
input.style.border="none";
input.style.borderBottom="2px solid grey";
input.style.backgroundColor="rgb(187, 236, 250)";


let label1=document.createElement("label");
label1.innerHTML="michael"

let label2=document.createElement("label");
label2.innerHTML="matthew"

let label3=document.createElement("label");
label3.innerHTML="janel"

let p1=document.createElement("p");
p1.id="para0";
p1.style.fontWeight="600"

let p2=document.createElement("p");
p2.id="para1";
p2.style.fontWeight="600"

let p3=document.createElement("p");
p3.id="para2";
p3.style.fontWeight="600"

let p4=document.createElement("p");
p4.id="para3";
p4.style.fontWeight="600"

let p5=document.createElement("p");
p5.id="para4";
p5.style.fontWeight="600"







let button=document.createElement("button")
button.setAttribute=("type","submit");
button.addEventListener("click",getdata);
button.innerHTML="Submit";
button.style.margin="10px";
button.style.fontWeight="600";
button.style.borderRadius="10px";
button.style.backgroundColor="rgb(17, 6, 520)";



let br=document.createElement("br")

let br1=document.createElement("br")
let br2=document.createElement("br")


div.append(label,input,button,br,label1,br1,label2,br2,label3,p1,p2,p3,p4,p5);
document.body.append(div)

async function getdata(){
   let res=document.getElementById("countryName").value;
   console.log(res);

   try{ let res1= await fetch(`https://api.nationalize.io/?name[]=${res}`);
    var res2= await res1.json();
    console.log(res2)

    let result=res2[0].country
    console.log(result)

function foo(index){
  return `country_id : ${result[index].country_id} , probability : ${result[index].probability}`

}


    document.getElementById("para0").innerHTML=foo(0);
    document.getElementById("para1").innerHTML=foo(1);
    document.getElementById("para2").innerHTML=foo(2);
    document.getElementById("para3").innerHTML=foo(3);
    document.getElementById("para4").innerHTML=foo(4);
}
 catch(error){
console.log(error)
    }
}





      
        
    
 




  