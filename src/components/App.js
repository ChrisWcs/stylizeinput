import React, { Component } from 'react';

import StyleBtn from './StyleBtn';

import Row from './Row';
import Column from './Column';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textStyle: {
                fontWeight: "normal"
            }
        }
        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(attribute){
        return () => {
            this.setState( prevState => ({
                textStyle: {
                    ...prevState.textStyle,
                    ...attribute
                }
            }));
        }
    }

    render(){
        return (
            <Column>
                <Row>
                    <h2 style={this.state.textStyle}>word</h2>
                </Row>
                <Row>
                    <StyleBtn func={() => {
                                  if(this.state.textStyle.fontWeight === "normal"){
                                      this.changeStyle({fontWeight: "bold"});
                                  } else {
                                      this.changeStyle({fontWeight: "normal"});
                                  }
                              }} 
                              styleObj={{fontWeight: "bold"}} 
                              label={"bold"}/>
                </Row>
            </Column>
        );
    }
}

export default App;