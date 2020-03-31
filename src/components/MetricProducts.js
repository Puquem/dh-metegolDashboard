import React, { Component } from 'react';
class MetricProducts extends Component{

    /* --- Aca arrancamos dandole el estado */
    constructor(props){
        super(props);
        this.state= {
            quatity:"",
            title: "Products quantity in Database"
        }
    }

    /* Funcion para llamar a la API, hacemos una func porq vamos a llamar a varias */
    apiCall(url, handler){
        fetch(url)
            .then( response => response.json() )
            .then( data => handler(data) )
            .catch( error => console.log(error))
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!");
        this.apiCall("http://localhost:3000/api/fields", this.showProducts)
    }

    componentDidUpdate(){
        console.log("Me actualicé!");
    }

    /* Esta es la funcion consecuencia de "apiCall()" */
    showProducts = (data)=>{
        console.log(data);
        
       this.setState(
           {
            quantity: data.metadata.quantity,
            title: "Products quantity in Database"
           }
        ) 
    }

    render(){
        console.log("Me rendericé!");

        return(
            <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">    
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">{this.state.title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.quantity}</div>
                    </div>
                <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }
}

export default MetricProducts;