App.controller('tablesCtrl',function($scope){
    $scope.model = tableModel;
    $scope.myFunc = function (arg) {
        console.log(arg);
    }
    $scope.cleanRow = function(arg) {
		var index = -1;
		for( var i = 0; i < $scope.model.length; i++ ) {
			if( $scope.model[i].table_name === arg ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.model.splice( index, 1 );
	};

  $scope.createElem = function () {
    $scope.elem = elem;
    $scope.elem.table_name = $scope.name;
    $scope.elem.max_user_count = $scope.users;
    $scope.elem.is_private = $scope.isprivate;

    $scope.model.push($scope.elem);

  }
  $scope.checkOwner = function(arg) {
    if (arg) {
      return false;
    }
    else {
      return true;
    }
  }
});
