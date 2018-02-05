import React, { Component } from 'react';

import StyleBtn from './StyleBtn';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <StyleBtn func={() => {console.log("button clicked")}} 
                        styleObj={{fontWeight: "bold"}} 
                        label={"bold"}/>
            </div>
        );
    }
}

export default App;