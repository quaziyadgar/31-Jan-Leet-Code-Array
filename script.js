var length = document.getElementById('length');
var btn = document.getElementById('submit');
var arr;
var array = document.getElementById('array');
btn.addEventListener('click', generateArray);

function generateArray() {
    array.innerHTML = "";
    console.log(array);
    length = length.value;
    console.log(length);
    for ( var i = 0; i < length; i++) {
        let inp = `<input type="number" id="inp${(i)}" placeholder="Enter ${i} element">`;
        array.innerHTML += inp; 
    }
var btn1 = document.createElement('button');
btn1.innerHTML = "Done";
array.appendChild(btn1);
btn1.addEventListener('click', target);
}

function target() {
    var inp = document.createElement('input');
    inp.type = "number";
    inp.setAttribute('id', 'target');
    inp.setAttribute('placeholder', "Enter target");
    var btn = document.createElement('button');
    btn.innerHTML = "Fetch"
    array.append(inp, btn);
    btn.addEventListener('click', storeArray);
}

function storeArray() {
    arr = new Array(length);
    // console.log(length);
    for ( var i = 0; i < length; i++) {
        let id = "inp"+i;
        // console.log(id);
        var data = document.getElementById(id).value;
        arr[i] = data;
        console.log(arr);
    }
    display();
}

function display() {
    console.log("display");
    let target = document.getElementById('target').value;
    // let a = [];
    for (var i = 0; i < length; i++) {
        var diff = target - arr[i];
        for (var j= 1+i; j<length; j++) {
            if ( arr[j] == diff)
            {
                let res = document.getElementById('result');
                res.innerHTML = "("+i+","+j+")";
                break;
            }
        }
    }
}