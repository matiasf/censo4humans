var app = app || {};

app.Questions = (function () {
	var $el = $(".container");
	var saveQuestionURL = "/questions/";
	var getTwitterInfoURL = "/twitter/info"
	
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
		questionString += '@' + $el.find('#field').val() + '@' + $el.find('#chartType').val();
		return questionString;
	}
	
	var getHostURL = function() {
		var http = location.protocol;
		var slashes = http.concat("//");
		return slashes.concat(window.location.hostname).concat(':'.concat(location.port));
	}
	
	/*************************/
	/*** Events Callbacks ****/
	/*************************/
	var onSaveQuestions = function(){
		if ($el.find('.question-text').val()) {
			var http = location.protocol;
			var slashes = http.concat("//");
			$.get(getHostURL().concat(getTwitterInfoURL), function(data){
				if (data.screen_name) {
					$.post(getHostURL().concat(saveQuestionURL.concat(data.screen_name).
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
		$.get(getHostURL().concat(getTwitterInfoURL), function(data){
			if (data.screen_name) {
				$('#user-name').append(data.screen_name)
				$.get(getHostURL().concat(saveQuestionURL.concat(data.screen_name)) , function (data) {
					var quesionSlot = $el.find('.question-list');
					quesionSlot.empty();
					$el.find('.question-warning').empty();
					for (var i=0; i < data.length; i++) {
						quesionSlot.append("<li><a href='/" + data[i].query + "'>" + data[i].question + "</a></li>");
					}
				})
			}
		});
		$("[data-toggle='tooltip']").tooltip();
	}
	
	/***********************/
	/*** Public Methods ****/
	/***********************/
	return {
		"init": init 
	}	
}());

(function (){
	app.Questions.init();	
}());
