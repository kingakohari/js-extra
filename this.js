/* 'use strict' */  // strict mode
console.log('1' + this); // Window object

(function() {
    /* 'use strict' */ //emiatt undefiend
    /* console.dir(this) */
})()

const user = {
    name: 'Enikő',
    getName: function() {
        console.log('2' + this);
        (function() { 
            /* console.dir(this)  //globális objektum
            var x = 'alma'
            console.log(window.x); */ // nem jelent meg böngésző console-ban
        })()
        
        const af = () => {
            console.log('3' + this)
        }
        af()
    }
}

const ugn = user.getName

ugn()

window.addEventListener("load", function() {
    console.log(this);  // this az event.target-et figyeli
})