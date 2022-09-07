import React, { Fragment } from 'react'

import Card from './Card' // help: [ https://bobbyhadz.com/blog/react-element-type-is-invalid-expected-string-but-got ] - use plain import for Class, use `{}` import for functions
import useWindowDimensions from '../hooks/useWindowDimensions'
import log from '../helpers/logger'

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

// help: [ https://stackoverflow.com/questions/60319702/how-to-render-element-in-react-js-from-object-map ]
// help: [ https://reactjs.org/docs/jsx-in-depth.html ]
// help: [ https://www.robinwieruch.de/javascript-map-array/ ]
const processCards = (cards, cols, height, width) => {

    let cardSizeReducer = 0.9
    let aspectRatio = 3/2

    let render = []
    let rows = parseInt(cards.length / cols) + 1

    log("debug", "rows", rows)

    for(let i=0; i<cards.length;) {
        let row = []
        for(let col=0; col<cols; col++) {
            if(i<cards.length) {
                // row.push(<td><Card key={i} {...cards[i]} height={height/rows} maxHeight={0.9 * height/rows} width={width/cols} maxWidth={0.9* width/cols}/></td>)
                // todo: ideally get some calculation of the image, create cards that have a 2 * 3 aspect ratio
                let h = parseInt(aspectRatio * width/cols) //height/rows > width/cols ? height/rows : width/cols
                let mh = parseInt(aspectRatio * cardSizeReducer * width/cols) //height/rows > width/cols ? cardSizeReducer * height/rows : cardSizeReducer * width/cols
                row.push(<td><Card key={i} {...cards[i]} height={h} maxHeight={mh} width={parseInt(width/cols)} maxWidth={parseInt(cardSizeReducer * width/cols)}/></td>)
                i++;
            }
            else {
                row.push(<td></td>)
            }
        }
        render.push(<tr>{row}</tr>)
    }
    return render
}

const Grid = (props) => {

    log("debug", "cards", props.items)

    const { height, width } = useWindowDimensions();

    return (
        <table>
            {/* <tbody><div style={{width:{width}, height:{height}}}>{processCards(props.items, props.cols, height, width)}</div></tbody> */}
            <tbody>{processCards(props.items, props.cols, height, width)}</tbody>
        </table>
        
    )
}

export default Grid;