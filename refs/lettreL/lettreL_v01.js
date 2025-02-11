// Generated by Parametrix

const { polygon } = require('@jscad/modeling').primitives;
//const { subtract } = require('@jscad/modeling').booleans;
//const { union, intersect, scission, subtract } = require('@jscad/modeling').booleans;
const { union, intersect, subtract } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRotate } = require('@jscad/modeling').extrusions;
const { translate, rotate } = require('@jscad/modeling').transforms;

const main = () => {

const ctr_face_fig_lettreL_face1_Fa000_Ctr000 = polygon({ points: [ [ 0.0000, 0.0000 ],
	[ 40.0000, 0.0000 ],
	[ 40.0000, 10.0000 ],
	[ 10.0000, 10.0000 ],
	[ 10.0000, 60.0000 ],
	[ 0.0000, 60.0000 ],
	[ 0.0000, 0.0000 ] ] });

face_fig_lettreL_face1_Fa000 = ctr_face_fig_lettreL_face1_Fa000_Ctr000;
fig_lettreL_face1 = face_fig_lettreL_face1_Fa000;

const subpax_lettreL =
	translate( [ 0, 0, 0, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 10}, fig_lettreL_face1 )
		)
	);

const pax_lettreL = subpax_lettreL;

return pax_lettreL;
}
module.exports = { main };
