
var CustomerPage = function(){
	
	this.CUSTOMER_PAGE_URL = "http://amasik.com/demo/angularjs/angular-app/#/customers";
	this.customerTab = element(by.xpath("//a[@href='#/customers']/span"));
	this.customer = element(by.xpath("//div[@class='widget-header']/h3"));
	this.customerTableHeading = element.all(by.xpath("(//div[@ng-bind='parse(column.title)'])"));
	this.tabeHeaderName = [ "FIRST NAME","LAST NAME","EMAIL","PHONE","COUNTRY","VIEW"];
	this.viewButton = element.all(by.xpath("(//tr[@ng-repeat='customer in $data']//a)"));
	this.twentyFive = element(by.xpath("(//span[@class='ng-binding'])[2]"));
	this.firstNameField = element(by.xpath("(//input[@ng-model='params.filter()[name]'])[1]"));
	this.firstRowButton = element(by.xpath("(//tr[@ng-repeat='customer in $data'])[1]//a")); 
	this.EDIT_TAB_URL = "http://amasik.com/demo/angularjs/angular-app/#/edit/1";
	this.editTabFirstNameInputField = element(by.model("customer.first_name"));
	this.firstNameFieldRequired = element(by.xpath("//p[@class='validation-invalid']"));
	this.FIRST_NAME_REQUIRED = "First Name is required";
	this.editTabSaveButton = element(by.buttonText("Save"));
	this.VIEW_TAB_URL = "http://amasik.com/demo/angularjs/angular-app/#/view/1";
	this.editTabCancelButton = element(by.buttonText("Cancel"));
	this.editTab = element(by.xpath("(//a[@ng-click='select()'])[2]"));
	
	
	context = this;
	
	this.verifyCustomerPageLoading = function(){
		expect(browser.getCurrentUrl()).toEqual(context.CUSTOMER_PAGE_URL);
	};
	
	this.switchToCustomerPage = function(){
		context.customerTab.click();
	};
	
	this.verifyCustomerName = function(){
		context.customer.getText().then(function(name) {
			expect(name).toEqual("Customers");
		});
	};
	
	//Verify Customers table heading name
	this.verifyCustomerTableHeading = function(){
		context.customerTableHeading.each(function(arg,index) {
			arg.getText().then(function(name) {
				expect(name).toEqual(context.tabeHeaderName[index]);
			});
		});
	};
	
	
	//Verify View button for each row, First click on 25 pagination button then count total no of view button
	this.verifyViewButton = function(){
		context.twentyFive.click();
		expect(context.viewButton.count()).toEqual(13);
		
	};
	
	//Verify button click after passing the firstname
	this.verifyButtonClickAfterPassingFirstName = function(firstName){
		context.firstNameField.sendKeys(firstName);
		context.firstRowButton.click();
	};
	
	//Verify customer page redirects to edit tab
	this.verifyEditTab = function(){
		/*before navigate to edit tab comes back to the Customers page as we are already on edit tab
		*/
			//Back to customer page
			context.customerTab.click();
			console.log("Back to previous page by clickikng on Customers");
			context.verifyButtonClickAfterPassingFirstName("John");
			expect(browser.getCurrentUrl()).toEqual(context.EDIT_TAB_URL);
			//browser.sleep(2000);
	};
	
	//Verify blank input field on edit tab prompts an error
	this.verifyBlankInputFieldError = function(){
		context.editTabFirstNameInputField.clear();
		expect(context.firstNameFieldRequired.getText()).toEqual(context.FIRST_NAME_REQUIRED);
		//browser.sleep(2000);
	};
	
	//Verify Edit tab redirects to view tab
	this.verifyViewTab = function(){
			//var currentUrl;
			//context.editTabSaveButton.click();
			context.editTabFirstNameInputField.sendKeys("Kanhaiya");
			context.editTabSaveButton.click().then(function(){
				//browser.sleep(2000);
				expect(browser.getCurrentUrl()).toEqual(context.VIEW_TAB_URL);
			});
	
			//browser.ignoreSynchronization = false;
			//browser.sleep(2000);
			
	};
	
	//Verify edit tab navigate to previous page after click on Cancel Button
	this.verifyEditTabNavigateToCutomerPage = function(){
		//First get back to Edit tab
		context.editTab.click();
		context.editTabCancelButton.click();
		expect(browser.getCurrentUrl()).toEqual(context.CUSTOMER_PAGE_URL);
		//browser.sleep(2000);
	};
	
};

module.exports = new CustomerPage();