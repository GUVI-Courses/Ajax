var errortext="";

$(function () {
  $("#btnSubmit").prop("disabled", true);
  $("#email").prop("disabled", true);
  $("#password").prop("disabled", true);

  $(document).on("keyup", "#username", function () {
    Validate();
  });
  $(document).on("keyup", "#email", function () {
    Validate();
  });
  $(document).on("keyup", "#password", function () {
    Validate();
  });
});

function Validate(e) {
  // Basic username validation (you can add more rules)
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (
    !validateUsername(username) ||
    !validateEmail(email) ||
    !validatePassword(password)
  ) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      errortext = xhr.responseText;
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Display the server response
          document.getElementById("result").innerHTML = xhr.responseText;
          clearForm();
        }
      }
    };
    xhr.open("POST", "/validate-form", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ username, email, password }));
  }

  // Open a POST request to the server endpoint
  
}

function validateUsername(username) {
  // Basic username validation (you can add more rules)
  if (username.length <= 3) {
    document.getElementById("usrerror").innerText = errortext;
    $("#username").addClass(" is-invalid");
    return false;
  } else {
    $("#username").removeClass("is-invalid");
    $("#username").addClass("is-valid");
    $("#email").prop("disabled", false);
    return true;
  }
}

function validateEmail(email) {
  // Basic email validation (you can add more rules)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    $("#email").addClass(" is-invalid");
    document.getElementById("emlerror").innerText = errortext;
    return false;
  } else {
    $("#email").removeClass("is-invalid");
    $("#email").addClass("is-valid");
    document.getElementById("passerror").innerText=''
    $("#password").prop("disabled", false);
    return true;
  }
}

function validatePassword(password) {
  // Basic username validation (you can add more rules)
  if (password.length < 5) {
    document.getElementById("passerror").innerText = errortext;
    $("#password").addClass(" is-invalid");
    return false;
  } else {
    $("#password").removeClass("is-invalid");
    $("#password").addClass("is-valid");
    document.getElementById("passerror").innerText=''
    return true;
  }
}

function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  $("#username").removeClass("is-invalid");
  $("#email").removeClass("is-invalid");
  $("#password").removeClass("is-invalid");
  $("#username").removeClass("is-valid");
  $("#email").removeClass("is-valid");
  $("#password").removeClass("is-valid");
}
