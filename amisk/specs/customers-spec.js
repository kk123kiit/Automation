var Customers =  require('../pages/customers.js');
var BasicSetUp = require('../commonFile/basicSetUp.js');

describe("Customer page tetsing",function(){
	
	BasicSetUp.initSetUp();
	
	it("Verify for display of customer page ",function(){
		Customers.switchToCustomerPage();
		Customers.verifyCustomerPageLoading();
	});
	
	it("Verify customer form contain " +
	   "Firstname, LastName, Email, Phone, Country, " +
	   "VIEW as the table heading",function(){
		Customers.verifyCustomerTableHeading();
	});
	
	it("Verify each row of customers table has only one View button",function(){
		Customers.verifyViewButton();
	});
	
	it("Verify button click after passing Firstname as input",function(){
		Customers.verifyButtonClickAfterPassingFirstName("John");
	});
	
	it("Verify customer page redirects to edit tab",function(){
		console.log("Calling Verify Edit tab fun");
		Customers.verifyEditTab();
		console.log("Edit tab has found");
	});
	
	it("Verify blank input field on edit tab prompts an error",function(){
		Customers.verifyBlankInputFieldError();
	});
	
	it("Verify Edit tab redirects to view tab",function(){
		Customers.verifyViewTab();
	});
	
	it("Verify edit tab navigate to previous page after click on Cancel",function(){
		Customers.verifyEditTabNavigateToCutomerPage();
	});
	
});