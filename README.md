#Mnmal

Mnmal is a two column, minimal theme for Hugo static site generator

##Requirements

- Nodejs

To check if it is installed, run this command

    npm -v

##Installing

1. Clone this repository into your hugo `themes` folder
<!-- Comment -->

    git clone http://github.com/arvinsim/hugo-theme-mnmal.git

2. Run this command in the `static-src` directory to download Nodejs dependencies
<!-- Comment -->

    npm install

3. To generate the CSS files, run this command in the `static-src` directory
<!-- Comment -->

    gulp less

## Setting the theme colors

You can set your color scheme by settings the `themeColor` variable in your site configuration file.

    themeColor = "theme-dark-green" 

There are two themes available for now

    theme-dark-green
    theme-dark-blue

`theme-dark-green` is the default if the `themeColor` variable is not set.
