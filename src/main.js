var position10 = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
var position6 = [0, 60, 120, 180, 240, 300];
var panels10 = ["panel0", "panel1", "panel2", "panel3", "panel4", "panel5", "panel6", "panel7", "panel8", "panel9"]; 
var panels6 = ["panel0", "panel1", "panel2", "panel3", "panel4", "panel5"]; 

$(document).ready(function(){
	move();
	
	function move(){
		setInterval(minute1, 1000);
		setInterval(minute2, 10000);
		
	}
	
	function minute1(){
	for(var i = 0; i < panels10.length; i++){		
			position10[i] -= 36;		
	$('#rightMinute .' + panels10[i]).css({ transform: 'rotateX(' + position10[i] + 'deg ) translateZ( 200px )',
							transition: 'transform .4s linear'});        
	}
	}
	
	function minute2(){
	for(var i = 0; i < panels6.length; i++){		
			position6[i] -= 60;		
	$('#leftMinute .' + panels6[i]).css({ transform: 'rotateX(' + position6[i] + 'deg ) translateZ( 200px )',
							transition: 'transform .4s linear'});        
	}
	}
});
 