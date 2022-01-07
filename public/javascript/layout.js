let y = document.getElementsByClassName('nav-link');

if(typeof sessionStorage.buttontype == undefined){
	sessionStorage.buttontype = 'home';
}

else{
	if(sessionStorage.buttontype == 'home'){
		document.getElementsByClassName('nav-link')[0].classList.add('active')
		document.getElementsByClassName('nav-link')[1].classList.remove('active')
		document.getElementsByClassName('nav-link')[2].classList.remove('active')
	}
	
	else if(sessionStorage.buttontype == 'about'){
		document.getElementsByClassName('nav-link')[0].classList.remove('active')
		document.getElementsByClassName('nav-link')[1].classList.add('active')
		document.getElementsByClassName('nav-link')[2].classList.remove('active')
	}
	
	else if(sessionStorage.buttontype == 'database'){
		document.getElementsByClassName('nav-link')[0].classList.remove('active')
		document.getElementsByClassName('nav-link')[1].classList.remove('active')
		document.getElementsByClassName('nav-link')[2].classList.add('active')
	}
}

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