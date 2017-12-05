// CREATE OBECTS FOR THE CHARACETRS

var facebook ={
	lifePoints: 155,
	attackPoints: 9

};

var instagram ={
	lifePoints: 115,
	attackPoints: 7
};

var twitter={
	lifePoints: 120,
	attackPoints: 12
};

var snapchat ={
	lifePoints: 100,
	attackPoints: 11
};

var userPick = "";
var userVs = "";

// var instagram = $('.instagram');
// var facebook = $('.facebook');
// var twitter = $('.twitter');
// var snapchat = $('.snapchat');

chosenCharacter();

// event listener listen for clicks on the charcter IMG
// if chosen then append to the yourCharacter class div
function chosenCharacter(){
	
	$('.facebook').on('click', function() {
		$('.facebook').appendTo('.yourCharacter');
		userPick =+ facebook;

	});

	$('.snapchat').on('click', function() {
		$('.snapchat').appendTo('.yourCharacter');
		userPick.push(snapchat);
	});

	$('.twitter').on('click', function() {
		$('.twitter').appendTo('.yourCharacter');
		userPick.push(twitter);
	});

	$('.instagram').on('click', function() {
		$('.instagram').appendTo('.yourCharacter');
		userPick.push(instagram);
	});

};
console.log(userPick);

// if not chosen then remaining container divs appendTo() vsCharacter
function userOptionVS(){
	$('.container').appendTo('.vsCharacter');
	// $('.container').css('background-color', "red");
};

// user choice of who has to be click to be the the chosenVs
function chosenVs(){
	$('.facebook').on('click', function() {
		$('.facebook').appendTo('.defender');
		userVs.push(facebook);
	});

	$('.snapchat').on('click', function() {
		$('.snapchat').appendTo('.defender');
		userVs.push(snapchat);
	});

	$('.twitter').on('click', function() {
		$('.twitter').appendTo('.defender');
		userVs.push(twitter);
	});

	$('.instagram').on('click', function() {
		$('.instagram').appendTo('.defender');
		userVs.push(instagram);
	});
};


// create function that plugs in user picked into attckBtn function

// function attackBtnClick(){
// 	$('#attckBtn').on('click', function(){
// 		if (userPick == facebook){

// 		}
// 	};


// }



// once attackBtn is clicked run a function