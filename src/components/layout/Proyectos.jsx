import './Proyectos.css';
import Modal from '../Modal';
import proyectos from '../data/proyectos';
import { useState } from 'react';

const Proyectos = () => {
	const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
	const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectos);
	const [estadoModal, setEstadoModal] = useState(false);
	const [proyectoSelecionado, setProyectoSelecionado] = useState(proyectos[0]);

	const handleChange = (e) => {
		const categoria = e.target.id;
		setCategoriaSelecionada(categoria);

		if (categoria === 'todos') {
			setProyectosFiltrados(proyectos);
		} else {
			const nuevosProyecto = proyectos.filter((proyecto) => {
				if (proyecto.categoria === categoria) {
					return true;
				}
			});
			setProyectosFiltrados(nuevosProyecto);
		}
	};

	const openModal = (e, id) => {
		e.preventDefault();
		setEstadoModal(true);
		document.body.style.overflow = 'hidden';
		const proyecto = proyectos.find((proyecto) => {
			if (proyecto.id === id) {
				return true;
			}
		});

		setProyectoSelecionado(proyecto);
	};

	const closeModal = () => {
		setEstadoModal(false);
		document.body.style.overflow = 'auto';
	};

	return (
		<>
			<section className="proyectos" id="proyectos">
				<div className="encabezado">
					<h3 className="titulo">Mis proyectos</h3>
					<p className="subtitulo">Estos son mis trabajos como freelance.</p>
				</div>
				<div className="filtros">
					<label htmlFor="todos">
						<input
							type="radio"
							name="categoria"
							id="todos"
							onChange={handleChange}
							checked={categoriaSelecionada === 'todos'}
						/>
						<span className="opcion">Todos</span>
					</label>
					<label htmlFor="diseño-web">
						<input
							type="radio"
							name="categoria"
							id="diseño-web"
							onChange={handleChange}
							checked={categoriaSelecionada === 'diseño-web'}
						/>
						<span className="opcion">Diseño Web</span>
					</label>
					<label htmlFor="desarrollo-web">
						<input
							type="radio"
							name="categoria"
							id="desarrollo-web"
							onChange={handleChange}
							checked={categoriaSelecionada === 'desarrollo-web'}
						/>
						<span className="opcion">Desarrollo Web</span>
					</label>
					<label htmlFor="aplicaciones-moviles">
						<input
							type="radio"
							name="categoria"
							id="aplicaciones-moviles"
							onChange={handleChange}
							checked={categoriaSelecionada === 'aplicaciones-moviles'}
						/>
						<span className="opcion">Aplicaciones Moviles</span>
					</label>
					<label htmlFor="desarrollo-software">
						<input
							type="radio"
							name="categoria"
							id="desarrollo-software"
							onChange={handleChange}
							checked={categoriaSelecionada === 'desarrollo-software'}
						/>
						<span className="opcion">Desarrollo de Software</span>
					</label>
				</div>
				<div className="grid">
					{proyectosFiltrados.map((proyecto, index) => {
						return (
							<div className="proyectos" key={proyecto.id}>
								<a href="#" className="thumb" onClick={(e) => openModal(e, proyecto.id)}>
									<img loading="lazy" src={proyecto.thumb.url} alt={proyecto.thumb.alt} />
								</a>
								<div className="info">
									<div className="textos">
										<a href="#" className="nombre" onClick={(e) => openModal(e, proyecto.id)}>
											{proyecto.info.nombre}
										</a>
										<p className="categoria">{proyecto.info.categoria}</p>
									</div>
									<a href="#" className="btn-ir" onClick={(e) => openModal(e, proyecto.id)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" viewBox="0 0 16 16">
											<path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
										</svg>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{estadoModal && <Modal closeModal={closeModal} trabajo={proyectoSelecionado} />}
		</>
	);
};

export default Proyectos;
