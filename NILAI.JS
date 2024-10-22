// Model Nilai
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

// View Nilai
class NilaiView {
    render(rataRata) {
        return `Rata-rata nilai: ${rataRata}`; // Fixed string template
    }

    renderError(error) {
        return `Error: ${error}`; // Fixed string template
    }
}

// Controller Nilai
class NilaiController {
    constructor(Model, View) {
        this.Model = Model;
        this.View = new View(); // Membuat instance view sekali di sini
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.Model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            console.log(this.View.render(rataRata)); // Menggunakan instance view yang sudah ada
        } catch (error) {
            console.log(this.View.renderError(error.message)); // Menggunakan instance view yang sudah ada
        }
    }
}

// Fungsi Pembagian
function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
        return null; // Mengembalikan null saat terjadi error
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, NilaiView);

// Contoh Penggunaan tampilkanRataRata
nilaiController.tampilkanRataRata([80, 90, 100]); // Output: Rata-rata nilai: 90
nilaiController.tampilkanRataRata([]);            // Output: Error: Data nilai tidak valid atau kosong.

// Contoh Penggunaan Fungsi bagi
console.log(bagi(10, 2)); // Output: 5
console.log(bagi(10, 0)); // Output: Terjadi error: Pembagian dengan nol tidak diperbolehkan.
//                          Operasi pembagian selesai.
