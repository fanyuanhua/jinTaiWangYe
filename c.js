window.addEventListener('load', function () {
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
    // 3．动态生成小圆圈有几张图片，我就生成几个小圆圈
    var gg = document.querySelector('.gg');
    // var ol = document.querySelector(' .dian ');
    // var focus = document.querySelector(' .hh ');
    // var focuss = document.querySelectorAll(' .hh ');
    var zzb = document.querySelector('.zzb');
    // var focusWidth = focus.offsetWidth;
    var zza = document.querySelector('.zza');
    // var h = document.querySelector('.ke');
    // for (var j = 0; j < 3; j++) {

    
    // console.log(kl);
    gg.addEventListener('mouseenter', function () {
        // console.log(h);
        clearInterval(timer);
        timer = null;
    });
    gg.addEventListener('mouseleave', function () {
        // console.log(kl);
        timer = setInterval(function () {
            //手动调用点击事件
            zzb.click();
        }, 2000);
    });
    zzb.addEventListener('mouseenter', function () {
        // console.log(h);
        clearInterval(timer);
        timer = null;
    });
    zzb.addEventListener('mouseleave', function () {
        // console.log(kl);
        timer = setInterval(function () {
            //手动调用点击事件
            zzb.click();
        }, 2000);
    });
    zza.addEventListener('mouseenter', function () {
        // console.log(h);
        clearInterval(timer);
        timer = null;
    });
    zza.addEventListener('mouseleave', function () {
        // console.log(kl);
        timer = setInterval(function () {
            //手动调用点击事件
            zzb.click();
        }, 2000);
    });
    // }
    //   {
    //     // for (let i = 0; i < uu.children.length; i++) {
    //     //     // console.log(i);
    //     //     //创建一个小li
    //     //     var index;
    //     //     var div = document.createElement('div');
    //     //     div.setAttribute('index', i);
    //     //     // div.index=i;
    //     //     // console.log(index);

    //     //     //把小li插入到ol里面
    //     //     ol.appendChild(div);
    //     //     div.addEventListener('click', function () {
    //     //         //干掉所有人把所有的小li清除current 类名
    //     //         for (let i = 0; i < ol.children.length; i++) {
    //     //             ol.children[i].className = '';
    //     //             // console.log(i);
    //     //         }
    //     //         //留下我自己当前的小1i设置current类名
    //     //         this.className = 'yi';
    //     //         // 5.点击小圆圈，移动图片当然移动的是ul
    //     //         // ul的移动距离小圆圈的索引号乘以图片的宽度注意是负值
    //     //         //当我们点击了某个小li就拿到当前小li的索引号
    //     //         var index = this.getAttribute('index');
    //     //         num = circle = index;
    //     //         // console.log(focusWidth);
    //     //         // console.log(index);
    //     //         animate(uu, - index * focusWidth);
    //     //     })
    //     // }
    //     // //把ol里面的第一个小li设置类名为current
    //     // ol.children[0].className = 'yi';
    //     // // 6.克隆第一张图片(li)放到ul最后面
    //     // var first = uu.children[0].cloneNode(true);
    //     // uu.appendChild(first);
    //   }
    var flag = true;
    var num = 0;
    // var circle = 0;
    // console.log(arrow_r);

    zzb.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //如果走到了最后复制的一张图片，此时我们的ul要快速复原left改为0
            if (num == 3) {
                gg.style.left = 0;
                num = 0;
            }
            num++;
            // console.log(num);
            animate(gg, -num*380,function(){
                flag = true;
            });
            
            // circle++;
            // if (circle == ol.children.length) {
            //     circle = 0;
            // }
            // circleChange();
        }


    });

    zza.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //如果走到了最后复制的一张图片，此时我们的ul要快速复原left改为0

            // console.log(tl);
            if (num == 0) {
                num = 3;
                gg.style.left = -1140 + 'px';
            }
            num--;
            // console.log(num);
            animate(gg, -num*380,function(){
                flag = true;
            });
            
          
        }

    });
    // function circleChange() {
    //     //先清除其余小圆圈的current类名
    //     for (var i = 0; i < ol.children.length; i++) {
    //         ol.children[i].className = '';
    //     }
    //     //留下当前的小圆圈的current类名
    //     ol.children[circle].className = 'yi';

    // }
    // // 10. 自动播放轮播图
    var timer = setInterval(function () {
        //手动调用点击事件
        zzb.click();
    }, 2000);


})