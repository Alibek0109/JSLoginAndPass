let user
let a = userLogin
let b = userPassword

function userAccount(a, b) {
    do {
        userLogin();
        userPassword();
    } while (userLogin != userLogin && userPassword != userPassword) {
        alert('Вы успешно зашли в аккаунт')
    }
}

function userLogin(a) {
    do {
        user = prompt('введите логин')
    } while (user != 'myLogin') {
        console.log(user);
    }
}


function userPassword(b) {
    do {
        user = prompt('введите пароль')
    } while (user != 'myPass') {
        console.log(user);
    }
}


userAccount()