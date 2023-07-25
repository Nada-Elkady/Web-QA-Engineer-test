module.exports = {
    "src_folders": ["mystoretests"],
 
    "webdriver":{
        start_process: true,
     server_path: '/home/circleci/project/MyStore/node_modules/chromedriver/lib/chromedriver/chromedriver',
     port: 9515,
     host: 'localhost',
     ssl: false,
     default_path_prefix: '',
     proxy: undefined,
     cli_args: {},
        chrome: {
      driver: require('chromedriver').path
    }
    },

    "test_settings" :{
        "default" :{
           
            "desiredCapabilities" :{
                "browserName" : "chrome"
            }
        }
    }

    }
