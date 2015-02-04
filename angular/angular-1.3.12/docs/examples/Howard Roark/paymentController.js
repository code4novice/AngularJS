
var myApp = angular.module('myApp', []);
myApp.service('paymentService', function() {
					var data = [
							{
								"imagePath" : "images/Aetna-Logo.gif",
								"planName" : "Aetna Bronze Deductible Only HSA Eligible Savings Plus HMO PD",
								"planPrice" : "$1744444444444.91"
							}, {
								"imagePath" : "images/Aetna-Logo.gif",
								"planName" : "Delta Dental Bronze Deductible ",
								"planPrice" : "$165.91"
							}, {
								"imagePath" : "images/Aetna-Logo.gif",
								"planName" : "Coventry gold",
								"planPrice" : "$106.91"
							} ];
					this.getJsonData = function() {
						return data;
					};
				});


myApp.controller('paymentController', function($scope, $http, paymentService) {
	alert("hello");
	console.log($scope, $http, paymentService);
	$scope.data = paymentService.getJsonData();
});


