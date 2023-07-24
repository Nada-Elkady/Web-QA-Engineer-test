module.exports = {
    tags:['search'],

    'Search for Dress and verify search results': function(browser){
        browser
        .url('http://automationpractice.multiformis.com/')
        .pause(3000)
        // Type Dress in search field
        .setValue('#search_query_top', 'dress')
        // click on search button
        .click('button.btn:nth-child(5)')
        .pause(3000)
        // check number of search results
        .getText('.heading-counter', function(result){
            console.log(result)
        })
        //Verify search results are all dresses
        // to check each element from search result has word "Dress"
        .assert.containsText("li.ajax_block_product:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a:nth-child(1)" , "dress")
        .assert.containsText("li.ajax_block_product:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a:nth-child(1)" , "dress")
        .assert.containsText("li.ajax_block_product:nth-child(3) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a:nth-child(1)" , "dress")
        .assert.containsText("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a:nth-child(1)" , "dress")
        .assert.containsText("li.ajax_block_product:nth-child(5) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a:nth-child(1)" , "dress")
        .assert.containsText("li.ajax_block_product:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a:nth-child(1)" , "dress")
        .assert.containsText("li.ajax_block_product:nth-child(7) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a:nth-child(1)" , "dress")
        .end();
    }

};

   
        
      
    

    

