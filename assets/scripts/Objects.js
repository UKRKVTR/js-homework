let human = {
  name: "Oleg",
  lastname: "Vinnik",
  email: "olegvinnik@gmail.com",
  password: "ksjhiogj",
  phone: "+380663343252",
  addres: {
    country: "Ukraine",
    city: "Kyyv",
    street: "Shevchenka",
  },
  showAddres: function () {
    console.log(
      `Країна - ${this.addres.country}, місто - ${this.addres.city} ${this.addres.street}`
    );
  },
  changeNumber: function (newNumber) {
    return (this.phone = newNumber);
  },
};

console.log(human.showAddres());
human.changeNumber("+380994786562");
console.log(human.phone);
human.isMale = true;
delete human.addres;
console.log(human);

let cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};
for (key in cat) {
  console.log(key);
}
