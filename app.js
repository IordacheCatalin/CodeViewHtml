

const htmlRsult = document.getElementById('apiResult');
htmlRsult.innerHTML = " this text";
console.log(htmlRsult);


const url = 'https://myallies-breaking-news-v1.p.rapidapi.com/GetCompanyDetailsBySymbol?symbol=twtr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7d6cbb20fmsh5a5edabb7a77dd2p1767efjsne4007edd3b7a',
		'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com'
	}
};
async function fetchData() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

fetchData();
