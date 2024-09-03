// About guvi get method
let txtBtn = document.getElementById("text");

txtBtn.addEventListener("click", () => {
  //    create an ajax request

  let url = "./contexts/guvi.txt";
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.text();
      } else {
        throw new Error("error");
      }
    })
    .then((text) => {
      showGuviText(text);
    });

  //   to display the data in dom
  let showGuviText = (data) => {
    let messagetext = `<p>${data}</p>`;
    document.getElementById("textData").innerHTML = messagetext;
  };
});

// Json guvi get method
let jsonText = document.getElementById("jsonText");

jsonText.addEventListener("click", () => {
  let url = "./contexts/guvi.json";
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      } else {
        throw new Error("error");
      }
    })
    .then((text) => {
      showJsonText(text);
    });

  //   to display the data in dom for json
  let showJsonText = (data) => {
    let messagetext = `<p>${data.name} ${data.Since} ${data.located} </p>`;
    document.getElementById("jsonData").innerHTML = messagetext;
  };
});

// API github by get method
let apiBtn = document.getElementById("apiBtn");

apiBtn.addEventListener("click", () => {
  //    create an ajax request

  let url = "https://api.github.com/users";

  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      } else {
        throw new Error("error");
      }
    })
    .then((text) => {
      showAPIText(text);
    });

  //   to display the data in dom for json
  let showAPIText = (data) => {
    let messagetext = `<p>${data[5].type} ${data[5].login} ${data[5].site_admin} </p>`;
    document.getElementById("apiData").innerHTML = messagetext;
  };
});
