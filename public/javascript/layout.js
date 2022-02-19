let y = document.getElementsByClassName('nav-link');
let hikingRoute = [];
hikingRoute=[{'id':1, 'name':'Dragon Back', 'path':'dragon_back', 'district':'HKisland', 'difficulty':'threestar'},
			 {'id':2, 'name':'Victoria Peak', 'path':'peak', 'district':'HKisland', 'difficulty':'onestar'},
			 {'id':3, 'name':'High West', 'path':'high_west', 'district':'HKisland', 'difficulty':'twostar'},
			 {'id':4, 'name':'Tai Tam', 'path':'tai_tam', 'district':'HKisland', 'difficulty':'twostar'},
			 {'id':5, 'name':'Kowloon Peak', 'path':'kowloon_peak', 'district':'Kowloon', 'difficulty':'twostar'},
			 {'id':6, 'name':'Razor Hill', 'path':'razar_hill', 'district':'Kowloon', 'difficulty':'threestar'},
			 {'id':7, 'name':'Lion Rock', 'path':'lion_rock', 'district':'Kowloon', 'difficulty':'threestar'},
			 {'id':8, 'name':'Sunset Peak', 'path':'sunset_peak', 'district':'Lantau', 'difficulty':'fourstar'},
			 {'id':9, 'name':'Lantau Peak', 'path':'lantau_peak', 'district':'Lantau', 'difficulty':'fourstar'},
			 {'id':10, 'name':'Ngong Ping Trail', 'path':'ngong_ping', 'district':'Lantau', 'difficulty':'twostar'},
			 {'id':11, 'name':'Yuen Tsuen Ancient Trail', 'path':'yuentsuen_trail', 'district':'NewTerr', 'difficulty':'threestar'},
			 {'id':12, 'name':'Tai To Yan', 'path':'tai_to_yan', 'district':'NewTerr', 'difficulty':'fourstar'},
			 {'id':13, 'name':'Ho Pui Resevoir', 'path':'ho_pui', 'district':'NewTerr', 'difficulty':'onestar'},
			 {'id':14, 'name':'Kai Kung Leng', 'path':'kai_kung', 'district':'NewTerr', 'difficulty':'fourstar'},];

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
	sessionStorage.buttontype = 'search';
	let district = document.getElementById("district");
	let difficu = document.getElementById("difficu");
	console.log(district.options[district.selectedIndex].value);
	console.log(difficu.options[difficu.selectedIndex].value);
	console.log(district.options[district.selectedIndex].text);
	console.log(difficu.options[difficu.selectedIndex].text);
	
	
	console.log(hikingRoute);
	let result = document.getElementById("result");
	let counter = 0;
	result.innerHTML ='';
	/*
	result.innerHTML = '<a href="/">'+district.options[district.selectedIndex].text +'</a>'; 
	result.innerHTML +='<br>';
	result.innerHTML += '<a href="/about">' +difficu.options[difficu.selectedIndex].text+'</a>'; 
	*/
	
	for(let i = 0; i < hikingRoute.length; i++){
		let schDist = district.options[district.selectedIndex].value;
		let schDiff = difficu.options[difficu.selectedIndex].value;
		
		if(district.options[district.selectedIndex].value == 'ALL')
			schDist = hikingRoute[i].district;
		
		if(difficu.options[difficu.selectedIndex].value == 'ALL')
			schDiff = hikingRoute[i].difficulty;
		
		if(hikingRoute[i].district == schDist && 
		   hikingRoute[i].difficulty == schDiff){
			if(counter > 0)
				result.innerHTML +='<br>';
			result.innerHTML += '<a href="/'+hikingRoute[i].path+'">'+hikingRoute[i].name +'</a>'; 
			counter++;
		   }
	}
	
	if(counter == 0){
		result.innerHTML +=':( Sorry, we could not find any results.';
	}
}