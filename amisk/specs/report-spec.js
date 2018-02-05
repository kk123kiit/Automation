/*
Developed on 11-06-2017 by Kanhaiya Kumar 
*/

var ReportPage = require('../pages/reports.js');
var BasicSetUp = require('../commonFile/basicSetUp.js');

describe("ReportPage testing, ",function(){
	
	BasicSetUp.initSetUp();
	
	it("Verify for display of reports page ,",function(){
		ReportPage.verifyReportsPageIsDisplayed();
	});
	
	it("Verify reports page contains customers and orders, ",function(){
		ReportPage.verifyPresenceOfCustomersaAndOrders();
	});
});