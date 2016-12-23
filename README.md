# Optimize-requirejs-projects
RequireJS has an optimization tool that combines related scripts together into build layers and minifies them via UglifyJS.

#Optimizing one javascript file

Navigate to the root of your project and run the below command.

node r.js -o build.js

This will create a file called mainCompressed.js that will include the contents of angular.js, angular-animate.js, jquery.js and require.js.

Once that optimization is done, you can change the script tag to reference "mainCompressed.js" instead of "require.js", and your optimized project will only need to make one script request.