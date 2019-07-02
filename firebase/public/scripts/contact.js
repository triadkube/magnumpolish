const submitAction = () => {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let mobile = document.getElementById('mobile');
	let comment = document.getElementById('comments');
	let enquiry = document.getElementById('rdo2');
	let type = undefined;

	if(enquiry) {
		type = 'enquiry';
	}
	else {
		type = 'compliant';
	}
	
	fetch('https://magnumpolish.herokuapp.com/feedback', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
			},
		body: JSON.stringify({
			name: name.value,
			email: email.value,
			mobile: mobile.value,
			comment: comment.value,
			type: type
			})
	}).then(data => console.log(data));
}