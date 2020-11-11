function clone(target,map=new Map()) {
	if (typeof target === 'object') {
		let cloneTarget = null
		if (target === null) {} else {
			cloneTarget = Array.isArray(target) ? [] : {};
		}
		if (map.get(target)) {
			return map.get(target);
		}
		map.set(target, cloneTarget);
		for (const key in target) {
			cloneTarget[key] = clone(target[key], map);
		}
		return cloneTarget;
	} else {
		return target;
	}
};

let target = {
	field1: 1,
	field2: undefined,
	field3: 'ConardLi',
	field4: {
		child: 'child',
		child2: {
			child2: 'child2'
		}
	},
	field5: [2, 4, 8],
	field6: null
};
target.field4 = target
let result = clone(target)
// target.target=target
console.log(result)
// console.log(target)
