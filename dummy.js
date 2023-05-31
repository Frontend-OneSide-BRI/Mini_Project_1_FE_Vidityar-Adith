const galleryDummyData = [];

for (let i = 1; i <= 5; i++) {
  galleryDummyData.push({
    id: i,
    title: `Film ${i}`,
    src: `https://source.unsplash.com/random/900x900?film-${i}`,
    category: "film",
  });
  galleryDummyData.push({
    id: i,
    title: `Nature ${i}`,
    src: `https://source.unsplash.com/random/900x900?nature-${i}`,
    category: "nature",
  });
  galleryDummyData.push({
    id: i,
    title: `Photography ${i}`,
    src: `https://source.unsplash.com/random/900x900?photography-${i}`,
    category: "photography",
  });
}

var dummyResult = document.getElementById("dummyImage");

galleryDummyData.forEach(function (gambar) {
  var card = `<div class="col-sm-6 col-md-4 col-lg-3 mb-3 cardImage">
                      <div class="cardImageItem card">
                      <img src="${gambar.src}" class="card-img-top" style="height: 170px; object-fit: cover;">
                          <div class="card-body">
                              <p class="card-text">${gambar.title}</p>
                          </div>
                      </div>
                </div>`;
  dummyResult.innerHTML += card;
});
