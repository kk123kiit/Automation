var Footer = require('../pages/footer.js');
var BasicSetUp = require('../commonFile/basicSetUp.js');

describe("Testing footer page",function(){
	
	BasicSetUp.loadBrowserOnly();
	//BasicSetUp.initSetUpEachSpec();
	
	it("Verify footer is available on each page, ",function(){
		Footer.verifyFooterOnEachPage();
	});
	
	it("Verify '@2015 amasik.com' is present at inner footer and clickable, ",function(){
		Footer.verifyAmiskUrlOnEachPage();
	});
	
	fit("Verify header text after click on Amisk.com link ",function(){
		Footer.verifyFooterLinkHeaderText();
	});
	
});