var BasicSetup = require('../commonFile/basicSetUp.js');
var DashBoard = require('../pages/dashboard.js');

describe("On describe page",function(){
	
	//Do login only once
	BasicSetup.initSetUp();
	
	it("Verify dashboard page is up and running", function(){
		DashBoard.verifyDashBoardUrl();
	});
	
	it("Verify dashboard Today's Status", function(){
		DashBoard.verifyTodayStatus();
	});
	

	it("Verify Important Shortcut is present", function(){
		DashBoard.verifyImpShortcut();
	});
	
	
	it("Verify Recent is present", function(){
		DashBoard.verifyRecent();
	});
	
	it("Verify Customers is present", function(){
		DashBoard.verifyCustomer();
	});
	
	it("Verify Shortcut count", function(){
		DashBoard.verifyShortcutCount();
	});
	
});