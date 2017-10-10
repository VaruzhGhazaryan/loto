App.controller('tablesCtrl',function($scope){
	$scope.model = tableModel;
	$scope.removeTab = function () {
		var index= (tableModel.indexOf(this.game));
		if (index >= 0) {
			tableModel.splice(index, 1);
		}

	};

	$scope.addGames= function (name,max) {
		if(name!=undefined && max <= 4) {
			var obj = {
				id: 't872esd92ekw9',
				table_name: name,
				order: 1, 
				min_user_count: 2,
				max_user_count: max,
				is_private: true,
				status: 'waiting',
				users_list: ['9uew9uf3', '9uew9uf3', '9uew9uf3']
			};
			tableModel.push(obj)
		}
	}
});