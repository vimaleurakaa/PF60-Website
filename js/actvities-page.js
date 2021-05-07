const dataPane = document.getElementById('dataPane');

data.map((item) => {
	const id = item.title.split(' ').join('').toLowerCase();
	dataPane.innerHTML += `
  <div class="row py-5" id=${id}>
  <div class="col-md-6">
  <div class="image-container">
  <img class="img-fluid" src="${item.img}" alt="service" /></div>
  </div>

  <div class="col-md-6">
  <div class="act-content-container">
  <h2>${item.title}</h2>
 <!-- <p>${item.description}</p> -->
  <ul>${item.clubData
		.map((clubdata) => {
			return `<a href="tel:${clubdata.contact}"><li>${clubdata.clubName}</li></a>`;
		})
		.join('')}</ul></div></div></div>
  `;
});
