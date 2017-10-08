App.controller('tablesCtrl',function($scope){
	$scope.model = tableModel;
	$scope.funForButton=function(arg) {
		console.log(arg.users_list)

	}
	$scope.user_id=users[0].id;
	$scope.createNewLine=function (event) {
	event.preventDefault();
	var name=document.getElementById('tableName').value;
	var maxUsers=document.getElementById('maxUsers').value;
	var private=document.getElementById("private").checked;
	var newObject={
		id: Math.random().toString(36).slice(2, 13),
		table_name: name,
		order: tableModel.length+1,
		min_user_count: 2,
		max_user_count: maxUsers,
		is_private: private,
		status: "waiting",
		users_list: [],
	}
	tableModel.push(newObject)
	}
	$scope.remover=function(event, elem) {
	event.preventDefault();
	var td=event.target.parentNode;
	td.parentNode.style.display="none"
}
})