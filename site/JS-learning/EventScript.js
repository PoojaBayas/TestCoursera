document.addEventListener("DOMContentLoaded" ,
function(event){
    function sayHello(event ){
        this.textContent="Said It"; // This is to chhnge the text of button once it's clicked
        console.log(this)//see in console this now pointing to button 
            var name =document.getElementById("name").value; 
        var message="<h2>hello " +name +"!<h2>"; // to interprete this h2 tag we are using innerHtml below
        // document.getElementById("content")//This will select the content div
        // .textContent=message;//it same as <div> Hello name</div
        document.getElementById("content")
        .innerHTML=message;
        if(name==="student")
        {   var title=document   // & here we are storing lecture53 in title var //s   
            .querySelector("#title")// this line is for selcting title   h1 tag //
            .textContent; // These line is for taking a text in h1 tag i.e. Lecture 53//
            title += "& Lovig It!";  //Now here we have stored in title as lecture 53 loving it...//
            document.querySelector("#title") //Query selector is like css selector so we have to use "#"tag for selecting.//
                                             //Instead of id selector you can selct the element like h1 here since u have only 1 h1 in your doc//
                     .textContent  = title;// here we are storing back the new updated title//
        }
    }
    // //Another way to achive the same like onclick 
 document.querySelector("button").onclick= sayHello;
  
 //this below code is from lecture event as argument lecture 55
 document.querySelector("body").addEventListener("mousemove",
 function (event){
    if(event.shiftKey ==true){
         console.log("X:"+ event.clientX);
         console.log("Y:"+ event.clientY);
    }
 }
 );
  
//til this point 
}
);


//Unobstrusive Binding Events (always remember to place the <script>tag in index.html at the end of body  when using these lines)
// document.querySelector("button").addEventListener("click", sayHello);
// document.querySelector("button") // here now we are slecting a button
// .addEventListener("click", sayHello);// add listener will listens the event  and once that trigered then it wil use  function  value in say hello

