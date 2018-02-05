describe("Demo App", function() {
	it("First Test Case",function(){
		browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");
		element(by.buttonText("Sign In")).click();
		
		expect(element(by.xpath("(//div[@class='widget-header'])[3]/h3")).getText()).toEqual("Important Shortcuts");
		browser.sleep(3000);
	});

});