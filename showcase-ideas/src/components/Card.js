import React, { useState, Fragment } from 'react';
import log from "../helpers/logger";

// help: [ https://stackoverflow.com/questions/41064718/how-to-create-an-new-instance-of-an-object-in-react ] - precisely what is needed
// help: [ https://create-react-app.dev/docs/importing-a-component/ ] - fix import
// help: [ https://www.g2i.co/blog/react-class-components-with-es6-and-class-fields ] - looking for ways to define `title`,`image`,`url`,`text`

// help: [ https://www.robinwieruch.de/react-class-component-deprecated/ ]
// class Card extends React.Component {

// help: [ https://www.robinwieruch.de/react-function-component/#react-function-component-example ]
const Card = (props) => {

  // help: [ https://upmostly.com/tutorials/react-onhover-event-handling-with-examples ]
  const [isShown, setIsShown] = useState(false);

    // constructor(props) {
        // super(props) // help: [ https://stackoverflow.com/questions/31067368/how-to-extend-a-class-without-having-to-use-super-in-es6 ]
        // help: [ https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do ]
        log("debug", "card", props)
        // console.log("card: " + props) 
        // console.log("card: " + JSON.stringify(props, null, 2))
        // this.state = {
        //     value: null,
        //   }
        // todo: by default display `title` and `image`
        // todo: .onMouseHover() display the `text` in scrollable box
        // todo: .onMouseCick() open a new tab with the `url` displaying the object in detail

        // help: [ https://www.digitalocean.com/community/tutorials/react-constructors-with-react-components ]
        // this.onClick = this.onClick.bind(this);
        // this.onHover = this.onHover.bind(this);
    // }

    // help: [ https://reactjs.org/docs/react-component.html ] - instead of reconstructing object
    // componentDidUpdate(prevProps, prevState, snapshot) {

    // }

    // render() {
      // help: [ https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react ]
      log("debug", "height", props.height)
      log("debug", "width", props.width)
        return (
          <Fragment>
            {/* help: [ https://stackoverflow.com/questions/29615607/react-svg-max-width ] */}
            {/* help: [ https://stackoverflow.com/questions/36284453/react-native-text-going-off-my-screen-refusing-to-wrap-what-to-do ] */}
            {/* <div className='card' style={{borderStyle: "solid", borderWidth: "1px", borderRadius: "10px", margin: "10px", height: props.height+"px", maxHeight: props.maxHeight+"px", width: props.width+"px", maxWidth: props.maxWidth+"px" }} onClick={props.src} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}> */}
            <div className='card' style={{borderStyle: "solid", borderColor:"white", borderWidth: "1px", borderRadius: "10px", margin: "auto", height: props.height+"px", width: props.width+"px"}} onClick={props.src} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <div className='title' style={{borderStyle: "solid", borderColor:"red", borderWidth: "1px", padding: "10px", margin: "auto", height: parseInt(0.1 * props.height), width: parseInt(0.9*props.width)}}><b>{props.title}</b></div>
              {!isShown && (
                <div className='image' style={{borderStyle: "solid", borderColor:"blue", borderWidth: "1px", padding: "10px", margin: "auto", height: parseInt(0.8 * props.height), width: parseInt(0.9 * props.width)}}><img src={props.image} /></div>
              )}
              {isShown && (
                // todo: use some markdown processor and display the text like rendered instead of plain text
                // todo: have some auto-scroll speed of the text
                // help: [ https://randyperkins2k.medium.com/writing-a-simple-markdown-parser-using-javascript-1f2e9449a558 ] - how to parse markdown
                <div className='text' style={{borderStyle: "solid", borderColor:"green", borderWidth: "1px", padding: "10px", margin: "auto", height: parseInt(0.8 * props.height), width: parseInt(0.9 * props.width)}}>{props.text}</div>
              )}
            </div></Fragment>
          // <Fragment>
          //   <Text>Hello, I am your cat!</Text>
          //   <div className="card">
          //     <View>
          //       {/* <Image
          //         source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
          //         style={{width: 200, height: 200}}
          //       /> */}
          //       <Text>Hello, I am your cat!</Text>
          //     </View>  
          //     {/* <Image src="" /> */}
          //     {/* <Text>{this.props.title}</Text> */}
          //   </div>
          // </Fragment>
        );
      // }
}

// help: [ https://reactnative.dev/docs/intro-react ] - why getting error, figured its because of using the <Text>
export default Card; // help: [ https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx ] - this should work, but getting "type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."
