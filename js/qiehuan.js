class qiehuan {
    tcltc=null;
    mnklc=null;
    constructor(tcltc, mnklc) {
        // console.log(tcltc);
        // console.log(document.querySelector(tcltc));
        this.tcltc = document.querySelector(tcltc).children;
        this.mnklc = document.querySelector(mnklc).children;
        // this.bar=document.querySelector(bar).children;
    }
    tab() {
        // console.log(this.tcltc.length);
        for (let i = 0; i < this.tcltc.length; i++) {
            let that=this;
            this.tcltc[i].onclick = function () {
                for (let j = 0; j < that.tcltc.length; j++) {
                    that.tcltc[j].className = '';
                    that.mnklc[j].style.display = 'none';
                    // that.mnklc[j].style.opacity = '0';
                    // opacity:0;
                }
                that.tcltc[i].className = 'tclta';
                that.mnklc[i].style.display = 'block';
                // that.mnklc[i].style.opacity = '1';
            }
        }

    }
}
