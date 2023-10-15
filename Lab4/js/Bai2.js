document.getElementById("solveButton").addEventListener("click", function() {

    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);


    const delta = b * b - 4 * a * c;


    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("result").textContent = "Phương trình có hai nghiệm: x1 = " + x1 + ", x2 = " + x2;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        document.getElementById("result").textContent = "Phương trình có nghiệm kép: x = " + x;
    } else {
        document.getElementById("result").textContent = "Phương trình không có nghiệm thực.";
    }
});