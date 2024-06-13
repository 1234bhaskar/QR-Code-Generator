let imageBox = document.getElementById("content");
let string = document.getElementById("input");
let QR = document.getElementById("qrImage");

const qrGen = () => {
  let value = string.value;
  if (value.length > 0) {
    QR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    QR.classList.add("qrImage2");
  }
};
