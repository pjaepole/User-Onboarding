describe("User Onboading app", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    })

    //helper grabbing dom elems
        //inputs
    const usernameInput =()=>cy.get('input[name=username]');
    const firstnameInput=()=>cy.get('input[name=first_name]');
    const lastnameInput=()=>cy.get('input[name=last_name]');
    const emailInput=()=>cy.get('input[name=email]');
    const passwordInput=()=>cy.get('input[name=password]');
        //submit button
    const submitButton =()=>cy.get('button[name=submit]');
        //checkbox
    const tosCheckbox=()=>cy.get('input[name=tos]');

    it('sanity check just like guided project',()=>{
        expect( 1+2).to.equal(3);
        expect(2+2).not.to.equal(5); //strict equality ===
        expect({}).not.to.equal({});// strict !===
        expect({}).to.eql({});
    })

    it('checking all my elements are showing up in the cypress',()=>{
        usernameInput().should('exist');
        firstnameInput().should('exist');
        lastnameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitButton().should('exist');
        tosCheckbox().should('exist');
    })
    

    describe('get the elements and type value in it',()=>{
        it('get name input and type a name in it',()=>{
            usernameInput()
            .should('have.value','')
            .type('name1234asdf')
            .should('have.value','name1234asdf')
        })
        it('get email input and type a email in it',()=>{
            emailInput()
            .should('have.value','')
            .type('name1234asdf@gmail.com')
            .should('have.value','name1234asdf@gmail.com')
        })
        it('get password input and type a password in it',()=>{
            passwordInput()
            .should('have.value','')
            .type('name1234asdfasdf')
            .should('have.value','name1234asdfasdf')
        })
    })
    
    describe('setting up test to check tos checkbox',()=>{
        it('can user check the terms of service check box?',()=>{
            tosCheckbox()
            .should('not.be.checked')
            // .should('be.checked')
            // .should('be.disabled')
            .uncheck()
            
            .check()
            // .pause()
            .should('be.checked')
            .click()
            .should('not.be.checked')
        })
    })


    describe('check to see if a user can submit the form data',()=>{
        it('fill out all the form with right format and submit',()=>{
        submitButton().should('be.disabled');
        usernameInput().type('asdfqwer4122');
        firstnameInput().type('jaehun');
        lastnameInput().type('park');
        emailInput().type('qwerasdf@gmail.com');
        passwordInput().type('aasdfewr');
        submitButton().should('be.disabled');
        
        tosCheckbox().check();
        submitButton().should('not.be.disabled');
        submitButton().click();
        })
    })


    describe('check for form validation if validation is not met then submit button should be disabled',()=>{
        it('fill out all the form with right format and submit',()=>{
            submitButton().should('be.disabled');
            usernameInput().type('asdfqwer4122');
            firstnameInput().type('jaehun');
            lastnameInput().type('park');
            emailInput().type('qwerasdf@gmail.com');
            passwordInput().type('aasdfewr');
            submitButton().should('be.disabled')
            tosCheckbox().check();
            submitButton().should('not.be.disabled');
            submitButton().click();
            })
    })














})