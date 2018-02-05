var AddCustomer = require('../pages/addCustomer.js');
var BasicSetUp = require('../commonFile/basicSetUp.js');


describe("Add cutomer testing, ",function(){
	//Login to Amisk.com and Log out once all the spec execute successfully. 
	BasicSetUp.initSetUp();
	
	//Verify for display of customer page
	it("Verify for display of customer page, ",function(){
		AddCustomer.verifyDisplayOfAddCustomerPage();
	});
	
	//Verify add customer form with valid input data
	it("Verify add customer form with valid input data, ",function(){
		AddCustomer.verifyAddCustomerFormSubmitWithValidData();
	});
	
	it("Verify add customer form with valid input data and click on cancel button",function(){
		AddCustomer.verifyCustomerFormWithValidDataCancelButton();
	});
	
	it("Verify add customer form submition with any blank field having * sign",function(){
		AddCustomer.verifyCustomerFormWithBlankField();
	});
	
});

