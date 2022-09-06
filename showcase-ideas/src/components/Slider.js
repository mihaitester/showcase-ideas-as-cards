import React, { useState } from 'react';

{/* help: [ https://retool.com/blog/building-a-react-slider/ ] - need to replace the input field with a slider - need to cap the slider at a number that generates maximum number of 100px*150px cards */}
// help: [ https://www.w3schools.com/howto/howto_js_rangeslider.asp ] - need to use HTML elements that simplify building this
const Slider = (props) => {

    // need the following attributes: width, height -> to render properly
    // need min, max values -> what the slider will cycle through, may not be necesarily 0-100, but 1-7 for example
    // need step -> what are the steps between slides -> 1 or more
    // need marks -> where to display guides -> usually 0, 25, 50, 75, 100 percents

    return (
        <div className='slider'>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
        </div>
    )
}

export default Slider;