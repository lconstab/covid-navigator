document.title = nodeListBrowserTitle;

function getList() {
    var ta = document.getElementById("nodelist");
    var count = 0;
    ta.innerHTML = '';
    var values = new Array();
    for (var i in json) {
        values.push(i);
        count++;
    }
    values.sort(charOrdA);
    for (var v in values) {
        ta.innerHTML += values[v] + '\r\n';
    }
    document.getElementById("count").innerHTML = 'Node Count: ' + count;
}

function charOrdA(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a>b) return 1;
    if (a <b) return -1;
    return 0;
}