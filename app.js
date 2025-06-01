var tables = prompt("How much tables you want to print");

for (var i = 1; i <= tables; i++) {
    document.write("<br>" + "Table Nnumber" + ":" + i + "<br>");
    
    for (var j = 1; j <= 10; j++) {
        document.write(i + "x" + j + "=" + i*j + "<br>");
    }
}