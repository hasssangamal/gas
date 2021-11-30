// let elments =document.createElement("div");
// let text = document.createTextNode("hello every one");
// let are =document.createAttribute("data");
// elments.className ="product";
// elments.setAttributeNode(are);
// elments.setAttribute("hassan","we are");


// console.log(elments);
// elments.appendChild(text);
// elments.style.border ="2px solid red";
// elments.style.color = "blue";
// document.body.appendChild(elments);
// let fatherelements = document.createElement("div");
// let heading = document.createElement("h2");
// let paragraph = document.createElement("p");
// let headingtext =document.createTextNode(`heading title`);
// let paragraphtext =document.createTextNode("paragraph phone every body");
// let member =1;
// fatherelements.className="product";
// heading.appendChild(headingtext);
// fatherelements.appendChild(heading);
// paragraph.appendChild(paragraphtext);
// fatherelements.appendChild(paragraph);
// document.body.appendChild(fatherelements);
// for(let i=0;i<100;i++){
   
//     document.body.appendChild( fatherelements.cloneNode(true)); 
   
//    };
// let hassan = ["hassan", 'MOHAMED',"gamal","adam","abdaual",'saleh'];
// let count =1;
// for(let i =0;i<hassan.length;i++){
//     document.write(`${hassan[i]+"<br>"}${count}`);
//     count++;
// }
// let inputusername =document.querySelector("[name='username']");
// let inputage =document.querySelector("[name='age']");
// document.forms[0].onsubmit=function(e){
//     let uservalid =false;
//     let agevalid =false;
    
// if(inputusername.value !== "" && inputusername.value.length <=10){
//     uservalid =true;
// };
// if( inputage.value !== ""){
//     agevalid =true;
// }
// if(uservalid ===false ||agevalid ===false){
//         e.preventDefault();

//     }
//     inputusername.onblur =function(){
//         inputage.focus();
//     }

// };
// let we =document.getElementById("sara");

// let p =document.createElement("p");
// let ptext =document.createTextNode("i love you ");
// p.appendChild(ptext);
// we.after(p);
// let p =document.createElement("p");
// let ptext=document.createTextNode("i baby");
// p.appendChild(ptext);
// document.body.appendChild(p);
// p.addEventListener("click",function(){
//     let x=p.cloneNode(true);
//     x.classname="cloned";
//     document.body.appendChild(x);
// });
// document.addEventListener("click",function(e){
// if(e.target.classname==="cloned"){
//     console.log("if you want play fottba");
// }
// })
// let z =document.getElementById("sara");
// let u=z.previousElementSibling;
// let large =document.createElement("div");
// let container =document.createElement("div");
// let content =document.createElement("div");
// let span =document.createElement("span");
// let spantext =document.createTextNode("1");
// let p=document.createElement("p");
// let ptext =document.createTextNode("product");
// large.className ="large";
// container.className ="container";
// content.className="content";
// document.body.appendChild(content);
// large.appendChild(container);
// container.appendChild(content);
// content.appendChild(span);
// span.appendChild(spantext);
// content.appendChild(p);
// // p.appendChild(ptext);
// for(i =1;i<=15;i++){
//     let myproduct =document.createElement("div");
//     content.appendChild(myproduct);
//     let span =document.createElement("span");
//     span.textContent=i;
//     myproduct.prepend(span);
//     myproduct.append("product")
// myproduct.style.cssText ="background-color:white;width:100%;height:100%;text-align:center";
// span.style.cssText="display: block;margin-bottom:10px;margin-top:10px;text-align:center";


// }
// content.style.cssText ="background-color:#eee;width:calc(100vw - 100px);height:100vh;padding-left:135px;padding-right:135px;margin-left:auto;margin-right:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px";


// let x =prompt("are you sure?");
// console.log(x);
// let div =document.querySelector("div");

// let counter =setInterval(rate,1000);
// function rate(){
//     div.innerHTML -=1;
//     if (div.innerHTML==="0"){
//         clearInterval(counter);
//         div.style.display ="none";
//         setInterval(dar,1000);

//     }
// }
// function dar(){
//     document.write("i love hager &#128525; <br>")
// }
// let lis =document.querySelectorAll("ul li");
// let div =document.querySelector(".exper");
// if(window.localStorage.getItem("color")){
//     div.style.backgroundColor  =window.localStorage.getItem("color");
//     lis.forEach((ele)=>{
//         ele.classList.remove("active");

//      });
//      document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")

// }

// lis.forEach((ele)=>{
//     ele.addEventListener("click",(e)=>{
//         // console.log(ele.dataset.color)
//         lis.forEach((ele)=>{
//            ele.classList.remove("active");

//         })
//         ele.classList.add("active");
//         window.localStorage.setItem("color",ele.dataset.color);
//         div.style.backgroundColor  =ele.dataset.color;


//     })

// })
// let form =document.querySelector("form")
// let input=document.querySelector(".input");
// let ul = document.querySelector("ul");
// let button = document.querySelector("button");
// let items =JSON.parse(localStorage.getItem('tasks'))?JSON.parse(localStorage.getItem('tasks')):[];
// let data =JSON.parse(localStorage.getItem('tasks'))?JSON.parse(localStorage.getItem('tasks')):[];



// let crateli = (text)=>{
//     let li =document.createElement('li');
//     li.textContent=text;
//     ul.appendChild(li);

// }
// data.map((ele)=>{
//     crateli(ele);
// })




// form.addEventListener("submit",function(e){
// e.preventDefault();
// crateli(input.value);
// items.push(input.value)
// window.localStorage.setItem("tasks",JSON.stringify(items));
// input.value ='';
// });

// button.addEventListener("click",function(){
//    localStorage.clear();
//    ul.innerHTML='';
//     });
    
    let form =document.querySelector("form");
    let input =document.querySelector(".input");
    let pass =document.querySelector(".pass");
    let items =[];
    let item =[];
  
    form.addEventListener("submit",function(e){
        e.preventDefault();
       item.push(pass.value);
       items.push(input.value);
        window.localStorage.setItem("tas",JSON.stringify(items));
        window.localStorage.setItem("kas",JSON.stringify(item));
    })
