//bài tập 1
document.getElementById("btnBang").onclick=function(){
    var number1 = document.getElementById("tich1").value
    console.log(number1);

    var number2 = document.getElementById("tich2").value
    console.log(number2);

    number1= parseInt(number1);
    number2 =100.000;
    var tich = number1*number2;
    var kqTich="Tiền lương nhân viên là :"+tich;
    console.log(kqTich);
    document.getElementById("thongbao").innerHTML = kqTich;
    document.getElementById("thongbao").classList.add("thongbao")
}




//bài tập 2
var a=1
var b=2
var c=3
var d=4
var e=5
document.getElementById("btxBang").onclick=function(){
    var so1=document.getElementById("bxtA").value;
    // console.log(so1);

    var so2=document.getElementById("bxtB").value;
    // console.log(so2);

    var so3=document.getElementById("bxtC").value;
    // console.log(so3);

    var so4=document.getElementById("bxtD").value;
    // console.log(so4);

    var so5=document.getElementById("bxtE").value;
    // console.log(so5);

    so1=parseInt(so1);
    so2=parseInt(so2);
    so3=parseInt(so3);
    so4=parseInt(so4);
    so5=parseInt(so5);

    var trungbinh= (so1+so2+so3+so4+so5)/5
    var kqTrungbinh="Trung bình tổng 5 số là:"+trungbinh;
    document.getElementById("trungbinh").innerHTML=kqTrungbinh;
    document.getElementById("trungbinh").classList.add("trungbinh")
}








//bài tập3
document.getElementById("bntdoitien").onclick=function(){
    var dola=document.getElementById("btnA").value
    console.log(dola);

    var vnd=document.getElementById("btnB").value
    console.log(vnd);

    dola=parseInt(dola);
    vnd=23.500;
    var tich=dola*vnd;
    var kqquydoi="Số tiền quy đổi là:"+tich;
    console.log(kqquydoi);

    document.getElementById("doitien").innerHTML=kqquydoi;
    document.getElementById("doitien").classList.add("doitien")
}










//bài tập 4
document.getElementById("dt").onclick=function(){
    var cd=document.getElementById("dai").value
    console.log(cd);

    var cr=document.getElementById("rong").value
    console.log(cr);

    cd=parseInt(cd);
    cr=parseInt(cr);

    var dientich=cd*cr;
    var dientichhcn="Diện tích hcn là:"+dientich;
    console.log(dientichhcn);

    document.getElementById("hcn").innerHTML=dientichhcn;
    document.getElementById("hcn").classList.add("hcn")

}


document.getElementById("dientich").onclick=function(){
    var cd1=document.getElementById("dai1").value
    console.log(cd1);

    var cr1=document.getElementById("rong1").value
    console.log(cr1);

    cd1=parseInt (cd1);
    cr1=parseInt (cr1);
    var cv= (cd1+cr1)/2;
    var chuvihcn="Chu vi hcn là:"+cv;
    console.log(chuvihcn);

    document.getElementById("chuvi").innerHTML=chuvihcn;
    document.getElementById("chuvi").classList.add("chuvi")
}







//bài tập 5
var n=15
document.getElementById("haikiso").onclick=function(){
    var bt1=document.getElementById("btx1").value;
    bt1=parseInt(bt1);
    var hangchuc = Math.floor(n/10);
    var hangdv =Math.floor(n%10);
    var tongKiso = hangchuc+hangdv;
    var tonghaikiso="tổng hai kí số là:"+tongKiso;
    console.log(tonghaikiso);

    document.getElementById("kiso").innerHTML=tonghaikiso;
    document.getElementById("kiso").classList.add("kiso")
}