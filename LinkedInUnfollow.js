// Navigate to My Network => Following and Followers.
// Copy this JS snippet and paste it into console of your browser.
// Scroll down the list of connection you are following.
// Use with caution. This will unfollow everyone.
// Refresh page when done.

function unfollowEveryone(){
	const spanTags = document.querySelectorAll('span');
	
	spanTags.forEach(isFollowing)
	
	function isFollowing(currentElement){
		if(currentElement.outerText == 'Following'){
			currentElement.click();
			setTimeout(unfollowClick, 500);
		}
	}
}

function unfollowClick(){
	const innerSpanTags = document.querySelectorAll('span');
	
	innerSpanTags.forEach(unfollow)
	
	function unfollow(currentElement){
		if(currentElement.outerText == 'Unfollow'){
			currentElement.click();
		}
	}
}
	
setInterval(unfollowEveryone, 1000);
