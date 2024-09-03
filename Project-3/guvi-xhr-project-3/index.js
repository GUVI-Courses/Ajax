function handleSubmit(e){

    // to avoid refresh
    e.preventDefault();
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value
    
    // create xhr object
    let xhr= new XMLHttpRequest();
    xhr.open("GET",'./privatedoc/info.html',true,username,password);
    xhr.onload=function(){
        if(this.status==200){
           console.log(xhr)
            document.getElementById('output').innerHTML=this.responseText
        }
        else{
            document.getElementById('output').innerHTML="Http error "+this.status
            document.getElementById('username').value=''
            document.getElementById('password').value=''

        }
    }
    xhr.send()
}