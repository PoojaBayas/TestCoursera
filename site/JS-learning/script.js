function sayHello()
{    var name =document.getElementById("name").value; 
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