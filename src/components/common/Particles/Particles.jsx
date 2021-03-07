import React from "react";
import Particles from "react-particles-js";

const ParticlesComp = () => {
	return <Particles
		params={{
			"particles": {
				"number": {
					"value": 120
				},
				"size": {
					"value": 3
				}
			},
			"interactivity": {
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					}
				}
			}
		}}
		style={
			{
				position: 'absolute',
				left: 0,
				zIndex: 0
			}
		}
	/>
}

export default ParticlesComp