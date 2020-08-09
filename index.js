function singleNode() {
    //Getting values for each component
    var power = parseInt(document.getElementById("pow1").value);
    var res1 = parseInt(document.getElementById("res1").value);
    var res2 = parseInt(document.getElementById("res2").value);
    var res3 = parseInt(document.getElementById("res3").value);
    var res4 = parseInt(document.getElementById("res4").value);
    var res5 = parseInt(document.getElementById("res5").value);
    

    //Operation
    var sum_loop1 = res1 + res2 ; 
    var sum_loop1A = Math.pow(sum_loop1, -1)  //1 over 300
    var sum_loop2 = res3 + res4 ;    
    var sum_loop2A = Math.pow(sum_loop2, -1); // 1 over 700
    var current =  power / (res1 + res2) ;
    var denom =     sum_loop1A + sum_loop2A + Math.pow(res5,-1) ;      
    var nodeVoltage = current / denom  
    
    
    document.getElementById("result").innerHTML = "The node voltage is " +(nodeVoltage)+ " volts"  ;
   
}
/*
function superNode(){
     //Getting values for each component
    var vn = parseInt(document.getElementById("vn").value);
    var vn1 = parseInt(document.getElementById("vn1").value);
    var capacitor = parseInt(document.getElementById("capacitor").value);
    var inductor = parseInt(document.getElementById("inductor").value);
    var resistor = parseInt(document.getElementById("resistor").value);
    var currentSource = parseInt(document.getElementById("currentSource").value);
    var freq = parseInt(document.getElementById("freq").value);

    //Operation
    var XC = 1 /(2* (Math.PI) * freq * capacitor);
    var XL = 2 * (Math.PI) * freq *inductor ;
    var vnangle = vn1 * (Math.PI)/180;
    var zC = XC * -1  ;
    var zL = XL ;
    var zR = resistor ;
    var ecos = cos(vnangle);
    var gsin = sin(vnangle);
    var e = vn * ecos ;
    var g = vn * gsin ;
    var 






}







V_1 = e + 1j * g;
a = ZC^-1;
b = ZL^-1 + R^-1;


M1 = [1 -1; a b];
M2 = [V_1;Cs ];

A = M1\M2;

V1 = A(1,:);
V2 = A(2,:);

fprintf('the voltage in node 1 is: %s%+sj \n',real(V1),imag(V1)); 
fprintf('the voltage in node 2 is: %d%+dj \n',real(V2),imag(V2)); 



*/
