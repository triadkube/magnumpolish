const popup = (name, detail, imagesrc) => {
	let wrapper = document.getElementsByClassName('preview-wrapper')[0];
	let details = document.getElementsByClassName('details')[0];
	let title = document.getElementsByClassName('title')[0];
	let image = document.getElementsByClassName('photo')[0];
	let img = document.createElement('IMG');
	let content;

	wrapper.style.transform = "scaleY(1)";

	img.setAttribute('src', imagesrc);
	image.appendChild(img);

	let teflon = 'It gives a High Glossy finish<br><br>Can be applied on Painted Metal Body, Fibre, Nickel, Chrome, Vinyl and Tyres<br><br> It protects the surface from UV rays of Sunlight and no fading, Hence maintain new appearence<br><br><br>Packing: 100ml & 250ml';
	let glassup = 'It removes all stain, dirt & gum on the car front glass and keeps it clear.<br><br>Suitable for all natural , synthetic & top coated leather upholsteries. <br><br>Gives a natural, fresh fragrance for long time.<br><br><br>Packing : 250 ml.<br>Bulk Pack: 1 / 5 / 20 kg';
	let foamwash = 'It’s a soft , natural shampoo , helps  for an easy water wash. <br><br>It cleans all hard dirt deposits thus 100% perfect wash. <br><br>Does not fade away the paint & surfaces.<br><br><br>Packing : 250 ml.<br>Bulk Pack: 1 / 5 / 20 kg';
	let waxpolish = 'High wax content gives  extra shining life and beautiful finish<br><br><br>Packing : 100 gm';
	let chainlub = 'Contains synthetic oil & solid lubricants<br><br>Less frictional losses due to very low rolling resistance<br><br>Gives good result when used periodically at every 500 kms<br><br>Good Penetration & adhesion prevents the lubricant from dripping off the chain<br><br>It provides complete lubrication & reduces friction<br><br>Increases chain life & avoids “stiff” links<br><br>Suitable for standard drive chains & seal ring, O-ring, X-ring and Z – ring chains<br><br>Multi purpose chanin lube, corrosion and wear protection<br><br><br>Packing: 150ml'
	let blackpolish = 'Packing : 40 ml & 75 ml';
	let brownpolish = 'Packing : 75 ml';

	switch(detail) {
		case 1:
			content = teflon;
			break;

		case 2:
			content = glassup;
			break;

		case 3:
			content = foamwash;
			break;

		case 4:
			content = waxpolish;
			break;

		case 5:
			content = chainlub;
			break;

		case 6:
			content = blackpolish;
			break;

		case 7:
			content = brownpolish;
			break;

		default:
			content = 'Description not available :('
	}

	console.log(name,details, content);

	details.innerHTML = content;
	title.innerHTML = name;

	document.getElementsByClassName('close')[0].addEventListener("click", () => {
		wrapper.style.transform = "scaleY(0)";
		setTimeout(() => {image.removeChild(img);}, 500)

	})
}

const enquire = () => {
	window.location = 'contact.html';
}



