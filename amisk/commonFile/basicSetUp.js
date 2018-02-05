
var SignInPage = require('../pages/signin.js');

var BaseSetUp = function(){
	
	this.url = "http://amasik.com/demo/angularjs/angular-app/#/login";
	this.emailId = "mail2asik@gmail.com";
	this.pwd = "mypassword";

	self=this;
	
	this.initSetUpEachSpec = function(){
		beforeEach(function() {
			console.log("beforeEach");
			SignInPage.doLogin(self.url, self.emailId, self.pwd);
		});
		
		afterEach(function() {
			console.log("afterEach");
			SignInPage.logOut();
		});
	};
	
	this.initSetUp = function(){
		
		beforeAll(function(){
			console.log("beforeAll");
			SignInPage.doLogin(self.url, self.emailId, self.pwd);
		});
		
		afterAll(function(){
			console.log("afterAll");
			SignInPage.logOut();
		});
		
		//initSetUp ends here	
	};
	
	this.loadBrowserOnly = function(){
		beforeEach(function() {
			//browser.ignoreSynchronization = true;
			console.log("beforeEach in loadbrowser only");
				browser.get(self.url);
		});
	};
	//SignUpSetUp ends here	
};

module.exports = new BaseSetUp();