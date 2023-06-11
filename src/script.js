let cont=1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    proxima();
}, 5000)

function proxima(){
    cont++;
    if(cont>4){
        cont = 1;
    }

    document.getElementById("radio"+cont). checked = true;

}