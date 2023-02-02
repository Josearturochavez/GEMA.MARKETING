document.addEventListener('DOMContentLoaded', function () {
	const codigo = document.getElementById('code');
	const button = document.getElementById('search');
	let link = "";

	function getlink () {
		if (codigo.value === '') {
		}else{
			link = "./pagos/pago-";
			link = link + codigo.value + '.html';
			console.log(link);
			location.href = link;
		};
	};

	button.onclick = getlink;
});