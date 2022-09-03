import React from 'react';

// help: [ https://stackoverflow.com/questions/41064718/how-to-create-an-new-instance-of-an-object-in-react ] - precisely what is needed
// help: [ https://create-react-app.dev/docs/importing-a-component/ ] - fix import
// help: [ https://www.g2i.co/blog/react-class-components-with-es6-and-class-fields ] - looking for ways to define `title`,`image`,`url`,`text`

// help: [ https://www.robinwieruch.de/react-class-component-deprecated/ ]
// class Card extends React.Component {

// help: [ https://www.robinwieruch.de/react-function-component/#react-function-component-example ]
const Card = (props) => {

    // constructor(props) {
        // super(props) // help: [ https://stackoverflow.com/questions/31067368/how-to-extend-a-class-without-having-to-use-super-in-es6 ]
        console.log(props) // help: [ https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do ]
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
        return (
          <b>Hello !</b>
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
