// About guvi get method
let txtBtn = document.getElementById("text");

txtBtn.addEventListener("click", () => {
  //    create an ajax request
  let xhr = new XMLHttpRequest();

  //   console.log(xhr)
  let method = "GET";
  let url = "./contexts/guvi.txt";
  xhr.open(method, url);

  //   send the request
  xhr.send()
  xhr.onload = () => {
    if (xhr.status === 200) {
    //   console.log(xhr);
    //   console.log(xhr.responseText);
    let data=xhr.responseText;
    showGuviText(data)
    }
  };


//   to display the data in dom
let showGuviText=(data)=>{
    let messagetext=`<p>${data}</p>`
    document.getElementById('textData').innerHTML=messagetext;
}
});


// Json guvi get method
let jsonText = document.getElementById("jsonText");

jsonText.addEventListener("click", () => {
  //    create an ajax request
  let xhr = new XMLHttpRequest();

  //   console.log(xhr)
  let method = "GET";
  let url = "./contexts/guvi.json";
  xhr.open(method, url);

  //   send the request
  xhr.send()

//   response process
  xhr.onload = () => {
    if (xhr.status === 200) {
     let jsontxt= JSON.parse(xhr.responseText)
     console.log(jsontxt)
     showJsonText(jsontxt)
    }
  };


//   to display the data in dom for json 
let showJsonText=(data)=>{
    let messagetext=`<p>${data.name} ${data.Since} ${data.located} </p>`
    document.getElementById('jsonData').innerHTML=messagetext;
}
});

// API github by get method
let apiBtn = document.getElementById("apiBtn");

apiBtn.addEventListener("click", () => {
  //    create an ajax request
  let xhr = new XMLHttpRequest();

  //   console.log(xhr)
  let method = "GET";
  let url = "https://api.github.com/users";
  xhr.open(method, url);

  //   send the request
  xhr.send()

//   response process
  xhr.onload = () => {
    if (xhr.status === 200) {
        // console.log(xhr)
     let jsontxt= JSON.parse(xhr.responseText)
     console.log(jsontxt)
     showAPIText(jsontxt)
    }
  };


//   to display the data in dom for json 
let showAPIText=(data)=>{
    let messagetext=`<p>${data[5].type} ${data[5].login} ${data[5].site_admin} </p>`
    document.getElementById('apiData').innerHTML=messagetext;
}
});
