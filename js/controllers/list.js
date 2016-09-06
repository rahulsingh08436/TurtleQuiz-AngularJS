(function(){
	
	angular
		.module("turtleFacts")
		.controller("listCtrl", listController);
		
		listController.$inject = ['quizMetrics','DataService'];
		
		
		
		function listController(quizMetrics, DataService){
			var vm = this;
			
			vm.quizMetrics = quizMetrics;
			vm.data = DataService.turtlesData;
			vm.activeTurtle = {};
			vm.changeActiveTurtle = changeActiveTurtle;
			vm.activateQuiz = activateQuiz;
			vm.search="";
			
			
			function changeActiveTurtle(index){
				vm.activeTurtle = index;
				
			
			}
			
			function activateQuiz(){
				quizMetrics.changeState(true);
			
			}
			
		}


})();