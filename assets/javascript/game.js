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


// event listener listen for clicks on the charcter IMG
// if chosen then append to the yourCharacter class div
	$('.button').on('click', function() {
		if (userPick == ""){
			userPick = this.value;
			if (userPick == fbClick){
				userPick = $('.facebook');
			}
			$(userPick).appendTo('.yourCharacter');
		} else {
			userVs = this.value;
			$(userVs).appendTo('.vsCharacter');
		}
		console.log(userPick);
		console.log(userVs);

	});


// if not chosen then remaining container divs appendTo() vsCharacter
function userOptionVS(){
	$('.container').appendTo('.vsCharacter');
	// $('.container').css('background-color', "red");
};

// create function that plugs in user picked into attckBtn function

// function attackBtnClick(){
// 	$('#attckBtn').on('click', function(){
// 		if (userPick == facebook){

// 		}
// 	};


// }



// once attackBtn is clicked run a function