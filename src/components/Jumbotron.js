import React, { Component } from 'react';

export default class Jumbotron extends Component {
	render() {
		return (
			<div className="jumbotron my-4">
				<h1 className="display-4">Find Stack Overflow!</h1>
				<div className="lead">
					<form>
						<div className="row">
							<div className="col-8">
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Termino a buscar, ejemplo: Js Call function undefined"
								/>
							</div>
							<div className="col-4">
								<button className="btn btn-primary btn-lg btn-block">Buscar</button>
							</div>
						</div>
					</form>
				</div>
				<hr className="my-4" />
				<p>With the power of Stack Overflow</p>
			</div>
		);
	}
}
