"use strict";

function calculate() {
    total = 100;  // ❌ no error, but wrong behavior
}

calculate();
console.log(total);  // 😱 Works, but shouldn't!
