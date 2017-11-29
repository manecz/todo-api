const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) return ('unable to connect');
	console.log('connected to db');


	db.collection('users')
	.find({name: 'Emanuel'})
	.toArray()
	.then((docs) => {
		console.log(docs);
	}, (error) => {
		console.log(error);
	});
});