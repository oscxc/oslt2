// oslt2.js
// author：七八个星天怪
// LICENSE：MIT

'use strict';
(function (f) {
    if (typeof module === "object" && typeof module.exports === "object"){
        module.exports = f
    }
    else{
        window.oslt2 = f
    }
})(function (el,bxy,exy,obj,prop,begin,end) {

    var dx = exy[0] - bxy[0],
        dy = exy[1] - bxy[1];

    this.el = el;
    this.begin = begin;
    this.end = end;
    // running | stop
    this.state = 'stop'

    var tmp, l, t, runCallback, _this = this

    function change() {
        if(_this.state === 'running'){
            var v = obj[prop]
            if(v <= begin){
                l = bxy[0]
                t = bxy[1]
            }
            else if(v <= end){
                tmp = (v - begin)/(end - begin)
                l = tmp * dx + bxy[0]
                t = tmp * dy + bxy[1]
            }
            else{
                l = exy[0]
                t = exy[1]
            }
            el.style.left = l + 'px'
            el.style.top = t + 'px'
            runCallback && runCallback([l,t],v)
            requestAnimationFrame(change)
        }
    }
    this.run = function (cb) {
        this.state = 'running';
        if(cb && typeof cb === 'function'){
            runCallback = cb
        }
        requestAnimationFrame(change)
    }
    this.stop = function () {
        this.state = 'stop';
    }
})
