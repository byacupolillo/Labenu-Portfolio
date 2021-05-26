import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		inputComentario: ""
	}

	onChangeComentario = (event) => {
		this.setState({ inputComentario: event.target.value }); 
		console.log(event.target.value)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.inputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
