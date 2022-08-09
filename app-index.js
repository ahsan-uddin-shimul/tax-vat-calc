var enterInput = document.getElementById('password');

enterInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('button-submit').click();
    }
})


function myFunction(){
    const userId = document.querySelector('#user-id').value;
    const password = document.querySelector('#password').value;
    console.log(userId);

    if(userId == 'ahsan' && password == 'ahs123'){
        window.location.replace("main.html");
    }
    else if(userId == 'user' && password == 'user123'){
        window.location.replace("main.html");
    }
    else {
        window.alert('Not Funny, please input your credential correctly!');
    }
}