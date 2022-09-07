import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// import * as fs from 'fs'
// const fs = require( 'fs' )

// help: [ https://stackoverflow.com/questions/35003961/react-js-require-fs ]
// help: [ https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js ] - iterate through folder and get files
// help: [ https://stackoverflow.com/questions/57161839/module-not-found-error-cant-resolve-fs-in ] - fixing error `Module not found: Error: Can't resolve 'fs' in`
// help: [ https://stackoverflow.com/questions/67899456/typeerror-fs-stat-is-not-a-function-ipfs-js ] - need to figure out how to iterate folder before starting up react
// help: [ https://github.com/babel/babel-loader/issues/503 ] - potentially some webpack bug that blocks using local modules
// help: [ https://bobbyhadz.com/blog/javascript-fs-readfilesync-is-not-a-function ] - Note that you can only use the fs module in Node.js. The module cannot be used in the browser. - already know this, how can it be used, because Node.js starts the browser.
// help: [ https://github.com/vercel/next.js/discussions/12124 ] - next.js patches and works - similar to what I am trying to achieve
// help: [ http://www.matthiassommer.it/software-architecture/webpack-node-modules/ ] - allowing external imports

// package.json
// "externals": {
//   "electron": "require('electron')",
//   "child_process": "require('child_process')",
//   "fs": "require('fs')",
//   "path": "require('path')"
// },
// "browser": {
//     "fs": false,
//     "path": false,
//     "os": false
//   },

// var dirname = 'd:/__code__';

// const getfiles = () => {
//   try {
//     console.log("Going to get file info!");
//     fs.stat(dirname, function (err, stats) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(stats);
//         console.log("Got file info successfully!");
    
//         // Check file type
//         console.log("isFile ? " + stats.isFile());
//         console.log("isDirectory ? " + stats.isDirectory());
    
//         // todo: get the `README.MD` and `CARD.png`
    
//     });  
//   }
//   catch (e) {
//     console.log("Caught exception: " + e.toString())
//   }  
// }

// getfiles();


// const fs = require( 'fs' );
// const path = require( 'path' );

// const moveFrom = "/tmp/movefrom";
// const moveTo = "/tmp/moveto";

// // Make an async function that gets executed immediately
// (async ()=>{
//     // Our starting point
//     try {
//         // Get the files as an array
//         const files = await fs.promises.readdir( moveFrom );

//         // Loop them all with the new for...of
//         for( const file of files ) {
//             // Get the full paths
//             const fromPath = path.join( moveFrom, file );
//             const toPath = path.join( moveTo, file );

//             // Stat the file to see if we have a file or dir
//             const stat = await fs.promises.stat( fromPath );

//             if( stat.isFile() )
//                 console.log( "'%s' is a file.", fromPath );
//             else if( stat.isDirectory() )
//                 console.log( "'%s' is a directory.", fromPath );

//             // Now move async
//             await fs.promises.rename( fromPath, toPath );

//             // Log because we're crazy
//             console.log( "Moved '%s'->'%s'", fromPath, toPath );
//         } // End for...of
//     }
//     catch( e ) {
//         // Catch anything bad that happens
//         console.error( "We've thrown! Whoops!", e );
//     }

// })(); // Wrap in parenthesis and call now

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
