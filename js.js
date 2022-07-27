var check = function() {
    if (document.getElementById('user_password').value ==
      document.getElementById('user_password_conf').value) {


      document.getElementById('message').style.color = '';
      document.getElementById('message').innerHTML = '';

    } else {

      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'your passwords do not match';
    }

  }