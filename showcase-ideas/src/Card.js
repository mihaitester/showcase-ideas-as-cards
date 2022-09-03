import React, { Image, Text } from 'react';

// help: [ https://stackoverflow.com/questions/41064718/how-to-create-an-new-instance-of-an-object-in-react ] - precisely what is needed
// help: [ https://create-react-app.dev/docs/importing-a-component/ ] - fix import
// help: [ https://www.g2i.co/blog/react-class-components-with-es6-and-class-fields ] - looking for ways to define `title`,`image`,`url`,`text`

export default class Card extends React.Component {

    constructor(props) {
        super(props) // help: [ https://stackoverflow.com/questions/31067368/how-to-extend-a-class-without-having-to-use-super-in-es6 ]
        console.log(this.props) // help: [ https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do ]
        this.state = {
            value: null,
          }
        // todo: by default display `title` and `image`
        // todo: .onMouseHover() display the `text` in scrollable box
        // todo: .onMouseCick() open a new tab with the `url` displaying the object in detail
    }

    render() {
        return (
          <div className="card">
            <Image src="" />
            <Text src="" />
          </div>
        );
      }
}