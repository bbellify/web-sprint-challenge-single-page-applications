

describe('Pizza Site and Form', () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    // Getters
    const nameInput = () => cy.get('input[name=name]');
    const sizeBox = () => cy.get('select[name=size')
    const pepperoniBox = () => cy.get('input[name=pepperoni]');
    const olivesBox = () => cy.get('input[name=olives]');
    const broccoliBox = () => cy.get('input[name=broccoli]');
    const mushroomsBox = () => cy.get('input[name=mushrooms]');
    const specialTextInput = () => cy.get('input[name=specialText]');
    const submitButton = () => cy.get('button[id=order-button]');
    const pizzaButton = () => cy.get('a[id=order-pizza');


    describe('can add text to inputs', () => {


        it('can enter text in name box', () => {
            pizzaButton().click();

            nameInput()
                .should('have.value', '')
                .type('first name')
                .should('have.value', 'first name')
        })

        it('can enter text in special text box', () => {
            pizzaButton().click();

            specialTextInput()
                .should('have.value', '')
                .type('extra pepperoni')
                .should('have.value', 'extra pepperoni')
        })
    })

    describe('can select multiple toppings', () => {
      
        it('can check multiple toppings', () => {
            pizzaButton().click();

            pepperoniBox()
                .check();
            olivesBox()
                .check()
            broccoliBox()
                .check();
            mushroomsBox()
                .check();

            pepperoniBox()
                .uncheck();
            olivesBox()
                .uncheck()
            broccoliBox()
                .uncheck();
            mushroomsBox()
                .uncheck();
        })
    })

    describe('submit form works', () => {
        
        it('can submit an order', () => {
            pizzaButton().click();

            nameInput().type('name');
            sizeBox().select('small')
            submitButton().click();
            nameInput().should('have.value', '')
        })
    })
})