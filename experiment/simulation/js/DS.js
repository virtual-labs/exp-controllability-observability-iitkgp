


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
/* document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];
 */
 location.reload();
//document.getElementById('0.3fr').style.display = "none";



}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];

//////////////////////
function system(){

            document.getElementById('tfbody').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var M = document.getElementById('M1').value;			
			var m = document.getElementById('m1').value;
			var b = document.getElementById('bc').value;
            var l = document.getElementById('l1').value;
			var I = document.getElementById('I1').value;
						
	        //var T = document.getElementById('Ts').value;
						
			var g=9.8;
			
			var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
		    var a22=math.divide(math.round(math.multiply(math.divide(-math.multiply(math.add(I,math.multiply(m,l,l)),b),den),1000)),1000);
			
			var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b2=math.divide(math.round(math.multiply(math.divide(math.add(I,math.multiply(m,l,l)),den),1000)),1000);;
			
			var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			var a11=a13=a14=a21=a24=a31=a32=a33=a41=a44=b1=b3=0;
			var a12=a34=1;
			
			
			console.log(den);
			
			console.log(a22);
			console.log(a23);
			console.log(b2);
			
			console.log(a42);
			console.log(a43);
			console.log(b4);
			
			document.getElementById('a_22').value = a22;
	        document.getElementById('a_23').value = a23;
	        document.getElementById('b_2').value = b2;
			
			document.getElementById('a_42').value = a42;
	        document.getElementById('a_43').value = a43;
	        document.getElementById('b_4').value = b4;
			
			/*
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
            var mC = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);

            // Matrix Multiplication
            var AA = math.multiply(mA, mA);
			var AAA = math.multiply(mA, mA, mA);
			var AB = math.multiply(mA, mB);
			var AAB = math.multiply(AA, mB);
			var AAAB = math.multiply(AAA, mB);
			
			var Qc = math.matrix([mB, AB, AAB, AAAB]);
			
			

            // Result [800, 630, 380]
	        console.log(AA);
			console.log(AAA);
			console.log(AB);
			console.log(AAB);
			console.log(AAAB);
			console.log(Qc);
			console.log(mB[0]);
			*/
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			//outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}

////////////////////

function CNTR(){

	var Cntrl_Test1;
	var Cntrl_Test2;
	
	
	 document.getElementById('tfbody3').style.display = "block"; 
	 
	 
	 
            var M = document.getElementById('M1').value;			
			var m = document.getElementById('m1').value;
			var b = document.getElementById('bc').value;
            var l = document.getElementById('l1').value;
			var I = document.getElementById('I1').value;
						
	        //var T = document.getElementById('Ts').value;
						
			var g=9.8;
			
			var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
		    var a22=math.divide(math.round(math.multiply(math.divide(-math.multiply(math.add(I,math.multiply(m,l,l)),b),den),1000)),1000);
			
			var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b2=math.divide(math.round(math.multiply(math.divide(math.add(I,math.multiply(m,l,l)),den),1000)),1000);;
			
			var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			var a11=a13=a14=a21=a24=a31=a32=a33=a41=a44=b1=b3=c12=c13=c14=c21=c22=c24=0;
			var a12=a34=c11=c23=1;
			
			
			var aa11= a11*a11+a12*a21+a13*a31+a14*a41;
			var aa12= a11*a12+a12*a22+a13*a32+a14*a42;
			var aa13= a11*a13+a12*a23+a13*a33+a14*a43;
			var aa14= a11*a14+a12*a24+a13*a34+a14*a44;
		
			var aa21= a21*a11 +a22*a21 +a23*a31 +a24*a41;
			var aa22= a21*a12 +a22*a22 +a23*a32 +a24*a42;
			var aa23= a21*a13 +a22*a23 +a23*a33 +a24*a43;
			var aa24= a21*a14 +a22*a24 +a23*a34 +a24*a44;
			
			var aa31= a31*a11 +a32*a21 +a33*a31 +a34*a41;
			var aa32= a31*a12 +a32*a22 +a33*a32 +a34*a42;
			var aa33= a31*a13 +a32*a23 +a33*a33 +a34*a43;
			var aa34= a31*a14 +a32*a24 +a33*a34 +a34*a44;
			
			var aa41= a41*a11 +a42*a21 +a43*a31 +a44*a41;
			var aa42= a41*a12 +a42*a22 +a43*a32 +a44*a42;
			var aa43= a41*a13 +a42*a23 +a43*a33 +a44*a43;
			var aa44= a41*a14 +a42*a24 +a43*a34 +a44*a44;
			
			///////////////////////////////////////////
			
			var aaa11= a11*aa11+a12*aa21+a13*aa31+a14*aa41;
			var aaa12= a11*aa12+a12*aa22+a13*aa32+a14*aa42;
			var aaa13= a11*aa13+a12*aa23+a13*aa33+a14*aa43;
			var aaa14= a11*aa14+a12*aa24+a13*aa34+a14*aa44;
		
			var aaa21= a21*aa11 +a22*aa21 +a23*aa31 +a24*aa41;
			var aaa22= a21*aa12 +a22*aa22 +a23*aa32 +a24*aa42;
			var aaa23= a21*aa13 +a22*aa23 +a23*aa33 +a24*aa43;
			var aaa24= a21*aa14 +a22*aa24 +a23*aa34 +a24*aa44;
			
			var aaa31= a31*aa11 +a32*aa21 +a33*aa31 +a34*aa41;
			var aaa32= a31*aa12 +a32*aa22 +a33*aa32 +a34*aa42;
			var aaa33= a31*aa13 +a32*aa23 +a33*aa33 +a34*aa43;
			var aaa34= a31*aa14 +a32*aa24 +a33*aa34 +a34*aa44;
			
			var aaa41= a41*aa11 +a42*aa21 +a43*aa31 +a44*aa41;
			var aaa42= a41*aa12 +a42*aa22 +a43*aa32 +a44*aa42;
			var aaa43= a41*aa13 +a42*aa23 +a43*aa33 +a44*aa43;
			var aaa44= a41*aa14 +a42*aa24 +a43*aa34 +a44*aa44;
			
			//////////////////////////////////////////////
			
			var ab1= b1*a11 +b2*a12 +b3*a13 +b4*a14;
			var ab2= b1*a21 +b2*a22 +b3*a23 +b4*a24;
			var ab3= b1*a31 +b2*a32 +b3*a33 +b4*a34;
			var ab4= b1*a41 +b2*a42 +b3*a43 +b4*a44;
			
			////////////////////////////////////////////////
			
			var aab1= b1*aa11 +b2*aa12 +b3*aa13 +b4*aa14;
			var aab2= b1*aa21 +b2*aa22 +b3*aa23 +b4*aa24;
			var aab3= b1*aa31 +b2*aa32 +b3*aa33 +b4*aa34;
			var aab4= b1*aa41 +b2*aa42 +b3*aa43 +b4*aa44;
			
			/////////////////////////////////////////////
			
			var aaab1= b1*aaa11 +b2*aaa12 +b3*aaa13 +b4*aaa14;
			var aaab2= b1*aaa21 +b2*aaa22 +b3*aaa23 +b4*aaa24;
			var aaab3= b1*aaa31 +b2*aaa32 +b3*aaa33 +b4*aaa34;
			var aaab4= b1*aaa41 +b2*aaa42 +b3*aaa43 +b4*aaa44;
			
			//////////////////////////////////////////////
			var B= math.matrix([b1, b2, b3, b4]);
			var AB= math.matrix([ab1,ab2, ab3, ab4]);
			var AAB= math.matrix([aab1, aab2, aab3, aab4]);
			var AAAB= math.matrix([aaab1, aaab2, aaab3, aaab4]);
			
			//var Qc1= math.matrix([[0, 1.818, -0.331, 12.209], [1.818, -0.331, 12.209, -4.433], [0, 4.545, -0.827, 141.873], [4.545, -0.827, 141.873, -31.349]]);
			//var DQc1=math.det(Qc1);
			//console.log(DQc1);
			
			var Qc= math.matrix([[b1, ab1, aab1, aaab1],[b2, ab2, aab2, aaab2],[b3, ab3, aab3, aaab3],[b4, ab4, aab4, aaab4]]);
			var DQc=math.det(Qc);
			console.log(DQc);
			//document.getElementById('RQc').value = 4;
			//DQc=0;
			
			if (DQc!=0)
			{  Cntrl_Test1=" Rank of Q<sub>c</sub> = Order of A = n = 4";
			   Cntrl_Test2=" System is Controllable";
			   document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
			   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
			}
			   else 
			   {   Cntrl_Test1=" Rank of Q<sub>c</sub> < Order of A = n = 4";
			       Cntrl_Test2=" System is not Controllable";
			       document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
				   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
			   }
			   
	        	
			
	       		
           
			
			
			
	        
	        
			
			
			
}


function OBSR(){
	var Obsrl_Test1;
	var Obsrl_Test2;
	var Obsrl_Test3;
	var Obsrl_Test4;
	var Obsrl_Test5;
	var Obsrl_Test6;
	
	 document.getElementById('tfbody4').style.display = "block";
	
	        var M = document.getElementById('M1').value;			
			var m = document.getElementById('m1').value;
			var b = document.getElementById('bc').value;
            var l = document.getElementById('l1').value;
			var I = document.getElementById('I1').value;
						
	        //var T = document.getElementById('Ts').value;
						
			var g=9.8;
			
			var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
		    var a22=math.divide(math.round(math.multiply(math.divide(-math.multiply(math.add(I,math.multiply(m,l,l)),b),den),1000)),1000);
			
			var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b2=math.divide(math.round(math.multiply(math.divide(math.add(I,math.multiply(m,l,l)),den),1000)),1000);;
			
			var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			var a11=a13=a14=a21=a24=a31=a32=a33=a41=a44=b1=b3=c12=c13=c14=c21=c22=c24=0;
			var a12=a34=c11=c23=1;
			
			
			var aa11= a11*a11+a12*a21+a13*a31+a14*a41;
			var aa12= a11*a12+a12*a22+a13*a32+a14*a42;
			var aa13= a11*a13+a12*a23+a13*a33+a14*a43;
			var aa14= a11*a14+a12*a24+a13*a34+a14*a44;
		
			var aa21= a21*a11 +a22*a21 +a23*a31 +a24*a41;
			var aa22= a21*a12 +a22*a22 +a23*a32 +a24*a42;
			var aa23= a21*a13 +a22*a23 +a23*a33 +a24*a43;
			var aa24= a21*a14 +a22*a24 +a23*a34 +a24*a44;
			
			var aa31= a31*a11 +a32*a21 +a33*a31 +a34*a41;
			var aa32= a31*a12 +a32*a22 +a33*a32 +a34*a42;
			var aa33= a31*a13 +a32*a23 +a33*a33 +a34*a43;
			var aa34= a31*a14 +a32*a24 +a33*a34 +a34*a44;
			
			var aa41= a41*a11 +a42*a21 +a43*a31 +a44*a41;
			var aa42= a41*a12 +a42*a22 +a43*a32 +a44*a42;
			var aa43= a41*a13 +a42*a23 +a43*a33 +a44*a43;
			var aa44= a41*a14 +a42*a24 +a43*a34 +a44*a44;
			
			///////////////////////////////////////////
			
			var aaa11= a11*aa11+a12*aa21+a13*aa31+a14*aa41;
			var aaa12= a11*aa12+a12*aa22+a13*aa32+a14*aa42;
			var aaa13= a11*aa13+a12*aa23+a13*aa33+a14*aa43;
			var aaa14= a11*aa14+a12*aa24+a13*aa34+a14*aa44;
		
			var aaa21= a21*aa11 +a22*aa21 +a23*aa31 +a24*aa41;
			var aaa22= a21*aa12 +a22*aa22 +a23*aa32 +a24*aa42;
			var aaa23= a21*aa13 +a22*aa23 +a23*aa33 +a24*aa43;
			var aaa24= a21*aa14 +a22*aa24 +a23*aa34 +a24*aa44;
			
			var aaa31= a31*aa11 +a32*aa21 +a33*aa31 +a34*aa41;
			var aaa32= a31*aa12 +a32*aa22 +a33*aa32 +a34*aa42;
			var aaa33= a31*aa13 +a32*aa23 +a33*aa33 +a34*aa43;
			var aaa34= a31*aa14 +a32*aa24 +a33*aa34 +a34*aa44;
			
			var aaa41= a41*aa11 +a42*aa21 +a43*aa31 +a44*aa41;
			var aaa42= a41*aa12 +a42*aa22 +a43*aa32 +a44*aa42;
			var aaa43= a41*aa13 +a42*aa23 +a43*aa33 +a44*aa43;
			var aaa44= a41*aa14 +a42*aa24 +a43*aa34 +a44*aa44;
			
			//////////////////////////////////////////////
			
			var ca11= c11*a11 +c12*a21 +c13*a31 +c14*a41;
			var ca12= c11*a12 +c12*a22 +c13*a32 +c14*a42;
			var ca13= c11*a13 +c12*a23 +c13*a33 +c14*a43;
			var ca14= c11*a14 +c12*a24 +c13*a34 +c14*a44;
			
			var ca21= c21*a11 +c22*a21 +c23*a31 +c24*a41;
			var ca22= c21*a12 +c22*a22 +c23*a32 +c24*a42;
			var ca23= c21*a13 +c22*a23 +c23*a33 +c24*a43;
			var ca24= c21*a14 +c22*a24 +c23*a34 +c24*a44;
			
			////////////////////////////////////////////////
			
			var caa11= c11*aa11 +c12*aa21 +c13*aa31 +c14*aa41;
			var caa12= c11*aa12 +c12*aa22 +c13*aa32 +c14*aa42;
			var caa13= c11*aa13 +c12*aa23 +c13*aa33 +c14*aa43;
			var caa14= c11*aa14 +c12*aa24 +c13*aa34 +c14*aa44;
			
			var caa21= c21*aa11 +c22*aa21 +c23*aa31 +c24*aa41;
			var caa22= c21*aa12 +c22*aa22 +c23*aa32 +c24*aa42;
			var caa23= c21*aa13 +c22*aa23 +c23*aa33 +c24*aa43;
			var caa24= c21*aa14 +c22*aa24 +c23*aa34 +c24*aa44;
			
			/////////////////////////////////////////////
			
			var caaa11= c11*aaa11 +c12*aaa21 +c13*aaa31 +c14*aaa41;
			var caaa12= c11*aaa12 +c12*aaa22 +c13*aaa32 +c14*aaa42;
			var caaa13= c11*aaa13 +c12*aaa23 +c13*aaa33 +c14*aaa43;
			var caaa14= c11*aaa14 +c12*aaa24 +c13*aaa34 +c14*aaa44;
			
			var caaa21= c21*aaa11 +c22*aaa21 +c23*aaa31 +c24*aaa41;
			var caaa22= c21*aaa12 +c22*aaa22 +c23*aaa32 +c24*aaa42;
			var caaa23= c21*aaa13 +c22*aaa23 +c23*aaa33 +c24*aaa43;
			var caaa24= c21*aaa14 +c22*aaa24 +c23*aaa34 +c24*aaa44;
			
			//////////////////////////////////////////////
			var C= math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			var CA= math.matrix([[ca11, ca12, ca13, ca14],[ca21, ca22, ca23, ca24]]);
			var CAA= math.matrix([[caa11, caa12, caa13, caa14],[caa21, caa22, caa23, caa24]]);
			var CAAA= math.matrix([[caaa11, caaa12, caaa13, caaa14],[caaa21, caaa22, caaa23, caaa24]]);
			
			//var Qc1= math.matrix([[0, 1.818, -0.331, 12.209], [1.818, -0.331, 12.209, -4.433], [0, 4.545, -0.827, 141.873], [4.545, -0.827, 141.873, -31.349]]);
			//var DQc1=math.det(Qc1);
			//console.log(DQc1);
			
			var Qoo= math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24],[ca11, ca12, ca13, ca14],[ca21, ca22, ca23, ca24]]);
			var DQoo=math.det(Qoo);
			console.log(DQoo);
			
			//document.getElementById('Qoo').value = DQoo;
			
			
			var Qo1= math.matrix([[c11, c12, c13, c14],[ca11, ca12, ca13, ca14],[caa11, caa12, caa13, caa14],[caaa11, caaa12, caaa13, caaa14]]);
			var DQo1=math.det(Qo1);
			console.log(DQo1);
			
			//document.getElementById('Qo1').value = DQo1;
			
			
			var Qo2= math.matrix([[c21, c22, c23, c24],[ca21, ca22, ca23, ca24],[caa21, caa22, caa23, caa24],[caaa21, caaa22, caaa23, caaa24]]);
			var DQo2=math.det(Qo2);
			console.log(DQo2);
			
			//document.getElementById('Qo2').value = DQo2;
			
			//document.getElementById('Qo3').value = DQo2;
			
			console.log(Qoo);
			console.log(Qo1);
			console.log(Qo2);
			
			var Qo3= math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24],[ca11, ca12, ca13, ca14],[ca21, ca22, ca23, ca24], [caa11, caa12, caa13, caa14],[caa21, caa22, caa23, caa24],[caa11, caa12, caa13, caa14],[caaa11, caaa12, caaa13, caaa14]]);
			
			console.log(Qo3);
			
			if (DQo1!=0)
			{  Obsrl_Test1=" Rank of Q<sub>o1</sub> = Order of A = n = 4";
			   Obsrl_Test2=" System is Observable with only out-put 1";
			   document.getElementById("Obsrl_Test1").innerHTML=Obsrl_Test1;
			   document.getElementById("Obsrl_Test2").innerHTML=Obsrl_Test2;
			}
			   else 
			   {   Cntrl_Test1=" Rank of Q<sub>o1</sub> < Order of A = n = 4";
			       Cntrl_Test2=" System is not Observable with only out-put 1";
			       document.getElementById("Obsrl_Test1").innerHTML=Obsrl_Test1;
				   document.getElementById("Obsrl_Test2").innerHTML=Obsrl_Test2;
			   }
			   
			   if (DQo2!=0)
			{  Obsrl_Test3=" Rank of Q<sub>o2</sub> = Order of A = n = 4";
			   Obsrl_Test4=" System is Observable with only out-put 2";
			   document.getElementById("Obsrl_Test3").innerHTML=Obsrl_Test3;
			   document.getElementById("Obsrl_Test4").innerHTML=Obsrl_Test4;
			}
			   else 
			   {   Obsrl_Test3=" Rank of Q<sub>o2</sub> < Order of A = n = 4";
			       Obsrl_Test4=" System is not Observable with only out-put 2";
			       document.getElementById("Obsrl_Test3").innerHTML=Obsrl_Test3;
				   document.getElementById("Obsrl_Test4").innerHTML=Obsrl_Test4;
			   }
			   
			   if (DQoo!=0)
			{  Obsrl_Test5=" Rank of Q<sub>o</sub> = Order of A = n = 4";
			   Obsrl_Test6=" System is Observable";
			   document.getElementById("Obsrl_Test5").innerHTML=Obsrl_Test5;
			   document.getElementById("Obsrl_Test6").innerHTML=Obsrl_Test6;
			}
			   else 
			   {   Obsrl_Test5=" Rank of Q<sub>o</sub> < Order of A = n = 4";
			       Obsrl_Test6=" System is not Observable";
			       document.getElementById("Obsrl_Test5").innerHTML=Obsrl_Test5;
				   document.getElementById("Obsrl_Test6").innerHTML=Obsrl_Test6;
			   }
			
	        	
}






