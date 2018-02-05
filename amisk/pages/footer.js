var Locator = require('../locators/locators.js');

var Footer = function(){
	
	//Verify footer is available on each page, 
	this.verifyFooterOnEachPage = function(){
		
		//On Dashboard page
		expect(Locator.footer.isPresent()).toBe(true);
		
		//Click on reports page
		Locator.reportTab.click();
		expect(Locator.footer.isPresent()).toBe(true);
		
		//Click on customer page
		Locator.customerTab.click();
		expect(Locator.footer.isPresent()).toBe(true);
		
		//Click on AddCustomer page
		Locator.addCustomerTab.click();
		expect(Locator.footer.isPresent()).toBe(true);
	};
	
	//Verify '@2015 amasik.com' is present at inner footer and clickable,
	this.verifyAmiskUrlOnEachPage = function(){
		
		
		//On Dashboard page
		Locator.dashBoard.click();
		expect(Locator.amiskUrl.isPresent()).toBe(true);
		
		//Click on reports page
		Locator.reportTab.click();
		expect(Locator.amiskUrl.isPresent()).toBe(true);
		
		//Click on customer page
		Locator.customerTab.click();
		expect(Locator.amiskUrl.isPresent()).toBe(true);
		
		//Click on AddCustomer page
		Locator.addCustomerTab.click();
		expect(Locator.amiskUrl.isPresent()).toBe(true);
		
	};
	
	//Verify Header text for after click on Amisk.com link
	this.verifyFooterLinkHeaderText = function(){
				
			
				
				browser.waitForAngular().then(function(arg0) {
					//It add the console.log to control flow queue
					console.log("---Before click on Url-----");
				});
				
				browser.controlFlow().execute(function() {
					console.log("----Before Click controlFlow----");
				});	
				
				Locator.amiskUrl.click();
				//browser.ignoreSynchronization = true;
				
				browser.controlFlow().execute(function() {
					console.log("--Before getting browser---");
				});	
				
				browser.driver.findElement(by.xpath("//a[@title='Alias configuration settings in apache' and @rel='bookmark']")).getText().then(function(text) {
				   //Locater.footerUrlHeader.getText().then(function(text){
					console.log("Inside promise-1");
					console.log(text);
					console.log("Inside promise-2");
				});
				
				browser.controlFlow().execute(function() {
					console.log("After getting browser");
				});	
				
				//browser.ignoreSynchronization = false;
	};
	
};

module.exports = new Footer();
