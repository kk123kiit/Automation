var BasicSetUp = require('../commonFile/basicSetUp.js');
var SignUpPage = require('../pages/signup.js');


describe("Signup page tetsing, ",function(){
	
	BasicSetUp.loadBrowserOnly();
	//browser.get("http://amasik.com/demo/angularjs/angular-app/#/signup");
	
	it("Verify for display of signup page, ",function(){
		SignUpPage.verifyDisplayOfSignUpPage();
	});
	
	it("Verify SignUp with valid input data, ",function(){
		SignUpPage.verifySignUpPageWithValidData();
	});
	
	it("Verify SignUp for unmatched password ",function(){
		SignUpPage.verifySignUpWithUnmatchedPassword();
	});
	
	it("Verify SignUp for any blank field, ",function(){
		SignUpPage.verifySignUpForBlankField();
	});
	
	
});