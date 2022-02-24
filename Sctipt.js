function findOppositeNumber() {
    let n = document.getElementById("nNumber").value;
    let inputNumber = document.getElementById("inputNumber").value;
    if (n >= 4 && n <= 20) {
        if (n % 2 == 0) {
            if (inputNumber >= 0 && inputNumber < n) {
                let j = n / 2;
                if (inputNumber == j) {
                    alert("số cần tìm là 0");
                } else if (inputNumber == 0) {
                    alert("số cần tìm là " + j);
                } else {
                    let i = 1;
                    let k = j + 1;
                    if (inputNumber > 0 && inputNumber < j) {
                        while (i < j) {
                            if (i == inputNumber) {
                                break;
                            }
                            i++;
                            k++;
                        }
                        alert("số cần tìm là " + k);
                    } else if (inputNumber > j && inputNumber < n) {
                        while (k < n) {
                            if (k == inputNumber) {
                                break;
                            }
                            i++;
                            k++;
                        }
                        alert("số cần tìm là " + i);
                    }
                }
            } else {
                alert("inputNumber phải trong khoảng từ 0 đến " + (n - 1));
            }
        } else {
            alert("n phải là số chẵn");
        }
    } else {
        alert("n phải nằm trong khoảng từ 4 đến 20!");
    }
}

function printString() {
    let s1 = document.getElementById("s1").value;
    let s2 = document.getElementById("s2").value;
    let min = s1.length >= s2.length ? s2.length : s1.length;
    let max = s1.length >= s2.length ? s1.length : s2.length;
    let merge2String = new Array(max - 1);
    var i = 0;
    while (i < max) {
        if (i < min) {
            merge2String[i] = s1[i] + s2[i];
        } else if (s1.length > s2.length) {
            merge2String[i] = s1[i];
        } else if (s1.length < s2.length) {
            merge2String[i] = s2[i];
        }
        i++;
    }
    let chuoi = merge2String.join("");
    alert(chuoi);
}


var clicks = 1;

function count() {
    let predictedNumber = document.getElementById("predictedNumber").value;
    if (predictedNumber == 9) {
        document.getElementById("win").style.display = "inline-block";
    } else if (clicks >= 3) {
        document.getElementById("loss").style.display = "inline-block";
    }
    clicks += 1;
}