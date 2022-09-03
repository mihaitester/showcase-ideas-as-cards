import React from "react";

const Grid = (props) => {
    // help: [ https://reactjs.org/docs/jsx-in-depth.html ] - need to nest multiple layers of code and html
    // help: [ https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg ]
    // help: [ https://mui.com/material-ui/react-grid/ ]
    // help: [ https://stackoverflow.com/questions/61625766/how-to-create-a-grid-in-react ]
    // help: [ https://www.robinwieruch.de/react-add-item-to-list/ ]
    const Grid = {};
    for (let row = 0; row < props.rows; row++) {
        const CurrentRow = {}
        console.log(props.item)
        for (let col = 0; col < props.cols; col++) {
            CurrentRow.push(<td><props.item key={col}/></td>)
        }
        Grid.push(<tr>{CurrentRow}</tr>)
    }
    console.log({Grid})
    return (
        <table>
            <Grid />
        </table>
    )
}

export default Grid;