const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) { 
	let results = [];
	str = str.toLowerCase();
	for (let ind of fruit) {
		//this condtional checks if the input str is inside the fruit array
		if (ind.toLowerCase().includes(str.toLowerCase())) {
			results.push(ind);
		}
	}

	return results;
}

function searchHandler(e) {
	let inputVal = e.target.value;
	let results = search(inputVal)
	showSuggestions(results);
}

function showSuggestions(results) {
	suggestions.innerHTML = '';
	if (results.length > 0) {
	for (let i = 0; i < results.length; i++) {
		let li = document.createElement('li');
		li.innerText = results[i];
		suggestions.append(li);
	}
	} 
}

function useSuggestion(e) {
	//if a li is clicked then the input will change to the li
	if (e.target.matches('li')) {
		input.value = e.target.innerText;
	}
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
