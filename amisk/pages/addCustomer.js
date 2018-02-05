/*
Developed on 11-06-2017

*/
var AddCustomerPage = function(){
	

	
	this.addCustomerTab = element(by.xpath("//a[@href='#/addCustomer']/span"));
	this.addCustomerUrl = "http://amasik.com/demo/angularjs/angular-app/#/addCustomer";
	this.firstName = element(by.model("customer.first_name"));
	this.lastName = element(by.model("customer.last_name"));
	this.customerEmail = element(by.model("customer.email"));
	this.customerPhone = element(by.model("customer.phone"));
	this.customerBio = element(by.model("customer.bio"));
	//this.selectCountry = element.all(by.xpath("//*[@ng-model ='customer.country']/option"));
	this.selectOption = element(by.model("customer.country")).all(by.tagName('option'));
	//this.selectOption = element(by.model("customer.country")).element(by.css('[value="United Kingdom"]'));
	this.selectCountry = element(by.tagName('option'));
	this.saveButton = element(by.buttonText("Save"));
	this.cancelButton = element(by.buttonText("Cancel"));
	this.LAST_NAME_REQUIRED = "Last Name is required";
	this.lastNameErrorPath = element(by.xpath("(//p[@class='validation-invalid'])[1]"));
	
	context = this;
	
	//Verify for display of customer page
	this.verifyDisplayOfAddCustomerPage = function(){
		//click on AddCustomer page
		context.addCustomerTab.click();
		expect(browser.getCurrentUrl()).toEqual(context.addCustomerUrl);
	};
	
	//Verify add customer form with valid input data
	this.verifyAddCustomerFormSubmitWithValidData = function(){
		
		context.firstName.sendKeys("Aman");
		context.lastName.sendKeys("Raj");
		context.customerEmail.sendKeys("aman@gmail.com");
		context.customerPhone.sendKeys("121211212");
		context.selectOption.get(2).click();
//		context.selectOption.each(function(text,index){
//			text.getText().then(function(data) {
//				console.log(data+" "+index);
//			});
//		});
		//browser.sleep(2000);
		context.saveButton.click();
	};
	
	//Verify add customer form with valid input data and click on cancel button
	this.verifyCustomerFormWithValidDataCancelButton = function(){
		
		//Get back to AddCustomer Page
		context.addCustomerTab.click();
		context.firstName.sendKeys("Aman");
		context.lastName.sendKeys("Raj");
		context.customerEmail.sendKeys("aman@gmail.com");
		context.customerPhone.sendKeys("121211212");
		context.selectOption.get(2).click();
		context.cancelButton.click();
		//browser.sleep(5000);
	};
	
	//Verify add customer form submition with any blank field having * sign
	this.verifyCustomerFormWithBlankField = function(){
		
		//Left the lastname blank
		//Get back to AddCustomer page
		context.addCustomerTab.click();
		context.firstName.sendKeys("Aman");
		context.customerEmail.sendKeys("aman@gmail.com");
		context.customerPhone.sendKeys("121211212");
		context.selectOption.get(2).click();
		context.saveButton.click();
		expect(context.lastNameErrorPath.getText()).toEqual(context.LAST_NAME_REQUIRED);
		
	};
	
};


module.exports = new AddCustomerPage();