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
        formResponse: null,
      };
  }
  componentDidMount(){
    this.props.getProductsData(this.props.nextPage);
  }

  handleLoadMoreClick(){
    this.props.getProductsData(this.props.nextPage);
  }

  formatPrices(x){
    return parseFloat(x).toFixed(2).replace(".", ",");
    ;
  }

  render() {  
    
    //set css for newsletter form response
    var responseCss = this.state.formResponse? (this.state.formResponse == "success")?"success":"error":"";

    //Create a arary of produts 
    var products = this.props.productsData.map(product => { 
      return(
        (product)?
        <div className="card" key={product.id}>
          <div className="product-img">
            <img src={product.image} />
          </div>
          <p className="product-name">{product.name}</p>
          <p>{product.description}</p>
          <p className="product">{`De: R\$${this.formatPrices(product.oldPrice)}`}</p>
          <p><span>{`Por: R\$${this.formatPrices(product.price)}`}</span></p>
          <p>{`ou ${product.installments.count}x de R\$${this.formatPrices(product.installments.value)}`}</p>
          <button className="btn buy-btn">Comprar</button>
        </div>
        :<div className="card">
        </div>
      );
    })

    return (
      <React.Fragment> 
        <Header/>
        <section className="products">
          <h2>Sua seleção especial</h2>
          <div className="card-group">
            {products}  
          </div>
          <button className="btn larger-btn" onClick={this.handleLoadMoreClick.bind(this)}>Ainda mais produtos aqui!</button>
        </section>
        <section className="share">
          <h2>Compartilhe a novidade</h2>
          <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
          <form id="share" onSubmit={(e) => this.onSubmit(e)}>
            <div className="input">
              <label>Nome do seu amigo: </label>
              <input type="text" name="name" required/>
            </div>
            <div className="input">
              <label>E-mail:</label>
              <input type="email" name="email" required/>
            </div>
            <p id="response" className={responseCss}>{this.state.formResponse}</p>
          </form>
          <button type="submit" form="share" className="btn larger-btn">Enviar agora</button> 
        </section>
        <Footer/>
      </React.Fragment>
    );
  }
 
  //The filds have been validated by the browser using type text and email and the flag required but I also check ising a RegEx
  onSubmit(e){
    e.preventDefault(); 
    var name = e.target.name.value;
    var email = e.target.email.value;
    if(name && (new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?").test(email))){
      var body = {
        action: "newsletter_register",
        name: name,
        email: email,
        token_rdstation: "9965307dcf4a9857b06d6acbe38a5ee1",
        identificador: null,
        form_url: "http://gabrieldonadel.github.io",
        page_title: "Desafio FrontEnd Gabriel Donadel - Linx",
        client_id: "949a251d-b12e-4bff-9ad4-8e4ddebeb8e8",
        traffic_source: "encoded_eyJmaXJzdF9zZXNzaW9uIjp7InZhbHVlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8iLCJleHRyYV9wYXJhbXMiOnt9fSwiY3VycmVudF9zZXNzaW9uIjp7InZhbHVlIjoiKG5vbmUpIiwiZXh0cmFfcGFyYW1zIjp7fX0sImNyZWF0ZWRfYXQiOjE1NjExNDcwMDY0NzZ9",
        _is: 3
      }
      //This subscribe the user on a Linx NewsLetter using a RDStation request found on Linx official webpage
      this.props.subscribeNewsLetter(body).then(() =>{ 
        if(this.props.formSuccess && this.props.formSuccess.result){
          this.setState({formResponse: this.props.formSuccess.result});
        } 
      });
    }else{
      this.setState({formResponse: "Verifique o preenchimento dos campos"});
    }
  }
}
export default connect((store) => ({
  productsData: store.LandingPage.productsData,
  nextPage: store.LandingPage.nextPage,
  formSuccess: store.LandingPage.formSuccess,
}), actions)(LandingPage);
