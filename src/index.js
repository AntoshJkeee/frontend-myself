import "./styles/index.scss";

const c = [123, 233, "555"];
const b = {
	d: 235,
	z: "12222",
};

let d = { xxx: "test" };

// let a = {
// 	test: 'sass',
// 				asd: 123,
// 	gg: 23,
// 		c,
// };

function test() {
	return { ...c, ...b, ...d };
}

test();
//
// let b = 123
// console.log('test' + a);console.log('test' + a);

// console.log('test' + a);console.log('test' + a);
