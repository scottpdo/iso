import React from 'react';
import ReactDOM from 'react-dom';

class SceneComponent extends React.Component {

	constructor() {
		super();

		this.state = {
			t: 0,
            canvas: null,
			keysdown: {}
		};
	}

	init() {

		let PAUSE = false;

		this.setState({ canvas: ReactDOM.findDOMNode(this) });

		let render = () => {

			let t = _this.state.t;

            // RENDERING HAPPENS HERE

			_this.setState({ t: t + 1 });

			if ( !PAUSE ) {
				window.requestAnimationFrame(render);
			}
		};

		render();

		function onResize() {

		}

		window.addEventListener('resize', onResize);

		window.addEventListener('keydown', function(e) {

			if ( e.keyCode === 32 ) {
				if ( PAUSE ) {
					PAUSE = false;
					render();
				} else {
					PAUSE = true;
				}
			}
		});
	}

	componentDidMount() {
		this.init.call(this);
	}

	render() {
		return (
			<canvas />
		);
	}
}

export default SceneComponent;
