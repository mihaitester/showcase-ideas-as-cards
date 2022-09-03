# Readme
I wanted to implement this idea for a while now.
The idea is to create a simple website where people can vote on ideas.
And the ideas are presented in thumbnail form cards. 
On mouse hover, the `README.MD` file is loaded in the card area and can be read.
Then if the card corresponding to the idea is clicked a new tab is opened containing the details about the idea.
And there needs to be a simple search bar, and have tags attached to each idea. Even words in the idea title could be considered as tags.

# Features
* search bar
* tags
* cards thumbnails
* detailed view
* infinite scroll
* including subfolders as cards - ideally avoid heavy database with metadata and references, simply use a subfolder structure for ideas

# Requirements
* `Node.js` - https://nodejs.org/en/download/
* `Mozilla Firefox` - https://www.mozilla.org/ro/firefox/all/#product-desktop-release - has less quirks than other browsers
* `React developer tools` - https://addons.mozilla.org/ro/firefox/addon/react-devtools/ - showcases `React` objects and makes debugging easier

# Optionals
* `Visual Studio Code` - https://code.visualstudio.com/download