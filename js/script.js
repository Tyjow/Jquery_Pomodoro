function doing() {
	var field = $("#task").val();
	$("h2:first").text("Doing " + field);
}

var minutes = 0;
var seconds = 0;
var timerInterval = null;

function timer() {

	minutes++;
    seconds++;
        
	$('#time').text(minutes + ":" + seconds);

}

$("#play").click(function(){
	doing();
	timer();
	timerInterval = setInterval(timer, 1000);
});

$("#stop").click(function(){
	var field = $("#task").val('');
	$("h2:first").text("Doing");
});