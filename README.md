# Nithya NPM First NPM package

# Publish Your Component Library #
1. Create an account on the npm website.
2. Log in to your account using the npm CLI:

        npm login

    Follow the prompts to log in with your npm account.
3. Once logged in, publish your package:

        npm publish --access public

4. Check Published Versions - You can check the versions of your package that are already published on the npm registry using:

        npm show nithyauicontrols versions

## Notes: ##
* Remember that the package name must be unique on the npm registry.


# Use Your Component Library in a React App #
1. Install your component library:
    
        npm install nithyauicontrols

2. If you are not publishing your package to the public registry, you can still install it locally by providing the path to the package directory:

        npm i /path/to/nithyauicontrols




