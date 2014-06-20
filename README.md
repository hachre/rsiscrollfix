# RSIScrollFix

## Description
Fixes laggy scrolling in Safari on OS X when on the official StarCitizen website
located at: https://www.robertsspaceindustries.com

## Thanks to
Baryn from the official StarCitizen forums and his thread, which can be found here:
https://forums.robertsspaceindustries.com/discussion/40670/

My code is a 95% copy and paste of his original code for the Chrome extension he made.

## Installation
1. Download the latest build from here: https://github.com/hachre/rsiscrollfix/releases
2. Then simply double click it in your Downloads folder and Safari will ask you to install it.

## Build with your own changes
In order to build an extension with your own changes yourself you need a free Apple ID,
a free Safari Developer account (http://developer.apple.com) and Safari on OS X.

In a nutshell:

1. Create an Apple ID
2. Sign up for a Safari Dev Account at http://developer.apple.com
3. Create a Certificate Signing Request (instructions on the Apple Developer Website)
4. Download + inject the Apple Developer Certificate into your Keychain
5. Enable Safari Developer mode through Preferences -> Advanced
6. Open the Extension Builder from the Develop menu
7. Clone this Git repo
8. Select Add Extension on the lower left in the Extension Builder
9. Edit rsiscrollfix.js to your liking in an external editor
10. Press Build Package on the upper right inside the Extension Builder

This will create a new RSIScrollFix.safariext that will contain your changes.
