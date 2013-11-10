var app = app || {};

app.Questions = (function () {
	var $el = $(".container");
	var saveQuestionURL = "/questions/";
	
	/*************************/
	/** Auxiliary Funcitons **/
	/*************************/	
	var createURLQuestion = function() {
		var filtersApplied = Manager.store.params.fq;
		var questionString = '/' + document.URL.split('/')[3] + '/';
		if (typeof filtersApplied != 'undefined') {
			for(var i=0; i < filtersApplied.length; i++) {
				questionString += filtersApplied[i].value.split(':')[0] + '-' + filtersApplied[i].value.split(':')[1];
				if (i != filtersApplied.length-1) {
					questionString += '_';
				}
			}
		}		
		questionString += '@' + $el.find('#field').val();
		return questionString;
	}
	
	/*************************/
	/*** Events Callbacks ****/
	/*************************/
	var onSaveQuestions = function(){
		if ($el.find('.question-text').val()) {
			var http = location.protocol;
			var slashes = http.concat("//");
			var host = slashes.concat(window.location.hostname).concat(':'.concat(location.port));
			$.post(host.concat(saveQuestionURL.concat("user_id").
					concat('/' + $el.find('.question-text').val() + createURLQuestion())) , function (data) {
				var quesionSlot = $el.find('.question-list');
				quesionSlot.empty();
				$el.find('.question-warning').empty();
				for (var i=0; i < data.length; i++) {
					quesionSlot.append("<li><a href='/" + data[i].query + "'>" + data[i].question + "</a></li>");
				}
			})
			.fail(function(){
				$el.find('.question-warning').append('<div class="alert">' +
				    '<button type="button" class="close" data-dismiss="alert">&times;</button>' + 
				    "<strong>Warning!</strong> Hay cosa de mandinga aca!" + 
				    '</div>');
			});
		}
		else {
			$el.find('.question-warning').append('<div class="alert">' +
			    '<button type="button" class="close" data-dismiss="alert">&times;</button>' + 
			    "<strong>Warning!</strong> El nombre de la pregunta es vacio" + 
			    '</div>');
		}
	};
	
	/********************/
	/*** DOM Binding ****/
	/********************/
	var bindSaveQuestion = function(){
		$el.find('.save-question').on("click", onSaveQuestions);
	};
	
	var init = function(){
		bindSaveQuestion();
	}
	
	/***********************/
	/*** Public Methods ****/
	/***********************/
	return {
		"init": init 
	}	
}());

//Initialize Cart Page
(function (){
	app.Questions.init();	
}());
