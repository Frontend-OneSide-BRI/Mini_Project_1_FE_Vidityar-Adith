const imageGallery = [
  {
    id: 1,
    title: "Exploring",
    src: "https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "nature",
  },
  {
    id: 2,
    title: "Sunset",
    src: "https://images.unsplash.com/photo-1685358665786-b00f2c4aa358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    category: "nature",
  },
  {
    id: 3,
    title: "Forest",
    src: "https://images.unsplash.com/photo-1685404910379-8e8163f53ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    category: "nature",
  },
  {
    id: 4,
    title: "City Bridge",
    src: "https://plus.unsplash.com/premium_photo-1685149096772-5947f727b130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    category: "nature",
  },
  {
    id: 5,
    title: "Flower",
    src: "https://images.unsplash.com/photo-1685355732476-4a84dc2e6557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "nature",
  },
  {
    id: 6,
    title: "Swimming",
    src: "https://plus.unsplash.com/premium_photo-1684917944838-30fe85aa6059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "sport",
  },
  {
    id: 7,
    title: "Running Athletes",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "sport",
  },
  {
    id: 8,
    title: "Weightlifting Woman",
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "sport",
  },
  {
    id: 9,
    title: "Yoga Exercise",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sport",
  },
  {
    id: 10,
    title: "Outdoor Sport",
    src: "https://plus.unsplash.com/premium_photo-1685055940260-7cdf1ee78d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sport",
  },
  {
    id: 11,
    title: "Weightlifting Man",
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sport",
  },
  {
    id: 12,
    title: "Weightlifting Woman",
    src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "sport",
  },
  {
    id: 13,
    title: "Banana",
    src: "https://images.unsplash.com/photo-1685399246583-54cb7a2a5b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "fruit",
  },
  {
    id: 14,
    title: "Orange",
    src: "https://images.unsplash.com/photo-1685307836310-6528e38b85d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    category: "fruit",
  },
  {
    id: 15,
    title: "Watermelon",
    src: "https://images.unsplash.com/photo-1685342995314-1e55a6591f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "fruit",
  },
  {
    id: 16,
    title: "Lemon",
    src: "https://images.unsplash.com/photo-1685209343081-30636b4a3f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "fruit",
  },
  {
    id: 17,
    title: "Cute Cat",
    src: "https://images.unsplash.com/photo-1685377507301-e01b4c17e1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "animal",
  },
  {
    id: 18,
    title: "Bird",
    src: "https://images.unsplash.com/photo-1685371442008-a3316948f1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1307&q=80",
    category: "animal",
  },
  {
    id: 19,
    title: "Fish Clown",
    src: "https://images.unsplash.com/photo-1685345324402-460a889064d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "animal",
  },
  {
    id: 20,
    title: "Goat",
    src: "https://images.unsplash.com/photo-1685210838807-696b25fa1684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    category: "animal",
  },
];

var selectFilter = document.querySelector('input[name="options-outlined"]');
var searchFilter = document.getElementById("inputFilterSearch");
var resultFilter = document.getElementById("resultFilter");

selectFilter.addEventListener("change", filterDataSelect);
searchFilter.addEventListener("input", filterDataSearch);
function filterDataSelect(e) {
  var selectedValue = e.target.value;

  // Hapus daftar result filter sebelumnya
  resultFilter.innerHTML = "";

  // Lakukan filter pada array objek
  var result = imageGallery.filter(function (item) {
    if (selectedValue === "") {
      return true; // Tampilkan semua item jika tidak ada category yang dipilih
    } else {
      return item.category === selectedValue;
    }
  });

  // Tampilkan result filter dalam daftar
  mapping(result, resultFilter);
}

function filterDataSearch() {
  var inputValue = inputFilterSearch.value.toLowerCase();

  // Hapus daftar result filter sebelumnya
  resultFilter.innerHTML = "";

  // Lakukan filter pada array objek
  var result = imageGallery.filter(function (item) {
    return item.title.toLowerCase().indexOf(inputValue) !== -1;
  });

  // Tampilkan result filter dalam daftar
  mapping(result, resultFilter);
}

mapping(imageGallery, resultFilter);

function mapping(data, content) {
  data.forEach(function (gambar) {
    var card = `<div class="col-sm-6 col-md-4 col-lg-3 mb-3 cardImage">
                      <div class="cardImageItem card">
                      <img src="${gambar.src}" class="card-img-top" style="height: 170px; object-fit: cover;">
                          <div class="card-body">
                              <p class="card-text">${gambar.title}</p>
                          </div>
                      </div>
                </div>`;
    content.innerHTML += card;
  });
}
