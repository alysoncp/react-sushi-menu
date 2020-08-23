import React, { Component } from 'react';
import NavBar from './components/navbar';
import CountersList from './components/countersList';
import Complete from './components/complete';
import './App.css';

class App extends Component {

  state = { 
    counters: [
        {id: 1, title: "Spicy Tuna Roll", price: 3.75, value: 0},
        {id: 2, title: "Miso Soup", price: 1.50, value: 0},
        {id: 3, title: "Yam Tempura Roll", price: 3.25, value: 0},
        {id: 4, title: "Pork Gyoza", price: 4.50, value: 0},
        {id: 5, title: "California Roll", price: 2.75, value: 0},
        {id: 6, title: "Dynamite Roll", price: 3.00, value: 0}
    ],
    totalItems: 0,
    totalCost: 0,
    complete: false,
    password : ""
 };


  handleDelete = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index)
    counters[index] = {...counter};
    counters[index].value = 0;
    console.log(counters);
    this.setState({counters})
    this.adjustTotal();

  }    

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
      this.adjustTotal()
  }


  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      console.log(index)
      

      this.setState({ counters });
      this.adjustTotal();
  }

  handleDecrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      if (counters[index].value > 0){ 
          counters[index].value--;
          this.setState({ counters });
          this.adjustTotal();
      }       
  }

  adjustTotal = () => {
    setTimeout(() => {
      let totalItems = 0;
      let totalCost = 0;
      this.state.counters.forEach(function(counter) { 
        totalItems += counter.value;
        totalCost += (counter.value*counter.price)
      });  
      this.setState({totalItems, totalCost})

    }, 250);
  }


  handlePasswordChange = (e) => {
    console.log("Made it to Handle Password")
    this.setState({password: e});
 }

 
  handleLogin = () => {
    //console.log("Made it to Login")
    console.log("Password: " + this.state.password);
    let complete = this.state.complete
    if (this.state.password === "Not a Robot") {
        //console.log("Comfirmed!")
        complete = true;
    } else {
        console.log("Die Robot!")
    }
    this.setState({complete})
  }


  onRenew = () => {
    console.log("Got here!")
    const complete = false;
    const password = "";
    this.setState ({complete, password})
  }




  render () {

    if (this.state.complete) {
      return (
        <React.Fragment>
          <div className="jumbotron jumbotron-fluid header">
              <div className="container">
                <h1 className="display-4">Welcome to Sushi-rama!</h1>
              </div>
            </div>
          <div>
            <h3>Thank you for your order!</h3>
            <button onClick={() => this.onRenew()} className="btn btn-secondary btn-md ml-2"> Start New Order! </button>
          </div>
        </React.Fragment>
      )
    } else {

      return (
        <React.Fragment>  
          <div className="jumbotron jumbotron-fluid header">
            <div className="container">
              <h1 className="display-4">Welcome to Sushi-rama!</h1>
            </div>
          </div>
          <NavBar totalCounters={this.state.totalItems}/>
          
          <main className="container">
            <CountersList 
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}  
              totalCounters={this.state.totalItems}
              totalCost={this.state.totalCost}
            />

            <Complete 
              password={this.state.password}
              onChange={this.handlePasswordChange}
              onSubmit={this.handleLogin}
            />
            
          </main>

        </React.Fragment>
      );
    }  
  }
}  

export default App;
