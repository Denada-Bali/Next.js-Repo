function login(){
    var button = document.getElementById('loginbtn')
    if (button.innerText =='Logout') {
        button.innerText = 'Login'
    }else{
        button.innerText ='Logout'
        button.style.backgroundColor ='blue';
        button.style.color = 'greem';
        button.style.border = 'none';
        button.style.padding = '10px 20px';
        button.style.borderRadius ='8px';
    }
}



function changeTheme() {
    const body = document.querySelector('body');
    const button = document.querySelector('button');

    if (body.classList.contains('dark')) {
        button.innerText = 'Go to Dark Mode';
        body.classList.remove('dark')
    } else {
        button.innerText = 'Go to Light Mode';
        body.classList.add('dark')
    }
}
