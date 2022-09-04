import React, { Fragment } from 'react';

import Card from './Card'; // help: [ https://bobbyhadz.com/blog/react-element-type-is-invalid-expected-string-but-got ] - use plain import for Class, use `{}` import for functions
import useWindowDimensions from './useWindowDimensions';

// help: [ https://reactjs.org/docs/jsx-in-depth.html ] - need to nest multiple layers of code and html
// help: [ https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg ]
// help: [ https://mui.com/material-ui/react-grid/ ]
// help: [ https://stackoverflow.com/questions/61625766/how-to-create-a-grid-in-react ]
// help: [ https://www.robinwieruch.de/react-add-item-to-list/ ]

// TODO: figure out why react has become so finger sticky, basically cannot do a simple FOR in FOR and add ELEMENT, really sad
// help: [ https://bobbyhadz.com/blog/react-get-key-of-clicked-element ]
// help: [ https://codesandbox.io/s/react-hooks-change-list-view-to-grid-with-saving-state-qdej4?from-embed ] - exactly what I need, however trying to avoid bootstrap
// help: [ https://medium.com/@kalebjdavenport/how-to-create-a-grid-layout-in-react-native-7948f1a6f949 ] - not what I need, basically cannot decide on custom grid
// help: [ https://snack.expo.dev/ ] - another example, but not what I need, I need dynamically controlled grids, not FLEX_BOXES that change depending on CSS attributes
// help: [ https://bobbyhadz.com/blog/javascript-typeerror-push-is-not-a-function ] - push() requires an array parameter
// help: [ https://reactjs.org/docs/react-without-jsx.html ] - need to avoid jsx syntax when nesting multiple elements
// help: [ https://stackoverflow.com/questions/30765163/pretty-printing-json-with-react ] - using JSON to print string objects
const Grid = (props) => {

    let cards = props.items
    // console.log("cards: " + cards)
    // console.log("cards: " + JSON.stringify(cards, null, 2))

    // help: [ https://stackoverflow.com/questions/60319702/how-to-render-element-in-react-js-from-object-map ]
    const render = cards.map( (card, key) => (
        <div><Card key={key} {...card} /></div>
        // if(key % props.cols == 0) let o = (<tr><td key={key}><Card {...card} /></td>)
        // key % props.cols == 0
        //     ? <tr><td key={key}><Card {...card} /></td>
        //     : key % props.cols == props.cols - 1
        //         ? <td key={key}><Card {...card} /></td></tr>
        //         : <td key={key}><Card {...card} /></td>
        //     )
        // )
    ))
    
    const { height, width } = useWindowDimensions();
    
    return (
        // <table>
        //     <tbody>{render}</tbody>
        // </table>
        <div style={{display: "inline", width:{width}, height:{height}}}>{render}</div>
    )
}

export default Grid;