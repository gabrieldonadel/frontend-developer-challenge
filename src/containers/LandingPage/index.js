import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import * as actions from './actions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

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

    var products = this.props.productsData.map(product => {

      return(
        <div class="card">
          {product.name}
        </div>
      );
    })
    return (
        <React.Fragment> 
          <Header/>
          <section className="products">
            <h2>Sua seleção especial</h2>
            <div>
              {products}  
            </div>
            <button onClick={this.handleLoadMoreClick.bind(this)}>Load More</button>
          </section>
          <Footer/>
        </React.Fragment>
    );
  }
}
export default connect((store) => ({
  productsData: store.LandingPage.productsData,
  nextPage: store.LandingPage.nextPage,
}), actions)(LandingPage);
