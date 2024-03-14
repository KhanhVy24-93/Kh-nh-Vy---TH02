const giaiPhuongTrinhBacNhat = (a, b) => {
    if (a === 0) {
        if (b === 0) {
            return "Vô số nghiệm";
        } else {
            return "Vô nghiệm";
        }
    } else {
        return `Nghiệm x = ${-b / a}`;
    }
};
const handleBai1 = () => {
    const a = parseInt(document.getElementById("he-so-a").value);
    const b = parseInt(document.getElementById("he-so-b").value);
    const ketQua = giaiPhuongTrinhBacNhat(a, b);
    document.getElementById("ket-qua-bai-1").textContent = ketQua;
};

document.getElementById("bai-1").addEventListener("submit", (e) => {
    e.preventDefault();
    handleBai1();
});

