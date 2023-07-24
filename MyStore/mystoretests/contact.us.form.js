module.exports = {
    tags:['form'],
'Submit blank form': function(browser){
    browser
    // Open Mystore site
    .url('http://automationpractice.multiformis.com')
    // Pause page for 3 seconds
    .pause(3000)
    // Go to Contact Us page
    .click('#contact-link > a:nth-child(1)')
    // keep all fields empty (required and optional)
    // Hit send button
    .pause(3000)
    .click('#submitMessage > span:nth-child(1) > i:nth-child(1)')
    .pause('3000')
    // wait for alert to show for 3 seconds
    .waitForElementVisible('.alert' , 3000)
    // make sure it's visible on screen
    .verify.visible('.alert > ol:nth-child(2) > li:nth-child(1)')
    // check what error message appears
    .getText('.alert > ol:nth-child(2) > li:nth-child(1)', function(result){
        console.log(result)
    })
    .pause(3000)
    .end();
},

'Submit form by filling one required field only -- email address' : function(browser){
    browser    
    .url('http://automationpractice.multiformis.com')
    .pause (3000)
    .click('#contact-link > a:nth-child(1)')
    .pause(3000)
    // enter email address as test@test.com
    .setValue('#email' , 'test@test.com')
    .pause(3000)
    .click('#submitMessage > span:nth-child(1) > i:nth-child(1)')
    .waitForElementVisible('.alert' , 3000)
    .verify.visible('.alert > ol:nth-child(2) > li:nth-child(1)')
    .getText('.alert > ol:nth-child(2) > li:nth-child(1)', function(result){
        console.log(result)
    })
    .pause(3000)
    .end();
},

'Submit form by filling two required fields only -- email address and message': function(browser){
    browser  
    .url('http://automationpractice.multiformis.com')
    .pause(3000)
    .click('#contact-link > a:nth-child(1)')
    .pause(3000)
    .setValue('#email' , 'test@test.com')
    // type message (I need help)
    .setValue('#message', 'I need help')
    .pause(3000)
    .click('#submitMessage > span:nth-child(1) > i:nth-child(1)')
    .waitForElementVisible('.alert' , 3000)
    .verify.visible('.alert > ol:nth-child(2) > li:nth-child(1)')
    .getText('.alert > ol:nth-child(2) > li:nth-child(1)', function(result){
        console.log(result)
    })
    .pause(3000)
    .end();
},

'Submit form by filling in all required fields (subject, email, and message)': function(browser){
    browser
    .url('http://automationpractice.multiformis.com')
    .pause(3000)
    .click('#contact-link > a:nth-child(1)')
    .pause(3000)
    .click('#id_contact > option:nth-child(2)')
    .setValue('#email' , 'test@test.com')
    .setValue('#message', 'I need help')
    .pause(6000)
    .click('#submitMessage > span:nth-child(1) > i:nth-child(1)')
    .waitForElementVisible('.alert' , 3000)
    .verify.visible('.alert')
    .getText('.alert' , function(result){
        console.log(result)
    })
    .pause(3000)
    .end();
},

'Attach PNG Image': function(browser){
    browser
    .url('http://automationpractice.multiformis.com')
    .pause(3000)
    .click('#contact-link > a:nth-child(1)')
    .pause(3000)
    .click('#id_contact > option:nth-child(2)')
    .setValue('#email' , 'test@test.com')
    .setValue('#message', 'I need help')
    // attaching PNG image "attach" using path format
    .setValue('#fileUpload', require('path').resolve(__dirname + '/attach.PNG'))
    .pause(6000)
    .click('#submitMessage > span:nth-child(1) > i:nth-child(1)')
    .waitForElementVisible('.alert' , 3000)
    .verify.visible('.alert')
    .getText('.alert' , function(result){
        console.log(result)
    })
    
    .pause(3000)
    .end();
},

'Attach PDF File': function(browser){
    browser
    .url('http://automationpractice.multiformis.com')
    .pause(3000)
    .click('#contact-link > a:nth-child(1)')
    .pause(3000)
    .click('#id_contact > option:nth-child(2)')
    .setValue('#email' , 'test@test.com')
    .setValue('#message', 'I need help')
    // attaching PDF file "test" using path format
    .setValue('#fileUpload', require('path').resolve(__dirname + '/test.PDF'))
    .pause(6000)
    .click('#submitMessage > span:nth-child(1) > i:nth-child(1)')
    .waitForElementVisible('.alert' , 3000)
    .verify.visible('.alert')
    .getText('.alert' , function(result){
        console.log(result)
    })
    
    .pause(3000)
    .end();
},

'Submit form by filling all fields (required and optional)': function(browser){
    browser
    .url('http://automationpractice.multiformis.com')
    .pause(3000)
    .click('#contact-link > a:nth-child(1)')
    .pause(3000)
    .click('#id_contact > option:nth-child(3)')
    .setValue('#email' , 'test@test.com')
    .setValue('#message', 'I need help')
    // Entering order reference as 1234ABCD
    .setValue('#id_order' , '1234ABCD')
    // attaching PDF file "test" using path format
    .setValue('#fileUpload', require('path').resolve(__dirname + '/test.PDF'))
    .pause(6000)
    .click('#submitMessage > span:nth-child(1) > i:nth-child(1)')
    .waitForElementVisible('.alert' , 3000)
    .verify.visible('.alert')
    .getText('.alert' , function(result){
        console.log(result)
    })
    
    .pause(3000)
    .end();
}
    
}