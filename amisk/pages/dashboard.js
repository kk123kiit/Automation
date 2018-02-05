
var DashBoard = function(){
	
	this.dashBoardUrl = "http://amasik.com/demo/angularjs/angular-app/#/dashboard";
	this.todayStatus = element(by.xpath("(//div[@class='widget-header'])[1]/h3"));
	this.impShortcut = element(by.xpath("(//div[@class='widget-header'])[3]/h3"));
	this.recent = element(by.xpath("(//div[@class='widget-header'])[2]/h3"));
	this.customers = element(by.xpath("(//div[@class='widget-header'])[4]/h3"));
	this.shortcutCount = element.all(by.css(".shortcuts a"));
	this.shortCutName = ["Apps","Bookmarks","Reports","Comments","Users","Notes","Photos","Tags"];
	//or
	//this.shortcutCount = element.all(by.xpath("//div[@class='shortcuts']/a"));
	
	context = this;
	
	/*Note- url will be different if we signin without clicking the checkbox*/
	//Verify DashBoard page is up and running by checking the url
	this.verifyDashBoardUrl = function(){
		//browser.getCurrentUrl().then(function(textUrl){
			expect(browser.getCurrentUrl()).toEqual(context.dashBoardUrl);
		//});
	};
	
	this.verifyTodayStatus = function(){
		expect(context.todayStatus.getText()).toEqual("Today's Stats");
	};
	
	this.verifyImpShortcut = function(){
		expect(context.impShortcut.getText()).toEqual("Important Shortcuts");
	};
	
	this.verifyRecent = function(){
		expect(context.recent.getText()).toEqual("Recent News");
	};
	
	this.verifyCustomer = function(){
		expect(context.customers.getText()).toEqual("Customers");
	};
	
	//Count the total shortcut and verify name of each shortcut
	this.verifyShortcutCount = function(){
		//Either compare count in expect or resolve the promise and then find length
		expect(context.shortcutCount.count()).toBe(8);
		
		//resolve the promise and check the internal shortcu name
		context.shortcutCount.each(function(arg,index) {
			//Each arg is an anchor elemnt
			arg.getText().then(function(text) {
				//console.log("Arg["+index+"]="+text);
				expect(text).toEqual(context.shortCutName[index]);
			});
			//instead of resolving promise and then comparing, we can compare without resolving promise.
			expect(arg.getText()).toEqual(context.shortCutName[index]);
			
		});
	};
	
};

module.exports = new DashBoard();