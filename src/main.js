var panels10 = ["panel0", "panel1", "panel2", "panel3", "panel4", "panel5", "panel6", "panel7", "panel8", "panel9"]; 
var panels6 = ["panel0", "panel1", "panel2", "panel3", "panel4", "panel5"];
var counter = 0;

$(document).ready(function(){
    tickTock();
    
            
	function tickTock() {
		var today = new Date();
		var seconds1 = Math.floor(today.getSeconds() / 10);
		var seconds2 = today.getSeconds() % 10;
		var minutes1 = Math.floor(today.getMinutes() / 10);
		var minutes2 = today.getMinutes() % 10;
        var hours1 = today.getHours();
        if(hours1 > 12){
            hours1 = hours1 - 12;
        }
        var hours2;
        if(hours1 >= 10){
            hours1 = today.getHours() - 10;
            hours2 = 1;
        } else{
            hours2 = 0;
        }
        
        $('#seconds').text('hours: ' + today.getHours() + ' minutes: ' + today.getMinutes() + '  seconds: ' + today.getSeconds());
		rightSecondsArray = setInitialPosition('rightSecond', 10, seconds2, 'seconds2Array');
		leftSecondsArray = setInitialPosition('leftSecond', 6, seconds1, 'seconds1Array');
        rightMinutesArray = setInitialPosition('rightMinute', 10, minutes2, 'minutes2Array');
		leftMinutesArray = setInitialPosition('leftMinute', 6, minutes1, 'minutes1Array');  
        rightHourArray = setInitialPosition('rightHour', 10, hours1, 'hours1Array');
        leftHourArray = setInitialPosition('leftHour', 6, hours2, 'hours21Array');
        setMeridian(true);
        
        setInterval(function(){ tenSidedRotation("rightSecond", rightSecondsArray); }, 1000);
    }
	
	function setInitialPosition(dialToSet, numberOfSides, inputValue, arrayName){
		if(numberOfSides === 10){
			switch(inputValue){
					case 0: arrayName = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
							break;
					case 9: arrayName = [36, 72, 108, 144, 180, 216, 252, 288, 324, 0];
							break;
					case 8: arrayName = [72, 108, 144, 180, 216, 252, 288, 324, 0, 36];
							break;
					case 7: arrayName = [108, 144, 180, 216, 252, 288, 324, 0, 36, 72];
							break;
					case 6: arrayName = [144, 180, 216, 252, 288, 324, 0, 36, 72, 108];
							break;
					case 5: arrayName = [180, 216, 252, 288, 324, 0, 36, 72, 108, 144];
							break;
					case 4: arrayName = [216, 252, 288, 324, 0, 36, 72, 108, 144, 180];
							break;
					case 3: arrayName = [252, 288, 324, 0, 36, 72, 108, 144, 180, 216];
							break;
					case 2: arrayName = [288, 324, 0, 36, 72, 108, 144, 180, 216, 252];
							break;
					case 1: arrayName = [324, 0, 36, 72, 108, 144, 180, 216, 252, 288];
							break;
				}
				for(var i = 0; i < panels10.length; i++){	
	       $('#' + dialToSet + ' .' + panels10[i]).css({ transform: 'rotateX(' + arrayName[i] + 'deg ) translateZ( 200px )',
							transition: 'transform .4s linear'});        
				}
			}
		if(numberOfSides === 6){
			switch(inputValue){
					case 0: arrayName = [0, 60, 120, 180, 240, 300];
							break;
					case 5: arrayName = [60, 120, 180, 240, 300, 0];
							break;
					case 4: arrayName = [120, 180, 240, 300, 0, 60];
							break;
					case 3: arrayName = [180, 240, 300, 0, 60, 120];
							break;
					case 2: arrayName = [240, 300, 0, 60, 120, 180];
							break;
					case 1: arrayName = [300, 0, 60, 120, 180, 240];
							break;
				 }
				 
			for(var i = 0; i < panels6.length; i++){
	       $('#' + dialToSet + ' .' + panels6[i]).css({ transform: 'rotateX(' + arrayName[i] + 'deg ) translateZ( 200px )',
							transition: 'transform .4s linear'});        
			}
		}
		return arrayName;
	}
    
    
    function tenSidedRotation(elementToMove, arrayName){
        var today = new Date();
		$('#seconds').text('hours: ' + today.getHours() + ' minutes: ' + today.getMinutes() + '  seconds: ' + today.getSeconds());
        for(var i = 0; i < panels10.length; i++){	
            arrayName[i] -= 36;
	       $('#' + elementToMove + ' .' + panels10[i]).css({ transform: 'rotateX(' + arrayName[i] + 'deg ) translateZ( 200px )',
							transition: 'transform .4s linear'});        
            if(panels10[i] === 'panel0' && (arrayName[i] % 360 === 0) && elementToMove === 'rightSecond'){
                sixSidedRotation('leftSecond', leftSecondsArray);
            }
            if(panels10[i] === 'panel0' && (arrayName[i] % 360 === 0) && elementToMove === 'rightMinute'){
                sixSidedRotation('leftMinute', leftMinutesArray);
            }
            //If right hour is zero, rotate left hour to show '1'
            if(panels10[i] === 'panel0' && (arrayName[i] % 360 === 0) && elementToMove === 'rightHour'){
                sixSidedRotation('leftHour', leftHourArray);
                counter = 1;
            }
            //If right hour is one AND it's the second one (it's going to be 1 o'clock not 11 o'clock), rotate left hour to show '0'
            if(panels10[i] === 'panel1' && (arrayName[i] % 360 === 0) && elementToMove === 'rightHour'){
                if(counter == 2){
                    sixSidedRotation('leftHour', leftHourArray);
                } else counter++;
            }
	   }
       
    }
    
    
    function sixSidedRotation(elementToMove, arrayName){ 
           for(var i = 0; i < panels6.length; i++){	
                    arrayName[i] -= 60;
                   $('#' + elementToMove + ' .' + panels6[i]).css({ transform: 'rotateX(' + arrayName[i] + 'deg ) translateZ( 200px )',
                                    transition: 'transform .4s linear'}); 
               if(panels6[i] === 'panel0' && (arrayName[i] % 360 === 0) && elementToMove === 'leftSecond'){
                tenSidedRotation('rightMinute', rightMinutesArray);
                }
               if(panels6[i] === 'panel0' && (arrayName[i] % 360 === 0) && elementToMove === 'leftMinute'){
                tenSidedRotation('rightHour', rightHourArray);
                }
            }
       setMeridian(false);
    }
    
    function setMeridian(initialSet){
        var today = new Date();
        if(initialSet){
            if(today.getHours() >= 12){
                $('#PM').addClass('lit');
                $('#AM').addClass('unlit');
            } 
            else{
                $('#PM').addClass('unlit');
                $('#AM').addClass('lit');
            }
        } 
        else{
            if(today.getHours() >= 12){
                $('#PM').removeClass('unlit').addClass('lit');
                $('#AM').removeClass('lit').addClass('unlit');
            } else{
                $('#PM').removeClass('lit').addClass('unlit');
                $('#AM').removeClass('unlit').addClass('lit');
            }
        }
        
    }
    
});
