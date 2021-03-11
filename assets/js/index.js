
	
	var canvas = document.getElementById("myCanvas");
	var selctbtn = document.getElementById("selectsort");
	var bubblebtn = document.getElementById("bubblesort")
	var insertbtn = document.getElementById("insersort")
	var quickbtn = document.getElementById("quicksort")
	var random = document.getElementById("Random")
	var speedup = document.getElementById("speedup")
	var number = document.getElementById("number")
	var speedtrack = document.getElementById("speed")
	var speeddown= document.getElementById("speeddown")
	var speed = 30;
	var ctx = canvas.getContext("2d");
	var clength = 1920;
	var cheight = 1000;
	var nlength = 1880;
	var nheight = 690;
	var length = 500;
	var array = new Array(length)
	var yvalue = new Array(length)
	var color = new Array(length)
	var count = 0;
	var canrun = [true,true,true,true]
	

	//#CC0016red
	//14B029grren
	//var array = [2,10,7,8,5,3,6,2,4,1]
	function generate(){
		
	array = new Array(length)
	yvalue = new Array(length)
	 color = new Array(length)
	 count = 0;
	 canrun = [true,true,true,true]
	
	for(var a = 12; a < 695; a=a+ (695/length)){
		yvalue[count] = a;
		count ++;
	}

	for (var b = 0; b < length; b++) { 
    	array[b] = Math.random() * 75; 
	} 
	for (var i= 0; i < length; i++) { 
    	color[b] =  "#0091CC";
	} 
	for(var h = 0; h < length-1; h++){
				
					color[h]= "#0091CC"

			}
	}
	

	/*ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#000000";
	ctx.lineWidth ="0"
	ctx.fillRect(0, 0, clength, cheight);
	ctx.strokeStyle = "#ffffff";
	ctx.fillStyle = "#000000";
	ctx.strokeRect(100, 100, 1500, 800);
	for(var c = 100; c <= 1600; c= c+20){
		ctx.lineWidth ="2"
		ctx.strokeStyle = "#ffffff";
		ctx.beginPath();
		ctx.moveTo(c, 100);
		ctx.lineTo(c, 900);
		ctx.stroke();

	}
	for(var g = 100; g <= 900; g= g+20){
		ctx.lineWidth ="2"
		ctx.strokeStyle = "#ffffff";
		ctx.beginPath();
		ctx.moveTo(100, g);
		ctx.lineTo(1600, g);
		ctx.stroke();

	}*/
function animate(){
	
	if(k<length){
	ctx.strokeStyle = "#000000";
		
		
	ctx.fillStyle = "#000000";
	ctx.lineWidth ="0"
	ctx.fillRect(0, 0, clength, cheight);
	ctx.strokeStyle = "#ffffff";
	ctx.fillStyle = "#000000";
	ctx.strokeRect(10, 10, nlength, nheight);
	
			ctx.strokeStyle = "#ffffff";
			ctx.lineWidth ="0"
			ctx.lineWidth = 1;
			for(var h = 0; h < length-1; h++){
				
								ctx.fillStyle = color[h];
				
										ctx.fillRect(12, yvalue[h], 1.25*(array[h]*20), 400/length);
										//ctx.strokeRect(12, yvalue[h], 1.25*(array[h]*20), 690/length);
				
			
			}
		}else if(k , length + 5){
			ctx.strokeStyle = "#000000";
		
		
	ctx.fillStyle = "#000000";
	ctx.lineWidth ="0"
	ctx.fillRect(0, 0, clength, cheight);
	ctx.strokeStyle = "#ffffff";
	ctx.fillStyle = "#000000";
	ctx.strokeRect(10, 10, nlength, nheight);
	
			for(var h = 0; h < length-1; h++){
			ctx.fillStyle = color[4];
				
										ctx.fillRect(12, yvalue[h], 1.25*(array[h]*20), 400/length);
									}
		}
			
			requestAnimationFrame(animate);
			
			

	}
			

		
	
		var myvar ;
		var k = 0;
		var x = ""
		
		

	
	
		

		//quicksort(array, 0, 160);
		//setInterval(reset, 500)
		generate();
		animate();
function go(){
	
	clearInterval(myvar);
	array = new Array(length)
	for (var b = 0; b < length; b++) { 
    	array[b] = Math.random() * 75; 
	} 
	
	k = 0;
	animate();
}
function selectionsort(){
	
	if(k<length){
	
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";
	} 
	
	//#14B029
	if(k!= 0){
		color[k-1] = "#0091CC";
	}
	color[min] = "#14B029";
	color[k] = "#CC0016"; 
		var min = k;
		for(var p = k+1; p < length; p++){
			

			if(array[p] < array[min]){
				
				
				min = p;
				x = color[min];
								

			}

		}
		color[min] = "#14B029";

		var temp = array[min];
		array[min] = array[k];
		array[k] = temp;
		
			
		
	k++;
}

	}
	function bubblesort(){
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}
		
			for(var j = 0; j < length-k-1; j++){
				if(array[j] < array[j+1]){
					color[j] = "#14B029";
					color[j+1] = "#CC0016";
					var temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
				}

			}
			k++;
		
	}
	function inertionsort(){
		
		
		if(k < length){
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}
		color[k] = "#14B029";
			var check = array[k];
			var j = k - 1;
			while(j<= length && array[j]> check){
				array[j+1] = array[j];
				color[j] = "#CC0016"; 
				j = j - 1;
			}
			array[j+1] = check;
		k++;
	}else{
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}

	}

	}
	function quicksort(array,low,high){
		console.log("here")
		if(k<length){
		if(low < high){
			color[low] = "#14B029";
			color[high] = "#CC0016";
			color[part+1] = "#14B029";
			color[part-1] = "#CC0016";
						var part = partition(array, low, high);
			
			myvar = setTimeout(quicksort, speed*2,array, low, part-1);
			myvar = setTimeout(quicksort, speed*2,array, part+1, high);
		}
}
	}


	function partition(ar,low,high){
		color[low] = "#14B029";
			color[high] = "#CC0016";
		var location = ar[high];
		var i =(low-1);
		for(var j=low; j<high; j++){
			
			if(ar[j]<location){
				
				i++
				var temp = ar[i];
				color[i] = "#14B029";
			color[j] = "#CC0016";
				ar[i] = ar[j];
				ar[j] = temp;

			}
		}
		color[i+1] = "#14B029";
			color[high] = "#CC0016";
		var temp = ar[i+1];
		ar[i+1] = ar[high];
		ar[high] = temp;
		return i + 1;

	}
	function reset(){
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}
}
function turnon(){
	for(var p = 0; p <= 3; p++){
		canrun[p] = true;
	}
}
selctbtn.addEventListener("click", function(event){
	if(canrun[0]==true){
		canrun[1] = false;
		canrun[2] = false;
		canrun[3] = false;
	if(k==0){
		myvar = setInterval(selectionsort, speed);
	}else{
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}
		clearInterval(myvar);
		go();
		myvar = setInterval(selectionsort, speed);
		//setTimeout(turnon, speed*length)
	}
	}
		
		
	});	
bubblebtn.addEventListener("click", function(event){
	if(canrun[1]==true){
		canrun[0] = false;
		canrun[2] = false;
		canrun[3] = false;
	if(k==0){
		myvar = setInterval(bubblesort, speed);
	}else{
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}
		clearInterval(myvar);
		go();
		myvar = setInterval(bubblesort, speed);
		setTimeout(turnon, speed*length)
	}
	
		}
	});	
insertbtn.addEventListener("click", function(event){
	if(canrun[2]==true){
		canrun[1] = false;
		canrun[0] = false;
		canrun[3] = false;
		var cango = false;
		for(i=0; i < length; i++){
			if(array[i] > array[i +1]){
				cango = true;
			}
		}
		if(cango = true){
	if(k==0){
		myvar = setInterval(inertionsort, speed);
	}else{
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}
		clearInterval(myvar);
		go();
		myvar = setInterval(inertionsort, speed);
		setTimeout(turnon, speed*length)
		
	}
	}
		}
	});	
quickbtn.addEventListener("click", function(event){
	if(canrun[3]==true){
		canrun[1] = false;
		canrun[2] = false;
		canrun[0] = false;
	
	if(k==0){
				
		
			setTimeout(turnon, speed*length)
			setInterval(reset, 500);
		quicksort(array, 0, length);
		}
		
	}else{
		for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}	setInterval(reset, 500);
		quicksort(array, 0, 160);
		setTimeout(turnon, speed*length)
		clearInterval(myvar);
		go();
		
	}
	
		
	});	
random.addEventListener("click", function(event){
	console.log("here")
	turnon();
	for (var i= 0; i < length; i++) { 
    	color[i] =  "#0091CC";

	}
	clearInterval(myvar);
		go();
		
	});
/*speedup.addEventListener("click", function(event){
	if(speed>1){
	speed = speed /2;
}
});
//speeddown.addEventListener("click", function(event){
	if(speed < 800){
	speed = speed *2;
}
});*/
//speedtrack.oninput = function(){
	//speed = 1000 - this.value;
//}
number.oninput = function(){

	length = (this.value);
	generate();
	go();
	}

