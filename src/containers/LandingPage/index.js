import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import * as actions from './actions';

export class LandingPage extends Component {
  
  constructor(props){
      super(props);
      this.state = {
        isOpen: false
      };
  }
  componentDidMount(){
    this.props.getProductsData(this.props.nextPage);
  }

  handleLoadMoreClick(){
    this.props.getProductsData(this.props.nextPage);
  }

  render() {
    console.log(this.props.productsData);
    return (
        <React.Fragment>
        
        <div className="">
            <div className="">
                <h1>uma seleção de produtos</h1>
                <h1>especial para você</h1>
            </div>
            <button onClick={this.handleLoadMoreClick.bind(this)}>Load More</button>
        </div>
        </React.Fragment>
    );
  }
}
export default connect((store) => ({
  productsData: store.LandingPage.productsData,
  nextPage: store.LandingPage.nextPage,
}), actions)(LandingPage);
