let prev = document.getElementById("prev");
let next = document.getElementById("next");
let image = document.getElementById("image");
let buttonPlate = document.getElementById("buttonPlate");

let images = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/city.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/cloudy.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/green.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/pretty_clouds.jpg"];


let buttonList = document.createElement("LI");
for(let i = 1; i <= images.length; i++) {
	let buttonElement = document.createElement("BUTTON");
	buttonElement.innerHTML = String(i);
	buttonElement.className = "list";
	//buttons.append(buttonElement);
	buttonList.appendChild(buttonElement);
	buttonList.childNodes[i-1].addEventListener("click", function() {
		imageIndex = i-1;
		image.setAttribute("src", images[imageIndex]);
	});
}


buttonPlate.appendChild(buttonList);


	

let imageIndex = 0;

// point to previous image when prev button is clicked

prev.addEventListener("click", function() {
	if(imageIndex == 0) {
		imageIndex = images.length - 1;
	}
	else {
		imageIndex--;
	}
	image.setAttribute("src", images[imageIndex]);
});

next.addEventListener("click", function() {
	if(imageIndex == images.length - 1) {
		imageIndex = 0;
	}
	else {
		imageIndex++;
	}
	image.setAttribute("src", images[imageIndex]);
});

	
