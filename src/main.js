var position = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
var panels = ["panel0", "panel1", "panel2", "panel3", "panel4", "panel5", "panel6", "panel7", "panel8", "panel9"]; 

$(document).ready(function(){
	move();
	
	function move(){
	for(var i = 0; i < panels.length; i++){		
			position[i] -= 36;		
	$('#' + panels[i]).css({ transform: 'rotateX(' + position[i] + 'deg ) translateZ( 200px )',
							transition: 'transform .4s linear'});        
	}
	setTimeout(move, 1000);
	}
});
 