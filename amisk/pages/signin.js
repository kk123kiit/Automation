/*Cretaed By Kanhaiya Kumar On Thursday 11-02-2017.
 * */


/*Using an Object Constructor*/

var SignInPage = function(){
	
	var self = this;
	
	//Locators on signin page
	this.emailId = element(by.model("login.email"));
	this.pwd = element(by.model("login.password"));
	this.signInButton = element(by.buttonText("Sign In"));
	this.checkBox = element(by.xpath("//input[@type='checkbox']"));
	this.userIcon = element(by.xpath("//i[@class='icon-user']"));
	this.signOut = element(by.xpath("(//ul[@class='dropdown-menu'])[2]//li[2]/a"));
	this.loginFormName = element(by.xpath("//form[@name='loginForm']/h1"));
	this.loginFieldInst = element(by.xpath("//div[@class='login-fields']/p"));
	this.headerTitle = element(by.xpath("//a[@href='index.html']"));
	
	
	
	this.doLogin = function(url, userEmail, userPwd){
		
		browser.get(url);
		self.emailId.clear();
		self.emailId.sendKeys(userEmail);
		self.pwd.clear();
		self.pwd.sendKeys(userPwd);
		self.checkBox.click();
		self.signInButton.isDisplayed().click();
		
	};
	
	this.logOut = function(){
		self.userIcon.click();
		self.signOut.click();
		browser.sleep(3000);
		
	};
	
	//Verify Form name
	this.memberLogin = function(){
		expect(self.loginFormName.getText()).toEqual("Member Login");
		browser.sleep(1000);
	};
	
	//Verify signin Field Instruction
	this.loginInstruction = function(){
		expect(self.loginFieldInst.getText()).toEqual("Please provide your details");
		browser.sleep(1000);
	};
	
	//Verify header title on signin page
	this.verifyHeaderTitle = function(){
		expect(self.headerTitle.getText()).toEqual("AngularJS Framework with Bootstrap Template");
	};
	
	this.verifyViewButton = function(){
		expect(context.viewButton.count()).toEqual(13);
	};
};

module.exports = new SignInPage();
