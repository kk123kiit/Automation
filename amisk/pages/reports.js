
var ReportPage = function(){
	
	this.reportPageUrl = "http://amasik.com/demo/angularjs/angular-app/#/reports";
	this.reportTab = element(by.xpath("//a[@href='#/reports']/span"));
	this.customerText = element(by.xpath("(//div[@class='widget-header']/h3)[1]"));
	this.ordersText = element(by.xpath("(//div[@class='widget-header']/h3)[2]"));
	
	context = this;
	
	//Verify for display of reports page
	this.verifyReportsPageIsDisplayed = function(){
		context.reportTab.click();
		expect(browser.getCurrentUrl()).toEqual(context.reportPageUrl);
	};
	
	//Verify reports page contains customers and orders 
	this.verifyPresenceOfCustomersaAndOrders = function(){
		expect(context.customerText.getText()).toEqual("Customers");
		expect(context.ordersText.getText()).toEqual("Orders");
	};
	
};

module.exports = new ReportPage();