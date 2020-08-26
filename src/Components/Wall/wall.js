import React from 'react';

import Brick from '../Brick/brick.js';

import "./style.css";

class Wall extends React.Component // defining a subclass

{
    
    // Initialising the constructor
    constructor(props){ 

        super(props);
        this.state = {
            bricks: [] // initial "state" of the bricks by default
        }
    }

    // Function to add more bricks to the wall
    addMoreBricks = () => { 
        
        // Getting older values of bricks array
        const newBricksArray = [...this.state.bricks];
        
        // Adding new bricks values to new array
        newBricksArray.push(newBricksArray.length +1);
        
        // Changing the default "state" of the bricks array to newbricksArray
        this.setState({
            bricks:newBricksArray
        })
    }

    // Function to delete bricks from the wall
    deleteBricks = () => {

        const newBricksArray = [...this.state.bricks];
        newBricksArray.pop();
        this.setState({bricks:newBricksArray})

    }

    clearScreen = () => {

        const newBricksArray = []
        this.setState({bricks:newBricksArray})

    }

     
    // render method returns what is being displayed on the browser
    render = () => {

        return(

            <div className="wall-container"> 

                {this.state.bricks.map((brick) => {
                    return <Brick key = {brick} name={brick}/>;
                })}

              
                
                <button className="add-btn1" onClick={this.addMoreBricks}>+</button>
                <button className="add-btn2" onClick={this.deleteBricks} >- </button>
                <button className="add-btn3" onClick={this.clearScreen} >Clear Screen </button>
            </div>
        ) 

    }
}

export default Wall;