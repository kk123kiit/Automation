exports.config = {
		//seleniumAddress: process.env.seleniumServer,
		directConnect: true,
		   
		specs: ['amisk/specs/footer-spec.js'],
		//seleniumServerJar:"../node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar",
		//seleniumPort:4565,
		
		//baseURl: "http://amasik.com/demo/angularjs/angular-app/#/login",
		
		capabilities: {
			    'browserName': 'chrome',
		},
		
		beforeLaunch : function(){
			console.log("beforeLaunch");
		},
		
		onPrepare : function(){
			console.log("onPrepare");
			
			return global.browser.getProcessedConfig().then(function(config) {
				
				browser.driver.manage().timeouts().implicitlyWait(10000);
				browser.manage().window().maximize();
				
			});
		},
		
		onComplete: function(){
			console.log("onComplete");
		},
		
		onCleanUp : function(){
			console.log("onCleanUp");
		},
		
		afterLaunch: function(){
			console.log("afterLaunch");
		}
		
};