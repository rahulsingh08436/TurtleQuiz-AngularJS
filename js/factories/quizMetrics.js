(function(){

	angular
		.module("turtleFacts")
		.factory("quizMetrics", QuizMetrices);
		
		function QuizMetrices(){
			var quizObj = {
				quizActive: false,
				changeState: changeState
			};
			
			return quizObj;
		
			function changeState(state){
				quizObj.quizActive = state;
			}
		}
})();