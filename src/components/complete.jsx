import React, { Component } from 'react';


class Complete extends Component {

    handleChange = (e) => {
        e.preventDefault()
        this.props.onChange(e.target.value);
    }

    handleKeyPress = (e) => {
        e.preventDefault()
    }


    render() { 
        return (
            <React.Fragment>
                <div className="container submit">
                    <div className="mx-auto">
                        
                            <span>Please Type: "Not a Robot" to confirm order</span>
                            <input type="password" name="password" placeholder="Password" 
                                value={this.props.password} onChange={this.handleChange}/>
                            <button className="btn btn-dark btn-md ml-2" type="button" 
                                onClick={() => this.props.onSubmit(this.props.password)}>Login</button>
                        
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
};
 
export default Complete;



           
  /*                
<form>
<span>Please Type: "Not a Robot" to confirm order</span>
<input type="password" name="password" placeholder="Password" 
    value={this.state.password} onChange={() => this.props.onChange(this.props.password)}/>
<button className="btn btn-dark btn-md ml-2" type="button" 
    onClick={() => this.props.onLogin(this.props.password)}>Login</button>
</form>
*/