let xhr= new XMLHttpRequest();

function execute(){
    if(xhr.readyState===0 || xhr.readyState===4){
        // console.log(document.getElementById("emaildata").value)
        let val=document.getElementById("emaildata").value;
        let url= "http://127.0.0.1:8001/" + val
        let method="GET";
        xhr.open(method,url,true);
        xhr.onreadystatechange=handleServerResponse;
        xhr.send()
    }
    else{
        console.log('Something went wrong')
    }
}

function handleServerResponse(){
    if(xhr.readyState===4){
        if(xhr.status===200){
            document.getElementById("output").innerHTML=xhr.response;
            setTimeout("execute()",1000)
        }
        else{
            console.log("ERRor")
        }
    }
}

execute()