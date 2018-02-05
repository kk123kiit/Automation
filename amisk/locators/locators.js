var Locator = function(){
	
	//Locators
	this.dashBoard = element(by.xpath("//a[@href='#/dashboard']/span"));
	this.addCustomerTab = element(by.xpath("//a[@href='#/addCustomer']/span"));
	this.customerTab = element(by.xpath("//a[@href='#/customers']/span"));
	this.reportTab = element(by.xpath("//a[@href='#/reports']/span"));
	this.brand = element(by.xpath("(//a[@class='brand'])[2]"));
	this.searchBar = element(by.xpath("//input[@class='search-query']"));
	this.accountLocator = element(by.xpath("(//a[@class='dropdown-toggle'])[1]"));
	this.welcomeAmisk   = element(by.xpath("(//a[@class='dropdown-toggle'])[2]"));
	this.userIcon = element(by.xpath("//i[@class='icon-user']"));
	//Awesome xpath written for settingTab
	this.settingTab = element(by.xpath("(//ul[@class='mainnav']/li)[5]//span"));
	this.othersTab =  element(by.xpath("(//ul[@class='mainnav']/li)[6]//span"));
	this.othersTabMenu = element.all(by.xpath("(//ul[@class='mainnav']/li)[6]//li//a"));
	this.MENU = ["Icons","FAQ","Pricing Plans","Login","Signup","404"];
	
	
	//for Setting (//li[@class='dropdown']/ul[@class='dropdown-menu']/li)[1]
	//for Help (//li[@class='dropdown']/ul[@class='dropdown-menu']/li)[2]
	this.help =    element(by.xpath("(//ul[@class='dropdown-menu'])[1]/li[2]/a"));
	this.setting = element(by.xpath("(//ul[@class='dropdown-menu'])[1]/li[1]/a"));
	this.profile = element(by.xpath("(//ul[@class='dropdown-menu'])[2]/li[1]/a"));
	this.logOut =  element(by.xpath("(//ul[@class='dropdown-menu'])[2]/li[2]/a"));
	
	
	//this.footer = element(by.xpath("//div[@class='footer ng-scope']"));
	//or use above xpath
	this.footer = element(by.css(".footer.ng-scope"));
	this.amiskUrl = element(by.xpath("//a[@href='http://www.amasik.com/']"));
	this.footerUrlHeader = element(by.xpath("//a[@title='Alias configuration settings in apache' and @rel='bookmark']"));
	
	
	//SignUp page locator
	this.signUpUrl = "http://amasik.com/demo/angularjs/angular-app/#/signup";
	this.doNotHaveAnAccount = element(by.xpath("//a[@href='#/signup']"));
	this.signUpFormHeading = element(by.xpath("//form[@name='signupForm']/h1"));
	this.signUpFirstName = element(by.model("signup.firstname"));
	this.signUpLastName = element(by.model("signup.lastname"));
	this.signUpEmail = element(by.model("signup.email"));
	this.signUpPwd  = element(by.model("signup.password"));
	this.signUpConfirmPwd = element(by.id("confirm_password"));
	this.signUpCheckBox = element(by.xpath("//label[@class='choice']"));
	this.suignUpRegisterButton = element(by.buttonText("Register"));
	this.signUpFirstNameRequired = element(by.xpath("(//p[@class='validation-invalid'])[1]"));
	this.SIGNUP_FIRST_NAME_IS_REQUIRED = "First Name is required";
	
	
	//Constants
	this.HEADER_NAME = "AngularJS Framework with Bootstrap Template";
	this.DASHBOARD_PAGE_URL = "http://amasik.com/demo/angularjs/angular-app/#/dashboard";
	this.REPORT_PAGE_URL = "http://amasik.com/demo/angularjs/angular-app/#/reports";
	this.CUSTOMERS_PAGE_URL = "http://amasik.com/demo/angularjs/angular-app/#/customers";
	this.ADD_CUSTOMER_PAGE_URL = "http://amasik.com/demo/angularjs/angular-app/#/addCustomer";
		
};

module.exports = new Locator();