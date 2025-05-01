$(document).ready(documentReady);

function documentReady(){
	const form = document.querySelector(".form");
	const result = document.getElementById('result');

	form.addEventListener('submit', function(e) {
		const formData = new FormData(form);
		e.preventDefault();

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		result.innerHTML = "Even geduld aub..."
		result.style.fontFamily = "'Roboto', sans-serif";
		fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: json
			})
			.then(async (response) => {
				let json = await response.json();
				if (response.status == 200) {
					result.innerHTML = "Bericht verstuurd";
					result.style.fontFamily = "'Roboto', sans-serif";
				} else {
					console.log(response);
					result.innerHTML = json.message;
				}
			})
			.catch(error => {
				console.log(error);
				result.innerHTML = "Er is iets misgegaan!";
				result.style.fontFamily = "'Roboto', sans-serif";
			})
			.then(function() {
				form.reset();
				setTimeout(() => {
					result.style.display = "none";
				}, 3000);
			});
});
}