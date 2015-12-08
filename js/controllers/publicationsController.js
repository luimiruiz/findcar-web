angular.module('findCarApp').controller('publicationsController',['$scope', 'manufacturer', 'model', 'publication',function($scope, manufacturer, model, publication){
	$scope.publications = [];
	$scope.searchParams = {
		minPrice: '#',
		maxPrice: '#',
		minYear: '#',
		model: '#',
		manufacturer: '#',
		page:1,
		offset: 20
	};

	$scope.years = [];

	for(i = 1990; i <= 2016; ++i){
		$scope.years.push(i);
	}

	$scope.moneyAmmounts = [];

	for(i = 50000; i <= 10000000; i+= 50000){
		$scope.moneyAmmounts.push(i);
	}

	$scope.manufacturers = [];

	$scope.models = [];

	manufacturer.getAll(function(response){
		if(!response.error){
			$scope.manufacturers = response.data;
		}
	});

	/**
	 * Function executed when a manufacturer is changed
	 */
	$scope.changeManufacturer = function(){
		model.getAll($scope.searchParams.manufacturer, function(response){
			if(!response.error){
				$scope.models = response.data;
			}
		});
	}

	/**
	 * Function to search new publications
	 */
	$scope.searchPublications = function(page){
		$scope.searchParams.page = page;
		publication.searchPublications($scope.searchParams, function(response){
			if(response.error){
				console.log(response.data);
				$scope.pagesCount = response.message;
				$scope.totalPages = new Array(Math.ceil($scope.pagesCount/$scope.searchParams.offset));
				$scope.publications = angular.copy(response.data);
			}
		});
	}

	$scope.searchPublications(1);

}]);