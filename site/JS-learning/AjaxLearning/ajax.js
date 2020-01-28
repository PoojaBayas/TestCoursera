(function(global){
    
    //setting a namespace so that we can attech only things that we want to expose to world
    xhr={};

    function getRequestObject()
    {
        if(window.XMLHttpRequest){
            return(new XMLHttpRequest());
        }
        else if(window.ActiveXObject){
            return(new ActiveXObject());

        }
        else{
            console.log("some error");
        }
    }

    xhr.sendGetRequest = function(requestUrl, responseHandler){
        var request=getRequestObject();
        request.onreadystatechange= function(){
            handleresponse(request, responseHandler);
        }
       request.open('GET',requestUrl,true);
       request.send();
    }
    function handleresponse(request,responseHandler){
        if((request.readystate==4)&&(request.status==200)){
            responseHandler(request);
        }
    }

    global.$xhr=xhr;

}
)(window);