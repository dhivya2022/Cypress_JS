/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice - _02_Cypress_DataDriveFromFixtures',function(){

  before(() => {
    // runs once before all tests in the block
    //cy.fixture('03_RS-AngularPractice.json')
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
  beforeEach(() => {
    // runs before each test in the block
  })

    it('Test case for Data-Drive from Fixtures',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        // cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
        cy.get(':nth-child(1) > .form-control').type(this.testData_AngularPractice.name)

        // cy.get('select').select('Male')
        cy.get('select').select(this.testData_AngularPractice.gender)

    })//if

    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })
      
  
})//describe