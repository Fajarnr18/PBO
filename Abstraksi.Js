// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Motor extends Kendaraan {
    constructor() {
        super('Motor');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Pesawat extends Kendaraan {
    constructor() {
        super('Pesawat');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas awan.`);
    }
}

// Penggunaan
const motor = new Motor();
motor.bergerak(); // Output: Motor bergerak dengan roda.

const pesawat = new Pesawat(); // Perbaikan: nama variabel diubah dari 'Pesawat' menjadi 'pesawat'.
pesawat.bergerak(); // Output: Pesawat bergerak di atas awan.
