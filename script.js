const contentCard = document.getElementById("content-cards");

clubs.forEach((club) => {
  contentCard.innerHTML += `<button id="${club.clubName}" class="card-clubs">
                          <img src="assets/image/${club.logo}">
                          <h3>${club.clubName}</h3>
                          <p>${club.city}<br>
                          ${club.region}<br>
                          ${club.since}</p>
                          </button>`
});

const cardClubs = document.querySelectorAll('.card-clubs');
cardClubs.forEach((cardClub) => {
  const idCardClub = cardClub.getAttribute('id');
  cardClub.addEventListener('click', function(){
    console.log(idCardClub);
    //cardClub.classList.toggle('active'); //Toggle klik tanpa hapus class yang tidak di klik
    cardClubs.forEach((card) => card.classList.remove('active'));

    this.classList.add('active');
  });
});