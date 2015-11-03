angular.module('findCarApp').controller('publicationsController',['$scope', 'manufacturer', 'model', 'publication',function($scope, manufacturer, model, publication){
	$scope.publications = [];
	$scope.searchParams = {
		minPrice: '#',
		maxPrice: '#',
		minYear: '#',
		model: '#',
		manufacturer: '#',
		transmision: '#',
		page:1
	};

	$scope.morePages = true;

	$scope.years = [];

	for(i = 1990; i <= 2016; ++i){
		$scope.years.push(i);
	}

	$scope.moneyAmmounts = [];

	for(i = 50000; i <= 10000000; i+= 50000){
		$scope.moneyAmmounts.push(i);
	}

	$scope.transmisions = [
		{
			id: 1,
			name: 'Transmisión Automatica'
		},
		{
			id: 2,
			name: 'Transmisión Manual'
		}
	];

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
	$scope.searchPublications = function(append){
		publication.searchPublications($scope.searchParams, function(response){
			if(!response.error){
				if(append){
					if(response.data.length == 0){
						$scope.morePages  = false; 
					}
					$scope.publications.concat(response.data);
				}else{
					$scope.publications = response.data;
				}
			}
		});
	}

	$scope.searchPublications(false);

	$scope.loadMore = function(){
		if(!$scope.morePages){
			return;
		}
		$scope.searchParams.page++;
		$scope.searchPublications(true);
	}
}]);