import React from 'react';

// const Grid = (props) => {
//     // help: [ https://reactjs.org/docs/jsx-in-depth.html ] - need to nest multiple layers of code and html
//     // help: [ https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg ]
//     // help: [ https://mui.com/material-ui/react-grid/ ]
//     // help: [ https://stackoverflow.com/questions/61625766/how-to-create-a-grid-in-react ]
//     // help: [ https://www.robinwieruch.de/react-add-item-to-list/ ]
//     const Grid = {};
//     for (let row = 0; row < props.rows; row++) {
//         const CurrentRow = {}
//         console.log(props.item)
//         for (let col = 0; col < props.cols; col++) {
//             CurrentRow.push(<td><props.item key={col}/></td>)
//         }
//         Grid.push(<tr>{CurrentRow}</tr>)
//     }
//     console.log({Grid})
//     return (
//         <table>
//             <Grid />
//         </table>
//     )
// }

// TODO: figure out why react has become so finger sticky, basically cannot do a simple FOR in FOR and add ELEMENT, really sad
// help: [ https://bobbyhadz.com/blog/react-get-key-of-clicked-element ]
// help: [ https://codesandbox.io/s/react-hooks-change-list-view-to-grid-with-saving-state-qdej4?from-embed ] - exactly what I need, however trying to avoid bootstrap
// help: [ https://medium.com/@kalebjdavenport/how-to-create-a-grid-layout-in-react-native-7948f1a6f949 ] - not what I need, basically cannot decide on custom grid
// help: [ https://snack.expo.dev/ ] - another example, but not what I need, I need dynamically controlled grids, not FLEX_BOXES that change depending on CSS attributes
const Grid = (props) => {
    let AGrid = []
    for(let i=0; i<props.items.length; i++) {
        let ARow = []
        for(let col = 0; col<props.cols; col++) {
            if (i < props.items.length) {
                // help: [ https://bobbyhadz.com/blog/javascript-typeerror-push-is-not-a-function ] - push() requires an array parameter
                // help: [ https://reactjs.org/docs/react-without-jsx.html ] - need to avoid jsx syntax when nesting multiple elements
                ARow.push([React.createElement('td', null, `<{props.items.indexOf(i)} key={i}></{props.items.indexOf(i)}>`)])
            } else {
                break
            }
        }
        AGrid.push(ARow)
        console.log(ARow)
    }
    console.log(AGrid)
    // return ("Grid")
    return (<table><AGrid /></table>)
}

export default Grid;