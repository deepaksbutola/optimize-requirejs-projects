# optimize-requirejs-projects
RequireJS has an optimization tool that combines related scripts together into build layers and minifies them via UglifyJS.

#OPTIMIZING ONE JAVASCRIPT FILE

Navigate to the root of your project and run the below command.

node r.js -o build.js

This will create a file called mainCompressed.js that will include the contents of angular.js, angular-animate.js, jquery.js and require.js.

Once that optimization is done, you can change the script tag to reference "mainCompressed.js" ('<script src="mainCompressed.js"></script>') instead of "require.js" ('<script src="js/require.js" data-main="js/main"></script>'), and your optimized project will only need to make one script request.