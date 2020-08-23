import React, { Component } from 'react';
import Counter from "./counter"

class CountersList extends Component {
   

    render() { 
        const { onReset, counters, onDelete, onDecrement, onIncrement} = this.props;    
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 row-titles">
                            <p>Item</p>
                        </div>
                        <div className="col-md-4 row-titles">
                            <p>Price</p>
                        </div>
                        <div className="col-md-4 row-titles">
                            <p className="float-lg-right">Items in Basket</p>
                        </div>
                    </div>
                </div>
                {counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement= {onIncrement} 
                        onDecrement = {onDecrement}
                        counter={counter}>
                        <br/><br/>
                    </Counter>    
                ))}
                <div className="container totals-row">
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-2">
                            <h3 className="float-lg-right">Total</h3>
                        </div>
                        <div className="col-md-6 ">
                            <div className="mx-auto">
                                <button onClick={onReset} className="btn btn-primary m-2">Reset</button>
                                <span className="badge badge-pill badge-dark ml-4 badge-totals"><h5>{this.props.totalCounters}</h5></span>
                                <span className="badge badge-pill badge-dark ml-4 badge-totals"><h5>${this.props.totalCost.toFixed(2)}</h5></span>
                            </div>    
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CountersList;