//IMPORTANTÍSIMO EL IMPORT DE REACT (import de la librería)
import React from 'react';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MetricPrice from './components/MetricPrice';
import MetricProducts from './components/MetricProducts';
import MetricUsers from './components/MetricUsers';
import LastProduct from './components/LastProduct';
import Categories from './components/Categories';

//Las funciones comienzan con la letra mayúscula para evitar confundirnos con el componente. 
function App () {

	// JSX - Pseudo lenguaje de REACT 
	return (
		<div id="wrapper">
			{/* Componente Sidebar */}
			<Sidebar/>			
			{/*Reemplazar todo los que es class por className */}
			<div id="content-wrapper" className="d-flex flex-column">

				<div id="content">
					{/* Componente Navbar */}
					<Navbar/>
					
					<div className="container-fluid">

						<div className="d-sm-flex align-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
						</div>
						
						<div className="row">

							{/* Componente Metrics */}
							<MetricProducts/>
							<MetricPrice/>
							<MetricUsers/>

							{/* {data.map((unDato, i) => {
									return (
										<Metric
											key={i}
											title={unDato.title}
											value={unDato.value}
											icon={unDato.icon}
											border={unDato.border}
										/>
									)
								})
							} */}
						</div>
						
						<div className="row">
							{/* Último Producto Cargado*/}
							<LastProduct/>

							{/* Categorías */}
							<Categories/>
						</div>
					</div>
				</div>
				
				<footer className="sticky-footer bg-white">
					<div className="container my-auto">
						<div className="copyright text-center my-auto">
							<span>Copyright &copy; Dashboard 2020</span>
						</div>
					</div>
				</footer>
				
			</div>
		</div>
	);
}

export default App;
