app.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  $scope.items = ['one','two','three','four'];

  $scope.items_array_object = [
  					{ name: 'one', age: 30 },
  					{ name: 'two', age: 27 },
  					{ name: 'three', age: 50 }
  				];

  	
  	$scope.items1 = [{name: 'one', age: 30 },
  					{ name: 'two', age: 27 },
  					{ name: 'three', age: 50 }];

  $scope.test = "tets";

  $scope.submitForm = function(isValid) {
  	console.log(isValid);

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

    console.log($scope.formdata);

  };
  

  $rootScope.appData = {
  	"project_type": ""
  }

  $rootScope.appData.project_type = "building";

  $scope.formdata =   {
	    "name": "",
	    "street": "",
	    "city": "",
	    "state": "",
	    "country": "US",
	    "publish": "True",
	    "zip_code": "",
	    "geo_lat": "",
	    "geo_long":"",
	    "occupancy": "0",
	    "operating_hours": "0",
	    "certification": "",
	    "points": "",
	    "year_constructed": 2016,
	    "space_type":"",
	    "owner_country": "US",
	    "owner_state": "NC",
	    "owner_zipcode": "27615",
	    "owner_name": "Test",
	    "owner_city": "Raleigh",
	    "owner_street": "Street 1",
	    "gross_area": "",
	    "anticipated_type": "Circulation Space",
	    "project_type": $rootScope.appData.project_type,
	    "sign_agreement": false,
	    "construction_start_date": "current_date",
	    "construction_end_date": "current_date",
	    "items": $scope.items
	};




}]);
