import React, { Component } from 'react';

class Counter extends Component {

     /*componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);

    }

   componentWillUnmount(){
        console.log("Counter - Unmount");
    }*/


    render() { 

        return (
          <React.Fragment>
            {this.props.children}
            <div className="container counters">
              <div className="row ">
                <div className="col-md-4 item-title">
                  <h2 className="item-title">{this.props.counter.title}</h2>
                </div>
                <div className="col-md-2">
                  <h4 className="item-price">${this.props.counter.price.toFixed(2)}</h4>
                </div>
                <div className="col-md-6 mx-auto ">
                  <div className="float-lg-right item-buttons">
                  <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-md ml-2"> ++ </button>
                  <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-md ml-2"> -- </button>
                  <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger btn-md ml-2">Remove</button>
                  <span className={this.getBadgeClasses()}><h6>{this.props.counter.value}</h6></span>
                  <span className={this.getBadgeClasses()}><h6>{this.costOfItems()}</h6></span>
                  </div>
               </div>
              </div>
            </div>
            

                     
          
          </React.Fragment>
        );
    }

  getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    /*
  formatCount () {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    } */

  costOfItems () {
        const data = this.props.counter;
        const sum = (data.value*data.price);
        return sum.toFixed(2);
  }  


}
 
export default Counter;