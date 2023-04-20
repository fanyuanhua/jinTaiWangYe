function animate(obj, target, callback) {
    // console.log(callback); callback = function（）0调用的
    //先清除以前的定时器，只保留当前的一个定时器执行

    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值写到定时器的里面
        //把我们步长值改为整数不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画本质是停止定时器
            clearInterval(obj.timer);//回调函数写到定时器结束里面
            if (callback) {
                //调用函数
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
