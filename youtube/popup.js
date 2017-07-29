var options ={
	type: "basic",
	title: "popup in chrome",
	message: "this is oretty cool!",
	iconUrl: 32.png
	
};

chrome.notifications.create(options, callback);

function callback(){
	console.log('popup done');
};
