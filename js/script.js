var field;
var minutes = 0;
var seconds = 0;
var timerInterval;

$("h1").text("Pomodoro");
$("h1").css("color", "blue");
$("h1").css("text-align", "center");
$("body").css("background-color", "#000");
$("h2").css("color", "#fff");
$(".time").css("color", "#fff");
$("body").css("color", "red");


function doing() {
	field = $("#task").val();
	$("h2:first").text("Doing " + field);
}

function wait() {
	$("h2:nth-of-type(2)").text("Done ! Waiting for a new task");
}

function done() {
	$("h2:nth-of-type(2)").text("In Progress... ");
}

function pause() {
	$("h2:nth-of-type(2)").text("Pause ");
}

function taskOver() {
	$("#done").prepend("<li class='list-group-item'><s>" + field + "</s></li>");
}

function timer() {

    timerInterval = setInterval(function(){

    	seconds++;

    	if (seconds < 10){
	    	seconds = "0" + seconds;
	    }

		if (seconds > 59){
			seconds = "0" + 0;
			minutes++;
		}

		$(".time").text(minutes + ":" + seconds);

    }, 1000);
}

function resetTimer() {
	if (seconds >= 1 || minutes >= 1){
		minutes = 0;
		seconds = 0;
		$(".time").text("0:00");
	}
}

$("#play").click(function(){
	doing();
	if (field == ""){
		alert("Really ? Write a task !!");
	}
	else {
		timer();
		//timerInterval = setInterval(function(){timer()}, 1000);
		$("#play").attr('disabled', true);
		$("#pause").attr('disabled', false);
		$("#stop").attr('disabled', false);
		done();
	}
});

$("#pause").click(function(){
	clearInterval(timerInterval);
	$("#pause").attr('disabled', true);
	$("#play").attr('disabled', false);
	pause();
});

$("#stop").click(function(){
	var field = $("#task").val('');
	clearInterval(timerInterval);
	$("#play").attr('disabled', false);
	$("#pause").attr('disabled', false);
	$("#stop").attr('disabled', true);
	resetTimer();
	wait();
	taskOver();
	$("h2:first").text("Doing");
});

