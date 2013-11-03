var app = app || {};

app.Questions = (function () {
	var $el = $(".container");
	
	/*************************/
	/*** Events Callbacks ***/
	/************************/
	
	var onSaveQuestions = function(){
		//submit questions
	};
	
	/********************/
	/*** DOM Binding ***/
	/*******************/
	//Quantity select binding
	var bindSaveQuestion = function(){
		//Bind to save button
	};
	
	var init = function(){
		bindSaveQuestion();
	}
	
	/***********************/
	/*** Public Methods ***/
	/*********************/
	return {
		"init": init 
	}	
}());

//Initialize Cart Page
(function (){
	app.Questions.init();	
}());
