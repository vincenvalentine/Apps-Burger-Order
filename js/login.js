let username = document.getElementById('username');
let password = document.getElementById('password');
let button = document.getElementById('btn');



function btn (){
    button.addEventListener('click', function(){
        let ArrayUserLoginList = window.localStorage.getItem('UserLoginList');
        ArrayUserLoginList = JSON.parse(ArrayUserLoginList);

        for (let i = 0 ; i < ArrayUserLoginList.length; i++){
            
            if((ArrayUserLoginList[i].name === username.value) && (ArrayUserLoginList[i].password === password.value)){
                window.location.pathname = '/';
                break;
            }else{
                console.log('yes');

            }
            
        }  
        alert ('password & username salah');  
    })

   
}

btn();