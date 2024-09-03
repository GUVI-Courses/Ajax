function handleSubmit(e) {
  // to avoid refresh
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // create own base64 token
  let encodedata = window.btoa(username + ":" + password);
  let token = `Basic ${encodedata}`;

  // setup header for api ajax request
  let header = new Headers();
  header.append("Authorization", token);

  let url = "./privatedoc/info.html";

  // implement the request for browser
  let req = new Request(url, {
    method: "GET",
    headers: header,
  });

  console.log(req)

//   use fetch to execute
  fetch(req).then(data=>data.text()).then(message=>document.getElementById('output').innerHTML=message).catch(err=>{
    console.log(err)
  })
}
