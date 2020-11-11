function demo(start, end, acc) {
	if (start > end) {
		return acc
	} else {
		return demo(start + 1, end, acc + 1)
	};
};
console.log(demo(0, 10, 0));
