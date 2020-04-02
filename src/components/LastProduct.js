import React, { Component } from 'react';
class LastProduct extends Component{

    /* --- Aca arrancamos dandole el estado */
    constructor(props){
        super(props);
        this.state= {
            name:"",
            price: "",
            description:"",
            image1:""
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
		this.apiCall("http://localhost:3000/api/fields", this.showLastProduct)
	}

	componentDidUpdate(){
        console.log("Me actualicé!");
    }
	/* Esta es la funcion consecuencia de "apiCall()" */
    showLastProduct = (data)=>{
        console.log(data);
        
       this.setState(
           {
            id: data.data[0].id,
            name: data.data[0].name,
            price: data.data[0].price,
            description: data.data[0].description,
            image1: data.data[0].image1
           }
        )  
    }
    render(){
        return(
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last product in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src={`http://localhost:3000/images/fields/${this.state.image1}`}alt=""/> 
                    </div>
                    <h3>Nombre: {this.state.name}</h3>
                    <p>Precio: ${this.state.price}</p>
                    <p>{this.state.description}</p>
                    <a target="_blank" rel="nofollow" href={`http://localhost:3000/fields/${this.state.id}`}>View product detail</a>
                </div>
            </div>
        </div>
        )
    }
}

export default LastProduct;