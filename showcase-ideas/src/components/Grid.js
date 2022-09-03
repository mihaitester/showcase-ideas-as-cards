import React, { Fragment } from 'react';

import Card from './Card'; // help: [ https://bobbyhadz.com/blog/react-element-type-is-invalid-expected-string-but-got ] - use plain import for Class, use `{}` import for functions

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

// const Cell = (props) => {
//     return (
//         <td>{props.item}</td>
//     )
// }

// TODO: figure out why react has become so finger sticky, basically cannot do a simple FOR in FOR and add ELEMENT, really sad
// help: [ https://bobbyhadz.com/blog/react-get-key-of-clicked-element ]
// help: [ https://codesandbox.io/s/react-hooks-change-list-view-to-grid-with-saving-state-qdej4?from-embed ] - exactly what I need, however trying to avoid bootstrap
// help: [ https://medium.com/@kalebjdavenport/how-to-create-a-grid-layout-in-react-native-7948f1a6f949 ] - not what I need, basically cannot decide on custom grid
// help: [ https://snack.expo.dev/ ] - another example, but not what I need, I need dynamically controlled grids, not FLEX_BOXES that change depending on CSS attributes
const Grid = (props) => {
    let AGrid = Object()
    for(let i=0; i<props.items.length;) {
        let ARow = Object()
        for(let col = 0; col<props.cols; col++) {
            if (i < props.items.length) {
                // help: [ https://bobbyhadz.com/blog/javascript-typeerror-push-is-not-a-function ] - push() requires an array parameter
                // help: [ https://reactjs.org/docs/react-without-jsx.html ] - need to avoid jsx syntax when nesting multiple elements
                let o1 = props.items[i]
                console.log("o1: " + o1)
                console.log("o1: " + JSON.stringify(o1, null, 2))
                // let O2 = <o1/>
                // console.log("O2: " + O2)
                // let O3 = <td key={i}>{O2}</td>
                // // let o3 = React.createElement('td', null, o2)
                // console.log("O3: " + O3)
                // console.log("o3: " + JSON.stringify(o3, null, 2))
                // let o3 = <td>{o2}<td/>
                // console.log("o2: " + JSON.stringify(o2, null, 2))
                // ARow += <O3/><td key={i}><O1/></td>
                ARow += <td><Card props={o1} /></td>
                i ++;
            } else {
                for(; col<props.cols; col++) {
                    ARow += <td></td>
                }
                break
            }
        }
        // AGrid.push(ARow.map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr]))
        AGrid += <tr>{ARow}</tr>
        // help: [ https://stackoverflow.com/questions/30765163/pretty-printing-json-with-react ] - using JSON to print string objects
        console.log("Row: " + ARow)
        console.log("Row: " + JSON.stringify(ARow, null, 2))
    }
    // console.log("Grid: " + JSON.stringify(AGrid, null, 2))
    console.log("Grid: " + AGrid)
    console.log("Grid: " + JSON.stringify(AGrid, null, 2))
    // return ("Grid")
    // return (<table>{AGrid.map(t => <Fragment>{t}</Fragment>).reduce((prev, curr) => [prev, ', ', curr])}</table>)
    // return (<table>{AGrid.map(t => <Fragment>{t}</Fragment>)}</table>)
    // return (<table><AGrid /></table>)
    let cards = props.items
    console.log("cards: " + cards)
    console.log("cards: " + JSON.stringify(cards, null, 2))

    // cols = []
    // for(let i=0; i<props.cols; i++){
    //     cols.push(i)
    // }
    const render = cards.map((card, key) => (
        key % props.cols != 0
            ? <tr><td><Card {...card} /></td>
            : key % props.cols == props.cols - 1
                ? <td><Card {...card} /></td></tr>
                : <td><Card {...card} /></td>
    ))
    // help: [ https://stackoverflow.com/questions/60319702/how-to-render-element-in-react-js-from-object-map ]
    return (
        <table>
            {render}
            {/* {cards.map(card, i) => (
                for(j=0; j<props.cols; j++) {
                    if (j == 0) {
                        
                    }
                }
                if (i % props.cols == 0) <tr><td><Card card /></td>;
                if (i % props.cols == props.cols - 1) <td><Card card /></td></tr>;
            )} */}
            {/* {AGrid} */}
            {/* {cards.map(card, i) => (
                if (i % props.cols == 0) <tr><td>{card}</td>;
                if (i % props.cols == props.cols - 1) <td>{card}</td></tr>;
            )} */}
            {/* <tr><td>{cards[0].renderElement()}</td><td>{cards[1].renderElement()}</td></tr>
            <tr><td>{cards[2].renderElement()}</td><td>{cards[3].renderElement()}</td></tr>
            <tr><td>{cards[4].renderElement()}</td><td></td></tr> */}
        </table>
    )

}

export default Grid;