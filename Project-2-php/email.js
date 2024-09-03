let xhr=new XMLHttpRequest();

// create a function that sends the request to the server
function execute(){
// console.log('working')
// console.log(xhr)
if(xhr.readyState==0 || xhr.readyState==4){
    let email= document.getElementById('emaildata').value;
    // define the request
    let method="GET"
    let url =`/email.php?emaildata=${email}`;
    xhr.open(method,url,true);
    // when the server get the response then show this in our site
    xhr.onreadystatechange=handleServerResponse;
    xhr.send(null)
}

}

function handleServerResponse(){
    if(xhr.readyState==4 && xhr.status==200){
        console.log(xhr)
        let xmlResp=xhr.responseXML
        console.log(xmlResp)
        let xmldocElement=xmlResp.documentElement;
        console.log(xmldocElement)

        let data=xmldocElement.innerHTML;
        document.getElementById("output").innerHTML=data;
        setTimeout("execute()",1000)
    }
}


execute()