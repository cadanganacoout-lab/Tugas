        let nilai = [64, 34, 25, 22, 12];
        
        let nama = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        
        let matriks = [
            [1.1, 2.2, 3.3],
            [4.4, 5.5, 6.6],
            [7.7, 8.8, 9.9]
        ];
        
        function tampilkanNilai() {
            document.getElementById('outputNilai').style.display = 'block';
            console.log("Array nilai:", nilai);
            console.log("Panjang nilai:", nilai.length);
        }
        
        function tampilkanNama() {
            document.getElementById('outputNama').style.display = 'block';
            console.log("Array nama:", nama);
            console.log("String gabungan:", nama.join(''));
            console.log("Panjang nama:", nama.length);
        }
        
        function tampilkanMatriks() {
            document.getElementById('outputMatriks').style.display = 'block';
            console.log("Matriks 2D:", matriks);
            console.log("Baris:", matriks.length);
            console.log("Kolom per baris:", matriks[0].length);
        }