var Header = require('../pages/header.js');
var BasicInit = require('../commonFile/basicSetUp.js');

describe("Testing Header Content, ",function(){
	
	BasicInit.initSetUpEachSpec();
	
	it("Verify headrer contains " +
	"AngularJS Framework with Bootstrap Template for all the pages, ",function(){
		
		Header.verifyHeaderName();
		
	});

	it("Verify header contains Dashboard, " +
	"Reports, Customers, Add Customer, Settings and Others" +
	"for each page once login is done.", function(){
		Header.verifyHeaderTabs();
	});
	
	
	it("Verify header contain search field, " +
			"Setting and  Welcome Asik! for each page ",function(){
		Header.verifySearchAccountAndUserOnEachPage();
	});
	

});