$(document).ready(function(){
    
    setInterval(loadDateTime, 1000);
    
    function loadDateTime(){
        var completeDateTime = new Date();
        var date = getFormattedDate(completeDateTime);
        var time = getFormattedTime(completeDateTime);
        $("#date").text(date);
        $("#time").text(time);
    }
    
    function getFormattedDate(completeDateTime){
        var month = formatSingleDigit(completeDateTime.getMonth() + 1);
        var day = formatSingleDigit(completeDateTime.getDate());
        var year = completeDateTime.getFullYear();
        var date = month + "/" + day + "/" + year;
        return date;
    }
    
    function getFormattedTime(completeDateTime){
        var meridian = "AM";
        var hour = completeDateTime.getHours();
        if(hour >12){
            hour -= 12;
            meridian = "PM";
        }
        var minute = formatSingleDigit(completeDateTime.getMinutes());
        var second = formatSingleDigit(completeDateTime.getSeconds());
        var time = hour + ":" + minute + ":" + second + " " + meridian;
        return time;
    }
    
    function formatSingleDigit(input){
        if(input < 10){
            input = '0' + input;
        }
        return input;
    }
});