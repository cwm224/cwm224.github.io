
function reg(){
    let u = user.value;
    let p = pass.value;
    if(!u||!p) return alert("不能为空");
    localStorage.setItem("name",u);
    localStorage.setItem("pass",p);
    alert("注册成功");
}

function login(){
    let u = user.value;
    let p = pass.value;
    let saveUser = localStorage.getItem("name");
    let savePwd = localStorage.getItem("pass");
    if(u===saveUser && p===savePwd){
        alert("登录成功");
    }else{
        alert("账号或密码错误");
    }
}
function hide(){
    document.getElementById("cl2").style.display = "none";
    document.getElementById("login").style.display = "block";
}
findbook.addEventListener('input',function(){
    var selBook = document.getElementById("selbook");
    var inputVal = this.value;
    if(inputVal == ''){
        document.getElementById("selbook").style.display = "none";
    }
    if(inputVal == '我'){
        selBook.innerHTML = '';
        selBook.innerHTML = '我是猫';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '我是'){
        selBook.innerHTML = '';
        selBook.innerHTML = '我是猫';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '我是猫'){
        selBook.innerHTML = '';
        selBook.innerHTML = '我是猫';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '解'){
        selBook.innerHTML = '';
        selBook.innerHTML = '解忧杂货铺';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '解忧'){
        selBook.innerHTML = '';
        selBook.innerHTML = '解忧杂货铺';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '解忧杂'){
        selBook.innerHTML = '';
        selBook.innerHTML = '解忧杂货铺';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '解忧杂货'){
        selBook.innerHTML = '';
        selBook.innerHTML = '解忧杂货铺';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '解忧杂货铺'){
        selBook.innerHTML = '';
        selBook.innerHTML = '解忧杂货铺';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '从'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从月亮来的男孩';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '从月'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从月亮来的男孩';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '从月亮'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从月亮来的男孩';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '从月亮来'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从月亮来的男孩';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '从月亮来的'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从月亮来的男孩';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '从月亮来的男'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从月亮来的男孩';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '从月亮来的男孩'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从月亮来的男孩';
        document.getElementById("selbook").style.display = "block";
    }
});

// 密码强度实时显示
pass.addEventListener("input", function () {
    var passs = document.getElementById("passs");
    var pwd = this.value;
    document.getElementById("passs").style.display = "block";
    if (pwd.length == 0){
        document.getElementById("passs").style.display = "none";
    }
    else if (pwd.length < 6){
        passs.innerHTML = '';
        passs.innerHTML = '弱';
    }
    else if (pwd.length >= 6 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
        passs.innerHTML = '';
        passs.innerHTML = '强';
    } else if (pwd.length >= 6 || /[0-9]/.test(pwd)) {
        passs.innerHTML = '';
        passs.innerHTML = '中';
        document.getElementById("passs").style.display = "block";
    }

});

// 注册：正则验证
function reg() {
    var u = userInput.value;
    var p = passInput.value;

    if (!u || !p) {
        alert("请完整填写用户名和密码！");
        return;
    }

    // 正则：手机号 或 邮箱
    var phoneReg = /^1[3-9]\d{9}$/;
    var emailReg = /^\w+@\w+\.\w+$/;

    if (!phoneReg.test(u) && !emailReg.test(u)) {
        alert("用户名必须是手机号或邮箱！");
        return;
    }

    localStorage.setItem("username", u);
    localStorage.setItem("password", p);

    alert("注册成功！");
}
