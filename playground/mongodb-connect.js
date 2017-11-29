//const MongoClient = require('mongodb').MongoClient;

//object destructing E6
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if(error) return ('Unnable to connect');

	console.log('Connected to mongo');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (error, result) => {
	// 	if (error) return console.log('Unable to insert todo', error);
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	db.collection('users').insertOne({
		name: 'Rita',
		age: '30',
		location: 'Faro'
	}, (error, result) => {
		if(error) return console.log('Unable to insert user', error);
		console.log(JSON.stringify(result.ops, undefined, 3));
	})

	db.close();
});