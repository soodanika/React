# NPM

    NPM does not stand for Node Package Manager.
    It is a standard repository for all the packages.

# Parcel

    It is a bundler, and is needed to bundle our application to make them production ready.
    In the process of bundling it does mnay things like minification, image optimization, tree shaking etc.

# .parcel-cache

    It is a cache file that is generated during the build and this helps in reducing the build time for the further builds.

# npx

    It is an execute command for the package.

# dependencies vs Devdependencies

    dependecies are the pacakages that our required by our application to run properly in production whereas the Devdependecies are the packages that are required during the development and should not be included in production.

# Tree Shaking

    It is a technique used in bundlers that helps get rid of unused code thus reducing the build size, time etc.

# HMR (Hot Module Replacement)

    It is a feture in bundlers that help update the UI in real time.

# Parcel super powers

    - HMR - It is a feture in bundlers that help update the UI in real time.
    - Tree Shaking -  It is a technique used in bundlers that helps get rid of unused code thus reducing the build size, time etc.
    - Local Server - It provides a local server to view the changes in the browser.
    - Faster build - It has the files cached which helps in faster build time.
    - Minification

# .gitignore

    It is file where we can mention the files or folders that we don not want to push into git.
    The files that can be regenrated can be put in gitignore and the ones that cannot be regenrtaed should not be put in it.

# package.json vs pacakge-lock.json

    package.json is the configuration file for NPM, it has the versions for the different packages that are installed.
    package-lock.json locks the version for a particular package.

# package-lock should not be modified

    This is because a direct cahnge in the package-lock.json can lead to errors and version conflicts.

# node-modules

    This is the folder that contains all the packages and the code for those packages.

# dist folder

    This folder contains the final optimized and minified version of our application.

# browserslist

    This is used to specify the list of browsers that our application can support.

# carat vs tilde

    carat will automatically upgrade to the next minor and major version.
    tilde will automatically upgrade to the next patch version.
