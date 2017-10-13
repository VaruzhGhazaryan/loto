App.controller('tablesCtrl',function($scope){
	$scope.model = tableModel;


    for(var i = 0; i < $scope.model.length; i++){
        var result = $scope.model[i];
        if(result['is_private'] === true){
            result.icon = 'fa fa-lock fa-1.5x';
            result.is_private = "disableBtn = 'true'";
        }else{
            result.icon = 'fa fa-unlock fa-1.5x'
        }
        if(result['status'] === 'waiting'){
            result.status = 'waiting';
        }else if(result['status'] === 'started'){
            result.status = 'started';
        }else if(result['status'] === 'finished'){
            result.status = 'finished'
        }
    }





    $scope.addNew = function(userModel){

        $scope.model.push({
            'table_name': userModel.table_name,
            'status' : userModel.status = 'waiting',
            'is_private' : userModel.icon,
            'min_user_count' :userModel.min_user_count,
            'max_user_count' :userModel.max_user_count
        });
    };

    $scope.deleteUser = function (user) {
        var index = $scope.model.indexOf(user);
        $scope.model.splice(index, 1);
    };
});