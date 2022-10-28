import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'

class Board extends React.Component{
    handleBoxClick(i){
        this.props.handleForBoxClick(i);
    }

    renderSquare(i){
        return(
            <button onClick={()=>this.handleBoxClick(i)}>{this.props.boxes[i]==null? "":this.props.boxes[i]}</button>
        )
    }
    render(){

        return (
            <div className='board'>
                <div className='title'>
                    Tic Tac Toe
                </div>

                <div className='çontent'>
                    <div className='ttt'>
                        <div className='row'>
                           {this.renderSquare(0)}
                           {this.renderSquare(1)}
                           {this.renderSquare(2)}
                        </div>
                        <div className='row'>
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </div>
                        <div className='row'>
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

class Display extends React.Component{
    moveHistory(i){
        this.props.handlerForHistory(i);
    }
    render(){
        let title=null;
        if(this.props.gameStatus!=null){
            title=this.props.gameStatus
        }
        else {
            if(this.props.stepNumber % 2==0){
                title="Next Move for X";
            }
            else{
                title="Next Move for O";
            }
        }
        let buttons=[];
        for(let i=0;i<=this.props.stepNumber;i++){
            let button;

            if(i==0){
                button=(<button onClick={()=> this.moveHistory(i)}>Go to Start</button>);
            }
            else{
                button=(<button onClick={()=> this.moveHistory(i)}>Go to Step#{i} </button>);
            }
            buttons.push(button);
        }
        return (
            <div className='display'>
                <div className='title'>
                    {title}
                </div>
                <div className='content'>
                    <div className='history'>
                        {buttons}
                    </div>
                </div>
            </div>
        );
    }
}



class TTT extends React.Component{
    //render fumction returns html
    constructor(props){
        super(props);
        this.state={
            histroy:[
                [null,null,null,null,null,null,null,null,null]

            ],
            stepNumber:0,
            gameStatus:null
        }
    }

    handleSquareClick(i){
        let oldHistory=this.state.histroy.slice();
        let squares=oldHistory[oldHistory.length-1];

        if(squares[i]!=null){
            return;
        }
        squares[i]=this.state.stepNumber %2==0?'X':'O';
        oldHistory.push(squares);

       this.setState({
           history:this.state.history,
           stepNumber:this.state.stepNumber+1,
           gameStatus:null          
       })
    }

    moveToStep(i){
        let oldHistory=this.state.history.slice(0,i+1);
        this.setState({
            history:oldHistory,
            stepNumber:i,
            gameStatus:null
        })
    }
    render(){
        let squares=this.state.histroy[this.state.histroy.length-1];

        return(
            <>
            <Board handleForBoxClick={(i)=> this.handleSquareClick(i)} boxes={squares}/>
            <Display stepNumber={this.state.stepNumber} gameStatus={this.state.gameStatus} handlerForHistory={(i) => this.moveToStep(i)}/>
            
            </>
        );
    }
    }

ReactDOM.render(<TTT />,document.getElementById("root"));
