//var SignInPage = require('../pages/signin.js');

var BasicSetUp = require('../commonFile/basicSetUp.js');
var SignInPage = require('../pages/signin.js');

describe("Signin ,", function(){
	
	/*Do  all the basic setup like login, logout */	
	//BasicSetUp.initSetUp();
	BasicSetUp.loadBrowserOnly();
	
	it("Signin ",function(){
		SignInPage.doLogin(BasicSetUp.url, BasicSetUp.emailId, BasicSetUp.pwd);
		SignInPage.logOut();
	});
	
	//Verify Form name
	it("Verify Member login is present",function(){
		SignInPage.memberLogin();
	});
	
	//Signin Field Instruction
	it("Verify Login Instruction",function(){
		SignInPage.loginInstruction();
	});
	
	//Verify header title
	it("Verify header title on siging page",function(){
		SignInPage.verifyHeaderTitle();
	});
	

});
