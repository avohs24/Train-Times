  var config = {
    apiKey: "AIzaSyDlvxCQKZvjcCAJig09PMVORyYT0lenqrs",
    authDomain: "alex-project-5b1f2.firebaseapp.com",
    databaseURL: "https://alex-project-5b1f2.firebaseio.com",
    storageBucket: "alex-project-5b1f2.appspot.com",
    messagingSenderId: "186021086438"
  };

firebase.initializeApp(config);

var database = firebase.database();

var train = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";


$("#submit").on('click', function(event){
	event.preventDefault();

		train = $("#Train-name").val().trim();
		destination = $("#finalDestination").val().trim();
		firstTrainTime = $("#trainTime").val().trim();
		frequency = $("#freqMin").val().trim();

		$("tbody").append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" + firstTrainTime + "</td><td></td><td>" + frequency + "</td></tr>");


	database.ref().push({
		train: train,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency
	});

	database.ref().on("child_added", function(snapshot){
		console.log(snapshot.val().train);
		console.log(snapshot.val().destination);
		console.log(snapshot.val().firstTrainTime);
		console.log(snapshot.val().frequency);

		$("tbody").append("<tr><td>" + snapshot.val().train + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().firstTrainTime + "</td><td></td><td>" + snapshot.val().frequency + "</td></tr>");


	}),function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    };






})