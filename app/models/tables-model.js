var tableModel = [
			{
				id: 't872esd55ekw9',  //unicue id [type: String]
				table_name: 'loto1',  //table name [type: String]
				//owner: "",
				order: 1, 			  //table position [type: Number]
				min_user_count: 2,	  //minimum user count on game [type: Number]
				max_user_count: 10,	  //maximum user count on game [type: Number]
				is_private: false,	  //game is private or public  [type: Boolean]
				status: 'waiting',    //game status {'waiting', 'started', 'finished'} [type: String]
				users_list: ['9uew9uf3','9uew9uf3','9uew9uf3']	  	  //connected on game users list [type: Array]
			},
			{
				id: 't823esb92lkw9',
				table_name: 'loto2',
				owner: 't872esd02ekw9',
				order: 2,
				min_user_count: 3,
				max_user_count: 9,
				is_private: true,
				status: 'started',
				users_list: ['9uew9uf3']
			},
			{
				id: 'v246su8yh55ty',
				table_name: 'loto3',
				//owner: "",
				order: 5,
				min_user_count: 2,
				max_user_count: 8,
				is_private: false,
				status: 'waiting',
				users_list: ['9uew9uf3','9uew9uf3']
			},
			{
				id: 't872esd02ekw9',
				table_name: 'loto4',
				//owner: "",
				order: 3,
				min_user_count: 4,
				max_user_count: 5,
				is_private: false,
				status: 'finished',
				users_list: ['9uew9uf3','9uew9uf3','9uew9uf3','9uew9uf3','9uew9uf3']
			}
		]

var elem = {
	table_name: '',
	min_user_count: 2,
	max_user_count: "",
	is_private: "",
	status: 'waiting',
	users_list: []
};
