const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
	let str1 = firstRow.length;
	let str2 = secondRow.length;
	let countStr1 = 0;
	let countStr2 = 0;

	for(let i = 0; i < str1; i++) {
		if (firstRow.charAt(1) == firstRow[i]) {
			countStr1 += 1;
		}

	}

	for(let i = 0; i < str2; i++) {
		if (secondRow.charAt(3) == secondRow[i]) {
			countStr2 += 1;
		}

	}


	if(countStr1 > countStr2) {
		return(firstRow);
	} else if (countStr1 < countStr2) {
		return(secondRow);
	} else if (countStr1 == countStr2) {
		return(firstRow + ' ' + secondRow);
	} else {
		return ('no str');
	}
}

console.log(getRow(firstRow, secondRow));