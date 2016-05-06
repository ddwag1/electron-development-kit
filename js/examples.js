/* This will check if you are on OSX or not */

  if ((process.platform)!="darwin") {
    console.log('not OSX');

  } else {
    console.log('OSX');
  }

/* This variable stores what version of Electron you are running */
  var electronV = process.versions['electron'];

/* This example will only run the following if you are using Electron */
  if (electronV !== null) {
    console.log('You are using Electron version ' + electronV);

    console.log('Your platform is ' + process.platform + ' and the arch is ' + process.arch);

    /* Uncomment the following for auto-refresh when you save your code --> */
    // var fs = require('fs');
    // fs.watch('.', function() {
    //   location.reload();
    // })

  } else {
    /* If you are not viewing the page in an Electron app none of the above will run */
      console.log('not an Electron app')
  }
