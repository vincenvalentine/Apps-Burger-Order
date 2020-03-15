let input = document.querySelectorAll('input');
let button = document.getElementById('btn');

btn.addEventListener('click', function(){
    let ArrayUserLoginList = window.localStorage.getItem('UserLoginList');
    let name = input[0].value;
    let sex = input[1].value;
    let address = input[2].value;
    let phone = input[3].value;
    let Email = input[4].value;
    let password = input[5].value;

    if (ArrayUserLoginList == null || ArrayUserLoginList == '') {

        let newUserLoginList = [];
        let IdOrder = 0;

        UserListObj = {
            'name': name,
            'sex': sex,
            'address': address,
            'phone': phone,
            'email': Email,
            'password': password,
            'id' : IdOrder
        }

        newUserLoginList.push(UserListObj);

        window.localStorage.setItem('UserLoginList', JSON.stringify(newUserLoginList));
    } else {

        let CurrentUserLoginList = JSON.parse(ArrayUserLoginList);
        let IdOrder = CurrentUserLoginList[length].id + 1;
     
        UserListObj = {
            'name': name,
            'sex': sex,
            'address': address,
            'phone': phone,
            'email': Email,
            'password': password,
            'id' : IdOrder
        }

        CurrentUserLoginList.push(UserListObj);

        window.localStorage.setItem('UserLoginList', JSON.stringify(CurrentUserLoginList));
    }
    window.location.pathname = '/login.html';    

});