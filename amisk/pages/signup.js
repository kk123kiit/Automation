/*
 *Developed on 07-11-2017 By Kanahiya Kumar 
 * 
 */
 
var Locator = require('../locators/locators.js');
var SignUpPage = function(){
	
	context = this;
	
	//Load the Signup page
	this.loadSignUpPage =function(){
		Locator.doNotHaveAnAccount.click();
	};
	
	//Verify for display of Signup page
	this.verifyDisplayOfSignUpPage = function(){
		//Click on  
		context.loadSignUpPage();
		expect(browser.getCurrentUrl()).toEqual(Locator.signUpUrl);
	};
	
	//Verify SignUp with valid input data,
	this.verifySignUpPageWithValidData = function(){
		
		context.loadSignUpPage();
		Locator.signUpFirstName.sendKeys("Aman");
		Locator.signUpLastName.sendKeys("Raj");
		Locator.signUpEmail.sendKeys("aman@gmail.com");
		Locator.signUpPwd.sendKeys("123@aman");
		Locator.signUpConfirmPwd.sendKeys("123@aman");
		Locator.signUpCheckBox.click();
		expect(Locator.signUpCheckBox.isDisplayed()).toBe(true);
		Locator.suignUpRegisterButton.click();
		
	};
	
	//Verify SignUp for unmatched password 
	this.verifySignUpWithUnmatchedPassword = function(){
		
		context.loadSignUpPage();
		Locator.signUpFirstName.sendKeys("Aman");
		Locator.signUpLastName.sendKeys("Raj");
		Locator.signUpEmail.sendKeys("aman@gmail.com");
		Locator.signUpPwd.sendKeys("123@aman");
		Locator.signUpConfirmPwd.sendKeys("1@aman");
		Locator.signUpCheckBox.click();
		expect(Locator.signUpCheckBox.isDisplayed()).toBe(true);
		Locator.suignUpRegisterButton.click();
	};
	
	//Verify SignUp for any blank field,
	this.verifySignUpForBlankField = function(){
		
		context.loadSignUpPage();
		//Locator.signUpFirstName.sendKeys("Aman");
		Locator.signUpLastName.sendKeys("Raj");
		Locator.signUpEmail.sendKeys("aman@gmail.com");
		Locator.signUpPwd.sendKeys("123@aman");
		Locator.signUpConfirmPwd.sendKeys("1@aman");
		Locator.signUpCheckBox.click();
		expect(Locator.signUpCheckBox.isDisplayed()).toBe(true);
		Locator.suignUpRegisterButton.click();
		expect(Locator.signUpFirstNameRequired.getText()).
		toEqual(Locator.SIGNUP_FIRST_NAME_IS_REQUIRED);
	};
};

module.exports = new SignUpPage();