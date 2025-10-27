let nilai = ["Gilang", "Hendri", "Ficko", "Gita", "Cia"];

let nama = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let matriks = [
  [1.1, 2.2, 3.3],
  [4.4, 5.5, 6.6],
  [7.7, 8.8, 9.9],
];

function tampilkanNilai() {
  const outputElement = document.getElementById("outputNilai");

  if (outputElement.style.display === "block") {
    outputElement.style.display = "none";
  } else {
    outputElement.style.display = "block";

    outputElement.innerHTML = `
      <h3>Data Nilai</h3>
      <p>Array nilai: [${nilai.join(", ")}]</p>
      <p>Panjang nilai: ${nilai.length}</p>
      <p>Nilai pertama: ${nilai[0]}</p>
      <p>Nilai terakhir: ${nilai[nilai.length - 1]}</p>
    `;
  }
}

function tampilkanNama() {
  const outputElement = document.getElementById("outputNama");

  if (outputElement.style.display === "block") {
    outputElement.style.display = "none";
  } else {
    outputElement.style.display = "block";

    outputElement.innerHTML = `
      <h3>Data Nama</h3>
      <p>Array nama: [${nama.join(", ")}]</p>
      <p>String gabungan: ${nama.join("")}</p>
      <p>Panjang nama: ${nama.length}</p>
      <p>Nama pertama: ${nama[0]}</p>
      <p>Nama terakhir: ${nama[nama.length - 1]}</p>
    `;
  }
}

function tampilkanMatriks() {
  const outputElement = document.getElementById("outputMatriks");

  if (outputElement.style.display === "block") {
    outputElement.style.display = "none";
  } else {
    outputElement.style.display = "block";

    outputElement.innerHTML = `
      <h3>Data Matriks</h3>
      <p>Matriks 2D: [${matriks.join("], [")}]</p>
      <p>Jumlah baris: ${matriks.length}</p>
      <p>Kolom per baris: ${matriks[0].length}</p>
      <p>Elemen pertama: ${matriks[0][0]}</p>
      <p>Elemen terakhir: ${
        matriks[matriks.length - 1][matriks[0].length - 1]
      }</p>
    `;
  }
}
