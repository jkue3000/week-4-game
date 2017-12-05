// life points and attack points of each character

// CREATE OBECTS FOR THE CHARACETRS
var snapchatLifePoints = 100;
var facebookLifePoints = 155;
var twitterLifePoints = 120;
var instagramLifePoints = 115;

var snapchatAttackPoint = 11;
var facebookAttackPoint = 9;
var twitterAttackPoint = 12;
var instagramAttackPoints = 7;

var userPick = "";
var userVs = "";

var instagram = $('.instagram');
var facebook = $('.facebook');
var twitter = $('.twitter');
var snapchat = $('.snapchat');

chosenCharacter();

// event listener listen for clicks on the charcter IMG
// if chosen then append to the yourCharacter class div
function chosenCharacter(){
	
	facebook = $('.facebook');
	$('.facebook').on('click', function() {
		$('.facebook').appendTo('.yourCharacter');
		$('userPick').push(facebook);
	});

	snapchat = $('.snapchat');
	$('.snapchat').on('click', function() {
		$('.snapchat').appendTo('.yourCharacter');
		$('userPick').push(snapchat);
	});

	twitter = $('.twitter');
	$('.twitter').on('click', function() {
		$('.twitter').appendTo('.yourCharacter');
		$('userPick').push(twitter);
	});

	instagram = $('.instagram');
	$('.instagram').on('click', function() {
		$('.instagram').appendTo('.yourCharacter');
		$('userPick').push(instagram);
	});

};

// if not chosen then remaining container divs appendTo() vsCharacter
function userOptionVS(){
	$('.container').appendTo('.vsCharacter');
	// $('.container').css('background-color', "red");
};

// user choice of who has to be click to be the the chosenVs
function chosenVs(){
	$('.facebook').on('click', function() {
		$('.facebook').appendTo('.defender');
	});

	$('.snapchat').on('click', function() {
		$('.snapchat').appendTo('.defender');
	});

	$('.twitter').on('click', function() {
		$('.twitter').appendTo('.defender');
	});

	$('.instagram').on('click', function() {
		$('.instagram').appendTo('.defender');
	});
};


// create function that plugs in user picked into attckBtn function

$('#attckBtn').on('click', function() {
    if (userPick == facebook) {
        facebookLifePoints;
        facebookAttackPoint;
        $('#facebookLifePoints').innerHTML('facebookLifePoints');
    
    } else if (userPick == $('.snapchat')){
        
    }
});

// once attackBtn is clicked run a function