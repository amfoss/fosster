/** *************Angular controller JS*********************/
"use strict"; 
app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform, e) {
		e.preventDefault();
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = false;
		$scope.formData = null;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
					$scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
});

app.controller('countDownCtrl',function($scope,$interval){
    var end = new Date('12/01/2017 10:1 AM'); //Event Date

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var showRemaining = function() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

           $interval.cancel(promise);
            alert("Timer expired"); //What should happen if Timer is finished

            return;
        }
        $scope.days = Math.floor(distance / _day);
        $scope.hours = Math.floor((distance % _day) / _hour);
        $scope.minutes = Math.floor((distance % _hour) / _minute);
        $scope.seconds = Math.floor((distance % _minute) / _second);

    };

    var promise = $interval(showRemaining,1000);

});