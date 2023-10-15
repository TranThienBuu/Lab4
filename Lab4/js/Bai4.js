const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", function() {
    const textA = document.getElementById("textA").value;
    const textB = document.getElementById("textB").value;
    const count = countOccurrences(textA, textB);
    document.getElementById("result").textContent = `Số lần xuất hiện của "${textB}" trong đoạn văn (A): ${count}`;
});

function countOccurrences(textA, textB) {
    let count = 0;
    let index = 0;
    while (index !== -1) {
        index = textA.indexOf(textB, index);
        if (index !== -1) {
            count++;
            index += textB.length;
        }
    }
    return count;
}