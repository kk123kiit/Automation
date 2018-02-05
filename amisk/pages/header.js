/*created on Tuesday 07-11-2017
 * */
var Locator = require('../locators/locators.js');
var Header = function(){
	
	
	//Verify headrer contains AngularJS Framework with Bootstrap Template for all the pages
	context = this;
	
	this.verifyHeaderName = function(){
		
		//Check header name at Dashboard page
		expect(Locator.brand.getText()).toEqual(Locator.HEADER_NAME);
		
		//Click on Reports tab
		Locator.reportTab.click();
		expect(Locator.brand.getText()).toEqual(Locator.HEADER_NAME);
		
		//Click on Customers tab
		Locator.customerTab.click();
		expect(Locator.brand.getText()).toEqual(Locator.HEADER_NAME);
		
		//Click on Add Customer tab
		Locator.addCustomerTab.click();
		expect(Locator.brand.getText()).toEqual(Locator.HEADER_NAME);
		
	};
	
	//Verify header tab contain different tab as mention below
	this.verifyHeaderTabs = function(){
		
		//Verify Dashboard page
		expect(browser.getCurrentUrl()).toEqual(Locator.DASHBOARD_PAGE_URL);
		
		//Verify Report Page
		Locator.reportTab.click();
		expect(browser.getCurrentUrl()).toEqual(Locator.REPORT_PAGE_URL);
		
		//Verify Customers page
		Locator.customerTab.click();
		expect(browser.getCurrentUrl()).toEqual(Locator.CUSTOMERS_PAGE_URL);
		
		//Verify Add Customer page
		Locator.addCustomerTab.click();
		expect(browser.getCurrentUrl()).toEqual(Locator.ADD_CUSTOMER_PAGE_URL);
		
		//Verify Setting Tab
		expect(Locator.settingTab.getText()).toEqual("Settings");
		
		//Verify Others Tab
		expect(Locator.othersTab.getText()).toEqual("Others");
		
		//Verify others menu
		Locator.othersTab.click();
		Locator.othersTabMenu.each(function(anchor,index){
			anchor.getText().then(function(menuData){
				expect(menuData).toEqual(Locator.MENU[index]);
			});
		});
		
	};
	
	//Verify Header content
	this.verifySearchAccountAndUser = function(){
		
		//Expect SearchBar is present
		expect(Locator.searchBar.isPresent()).toBe(true);
		
		//Expect Account name is present
		expect(Locator.accountLocator.getText()).toEqual("Account");
		
		//Expect Welcome Amisk! is present
		expect(Locator.welcomeAmisk.getText()).toEqual("Welcome Asik!");
		
		//Click on Account and open the drop-down
		Locator.accountLocator.click();
		
		//Check Help
	    Locator.help.getText().then(function(helpText) {
			expect(helpText).toEqual("Help");
		});
	    
	    //Check Setting
	    Locator.setting.getText().then(function(settingText) {
	    	expect(settingText).toEqual("Settings");
	    });
	
	    
	    //Click on Account and close the drop-down
		Locator.accountLocator.click();
	    
	    //click on Welcome Asik! and open the drop-down
	    Locator.welcomeAmisk.click();
	 
	    Locator.profile.getText().then(function(profileText) {
	    	expect(profileText).toEqual("Profile");
	    });
	    
	    //Check Logout
	    Locator.logOut.getText().then(function(logOutText) {
	    	expect(logOutText).toEqual("Logout");
	    });
	    
	    //close Welcome Asik! drop down
	    Locator.welcomeAmisk.click();
	   // browser.sleep(2000);
	    
	};
	
	//Verify header contain search field, Setting and  Welcome Asik! for each page
	this.verifySearchAccountAndUserOnEachPage = function(){
		
		context.verifySearchAccountAndUser();
		
		//Click on report page
		Locator.reportTab.click();//then(function(arg0) {
			context.verifySearchAccountAndUser();
		//});
		
		//Click on customer page
		Locator.customerTab.click();//.then(function(arg0) {
			context.verifySearchAccountAndUser();
		//});
		
		//Click on AddCustomer page
		Locator.addCustomerTab.click();//.then(function(arg0) {
			context.verifySearchAccountAndUser();
		//});
	};
	
	
};


module.exports = new Header();