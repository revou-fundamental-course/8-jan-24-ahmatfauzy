alert("SELAMAT DATANG");

function calculate() {
  var panjangsisi = document.getElementById("panjangsisi").value;

  if (isNaN(panjangsisi) || panjangsisi <= 0) {
    alert("Kolom form harus berisi karakter dan juga berupa angka positif");
    return;
  }

  // hitung luas keliling
  var luas = panjangsisi * panjangsisi;
  var keliling = 4 * panjangsisi;

  // menampilkan hasil
  document.getElementById("result").innerHTML = `
      <p>Luas Persegi: ${luas}</p>
      <p>Keliling Persegi: ${keliling}</p>
    `;
}

//reset
function resetForm() {
  document.getElementById("panjangsisi").value = "";
  document.getElementById("result").innerHTML = "";
}
