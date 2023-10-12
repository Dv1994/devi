var a = Math.random();
        console.log(a);
                
        var generate = () =>{
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var captcha = '';
        for(var i=0;i<5;i++){
            captcha = captcha + a.charAt(
            Math.random() * a.length)
        }
        document.querySelector("#div1").innerHTML = captcha;
        document.querySelector("#div1").style.display = "block";
    }