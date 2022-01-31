let y = document.getElementsByClassName('nav-link');

if(typeof sessionStorage.buttontype == undefined){
	sessionStorage.buttontype = 'home';
}

else{
	if(sessionStorage.buttontype == 'home'){
		document.getElementsByClassName('nav-link')[0].classList.add('active')
		document.getElementsByClassName('nav-link')[1].classList.remove('active')
		document.getElementsByClassName('nav-link')[2].classList.remove('active')
		document.getElementsByClassName('nav-link')[3].classList.remove('active')
	}
	
	else if(sessionStorage.buttontype == 'about'){
		document.getElementsByClassName('nav-link')[0].classList.remove('active')
		document.getElementsByClassName('nav-link')[1].classList.add('active')
		document.getElementsByClassName('nav-link')[2].classList.remove('active')
		document.getElementsByClassName('nav-link')[3].classList.remove('active')
	}
	
	else if(sessionStorage.buttontype == 'database'){
		document.getElementsByClassName('nav-link')[0].classList.remove('active')
		document.getElementsByClassName('nav-link')[1].classList.remove('active')
		document.getElementsByClassName('nav-link')[2].classList.add('active')
		document.getElementsByClassName('nav-link')[3].classList.remove('active')
	}
	
	else if(sessionStorage.buttontype == 'search'){
		document.getElementsByClassName('nav-link')[0].classList.remove('active')
		document.getElementsByClassName('nav-link')[1].classList.remove('active')
		document.getElementsByClassName('nav-link')[2].classList.remove('active')
		document.getElementsByClassName('nav-link')[3].classList.add('active')
	}
}

document.getElementById("top button").addEventListener("click", homeOnclick);
document.getElementById("home button").addEventListener("click", homeOnclick);
document.getElementById("about button").addEventListener("click", aboutOnclick);
document.getElementById("database button").addEventListener("click", databaseOnclick);
document.getElementById("search button").addEventListener("click", searchOnclick);

if(document.getElementById("home page about button"))
	document.getElementById("home page about button").addEventListener("click", aboutOnclick);

if(document.getElementById("home page database button"))
	document.getElementById("home page database button").addEventListener("click", databaseOnclick);

if(document.getElementById("go search button"))
	document.getElementById("go search button").addEventListener("click", startSearch);

function homeOnclick(){
	console.log("home button is onclick");
	sessionStorage.buttontype = 'home';
}

function aboutOnclick(){
	console.log("about button is onclick");
	sessionStorage.buttontype = 'about';
}

function databaseOnclick(){
	console.log("database button is onclick");
	sessionStorage.buttontype = 'database';
}

function searchOnclick(){
	console.log("search button is onclick");
	sessionStorage.buttontype = 'search';
}

function startSearch(){
	sessionStorage.buttontype = 'database';
	let district = document.getElementById("district");
	let difficu = document.getElementById("difficu");
	console.log(district.options[district.selectedIndex].value);
	console.log(difficu.options[difficu.selectedIndex].value);
	console.log(district.options[district.selectedIndex].text);
	console.log(difficu.options[difficu.selectedIndex].text);
	
	let result = document.getElementById("result");
	result.innerHTML = '<a href="/">'+district.options[district.selectedIndex].text +'</a>'; 
	result.innerHTML +='<br>';
	result.innerHTML += '<a href="/about">' +difficu.options[difficu.selectedIndex].text+'</a>'; 
}