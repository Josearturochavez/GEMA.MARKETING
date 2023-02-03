document.addEventListener('DOMContentLoaded', function () {
	const codigo = document.getElementById('code');
	const button = document.getElementById('search');
	const eror = document.getElementById('eror');
	let link = "";

	

	function getlink () {
		if (codigo.value === '') {
		}else{
			codigo.value = codigo.value.toLowerCase();

			function dolink () {
				console.log("dolink iniciada");
				link = "./pagos/pago-";
				link = link + codigo.value + '.html';
				console.log(link);
				location.href = link;
			}

			if (codigo.value === 'ag-43250') {
				dolink();
			}else if (codigo.value === 'am-61234') {
				dolink();
			}else if (codigo.value === 'ap-59843') {
				dolink();
			}else if (codigo.value === 'mg-74632') {
				dolink();
			}else if (codigo.value === 'mm-94837') {
				dolink();
			}else if (codigo.value === 'mp-84736') {
				dolink();
			}else if (codigo.value === 'bg-42739') {
				dolink();
			}else if (codigo.value === 'bm-16238') {
				dolink();
			}else if (codigo.value === 'bp-04821') {
				dolink();
			}else if (codigo.value === 'prueba') {
				dolink();
			}else {
				function zom () {
					eror.classList.remove('zoom')
				}
				function dnone(){
					eror.classList.add('d-none')
				}
				eror.classList.add('zoom');
				eror.classList.remove('d-none');
				setTimeout(zom,600)
				setTimeout(dnone,6000)
			};
		};
	};

	button.onclick = getlink;
});