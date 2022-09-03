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
    for(let i=0; i<props.items.length;) {
        let ARow = []
        for(let col = 0; col<props.cols; col++) {
            if (i < props.items.length) {
                // help: [ https://bobbyhadz.com/blog/javascript-typeerror-push-is-not-a-function ] - push() requires an array parameter
                // help: [ https://reactjs.org/docs/react-without-jsx.html ] - need to avoid jsx syntax when nesting multiple elements
                let o1 = props.items[i]
                console.log("o1: " + o1)
                // console.log("o1: " + JSON.stringify(o1, null, 2))
                let o2 = <o1 key={i} />
                console.log("o2: " + o2)
                // console.log("o2: " + JSON.stringify(o2, null, 2))
                ARow += React.createElement('td', null, o2)
                i ++;
            } else {
                break
            }
        }
        // AGrid.push(ARow.map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr]))
        AGrid.push(ARow)
        // help: [ https://stackoverflow.com/questions/30765163/pretty-printing-json-with-react ] - using JSON to print string objects
        console.log("Row: " + JSON.stringify(ARow, null, 2))
    }
    console.log("Grid: " + JSON.stringify(AGrid, null, 2))

    // return ("Grid")
    return (<table>{AGrid.map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}</table>)
}

export default Grid;