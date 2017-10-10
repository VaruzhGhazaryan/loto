var tableModel = [
			{
				id: 't872esd92ekw9',  //unicue id [type: String]
				table_name: 'loto1',  //table name [type: String]
				order: 1, 			  //table position [type: Number]
				min_user_count: 2,	  //minimum user count on game [type: Number]
				max_user_count: 4,	  //maximum user count on game [type: Number]
				is_private: false,	  //game is private or public  [type: Boolean]
				status: 'waiting',    //game status {'waiting', 'started', 'finished'} [type: String]
				users_list: ['9uew9uf3','9uew9uf3','9uew9uf3']	  	  //connected on game users list [type: Array] 
			},
			{
				id: 't872esb92ekw9',  //unicue id [type: String]
				table_name: 'loto2',  //table name [type: String]
				order: 2, 			  //table position [type: Number]
				min_user_count: 3,	  //minimum user count on game [type: Number]
				max_user_count: 4,	  //maximum user count on game [type: Number]
				is_private: true,	  //game is private or public  [type: Boolean]
				status: 'started',    //game status {'waiting', 'started', 'finished'} [type: String]
				users_list: ['9uew9uf3']	  	  //connected on game users list [type: Array] 
			},
			{
				id: 't872esd02ekw9',  //unicue id [type: String]
				table_name: 'loto3',  //table name [type: String]
				order: 3, 			  //table position [type: Number]
				min_user_count: 4,	  //minimum user count on game [type: Number]
				max_user_count: 4,	  //maximum user count on game [type: Number]
				is_private: false,	  //game is private or public  [type: Boolean]
				status: 'finished',    //game status {'waiting', 'started', 'finished'} [type: String]
				users_list: ['9uew9uf3','9uew9uf3','9uew9uf3','9uew9uf3','9uew9uf3']	  	  //connected on game users list [type: Array] 
			}
		];
var userModel=[
	{
		id: 'sdf4534tr6yty', //uniq id,
		firstname: 'John',
		lastname: 'Doe',
		email: 'example@mail.com',
		password: '354rwet2413@#fdgdf', //password hash
		gender: 'male', // male or female
		coins: 150, // count of coins
		photo_path: 'uploads/avatar.jpg' //user image path
	},
	{
		id: 'sdf4534tr6yty', //uniq id,
		firstname: 'John',
		lastname: 'Doe',
		email: 'example@mail.com',
		password: '354rwet2413@#fdgdf', //password hash
		gender: 'male', // male or female
		coins: 150, // count of coins
		photo_path: 'uploads/avatar.jpg' //user image path
	},
	{
		id: 'sdf4534tr6yty', //uniq id,
		firstname: 'John',
		lastname: 'Doe',
		email: 'example@mail.com',
		password: '354rwet2413@#fdgdf', //password hash
		gender: 'male', // male or female
		coins: 150, // count of coins
		photo_path: 'uploads/avatar.jpg' //user image path
	}
]