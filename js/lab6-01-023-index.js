
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
    var sel = document.getElementById("mysel");
    var mysel = sel.value;
    if(mysel == 'second' ){
    if(inputVal == ''){
        document.getElementById("selbook").style.display = "none";
    }
    if(inputVal == '夏'){
        selBook.innerHTML = '';
        selBook.innerHTML = '夏目漱石';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '夏目'){
        selBook.innerHTML = '';
        selBook.innerHTML = '夏目漱石';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '夏目漱'){
        selBook.innerHTML = '';
        selBook.innerHTML = '夏目漱石';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '夏目漱石'){
        selBook.innerHTML = '';
        selBook.innerHTML = '夏目漱石';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '东'){
        selBook.innerHTML = '';
        selBook.innerHTML = '东野圭吾';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '东野'){
        selBook.innerHTML = '';
        selBook.innerHTML = '东野圭吾';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '东野圭'){
        selBook.innerHTML = '';
        selBook.innerHTML = '东野圭吾';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '东野圭吾'){
        selBook.innerHTML = '';
        selBook.innerHTML = '东野圭吾';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '安'){
        selBook.innerHTML = '';
        selBook.innerHTML = '安德鲁・米勒';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '安德'){
        selBook.innerHTML = '';
        selBook.innerHTML = '安德鲁・米勒';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '安德鲁'){
        selBook.innerHTML = '';
        selBook.innerHTML = '从安德鲁・米勒';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '安德鲁・'){
        selBook.innerHTML = '';
        selBook.innerHTML = '安德鲁・米勒';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '安德鲁・米'){
        selBook.innerHTML = '';
        selBook.innerHTML = '安德鲁・米勒';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '安德鲁・米勒'){
        selBook.innerHTML = '';
        selBook.innerHTML = '安德鲁・米勒';
        document.getElementById("selbook").style.display = "block";
    }
    }
    
    else if(mysel == 'first'){
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
    }

    if(mysel == 'third'){
    if(inputVal == '小'){
        selBook.innerHTML = '';
        selBook.innerHTML = '小说';
        document.getElementById("selbook").style.display = "block";
    }
    if(inputVal == '小说'){
        selBook.innerHTML = '';
        selBook.innerHTML = '小说';
        document.getElementById("selbook").style.display = "block";
    }    
    }
});

//构造函数创建对象
function Book(name, author, price, score) {
    this.bookName = name;   
    this.author = author;   
    this.price = price;     
    this.score = score;     
}
const book1 = new Book("我是猫", "夏目漱石", 59, 9.5);
const book2 = new Book("解忧杂货铺", "东野圭吾", 49, 9.6);
const book3 = new Book("从月亮来的男孩", "安德鲁・米勒", 49, 9.2);
//字面量创建对象
const userInfo = {
    username: "",       
    password: "",       
    isLogin: false,     // 登录状态
    cart: []            // 购物车
};

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

user.addEventListener("input", function () {
    var userr = document.getElementById("userr");
    var use = this.value;
    document.getElementById("userr").style.display = "block";
    if( use == ''){
        userr.innerHTML = '';
        document.getElementById("userr").style.display = "none";
    }
    else if( /^1[3-9]\d{9}$/.test(use) ||  /^\w+@\w+\.\w+$/.test(use) ){
        userr.innerHTML = '';
        document.getElementById("userr").style.display = "none";
    }
    else{
        userr.innerHTML = '';
        userr.innerHTML = '用户名必须是手机号或邮箱！';
    }

});
