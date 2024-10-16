window.onload=()=>{
    alert("Selamat Datang! Silakan Isi Form di Bawah Ini.");
}

const root=document.getElementsByClassName("root")[0] //akses class "root"
const div_wrap=document.createElement("div")  //buat div baru
div_wrap.classList.add("title")   //buat class baru

const judul=document.createElement("h1")    //buat h1
judul.classList.add("header")   //nambahin class header di h1
judul.textContent="Tugas-2 Praktikum Pemrograman Web"
div_wrap.append(judul)    //masukkan judul ke div_wrap
root.append(div_wrap)    //masukkan div_wrap ke root
const div_mcontent=document.createElement("div")
div_mcontent.classList.add("main_content")
root.append(div_mcontent)

const form=document.createElement("form")
div_mcontent.append(form)
const div1=document.createElement("div")
form.append(div1)

const div2=document.createElement("div")
div1.append(div2)

const labelnama=document.createElement("label")
labelnama.setAttribute("for", "nameInput")
labelnama.textContent="Username"
div2.append(labelnama)
const inputNama=document.createElement("input")
inputNama.setAttribute("type", "text")
inputNama.setAttribute("id", "nameInput")
inputNama.setAttribute("placeholder", "Nyssa Obelia")
inputNama.setAttribute("required", "")
div2.append(inputNama)

const div3=document.createElement("div")
div1.append(div3)
const labelNIM=document.createElement("label")
labelNIM.setAttribute("for", "NIMInput")
labelNIM.textContent="NIM"
div3.append(labelNIM)
const inputNIM=document.createElement("input")
inputNIM.setAttribute("type", "text")
inputNIM.setAttribute("id", "NIMInput")
inputNIM.setAttribute("placeholder", "231301097")
inputNIM.setAttribute("required", "")
div3.append(inputNIM)

const div4=document.createElement("div")
div1.append(div4)
const labelKOM=document.createElement("label")
labelKOM.setAttribute("for", "KOMInput")
labelKOM.textContent="KOM"
div4.append(labelKOM)
const inputKOM=document.createElement("input")
inputKOM.setAttribute("type", "text")
inputKOM.setAttribute("id", "KOMInput")
inputKOM.setAttribute("placeholder", "A")
inputKOM.setAttribute("required", "")
div4.append(inputKOM)

const div5=document.createElement("div")
div1.append(div5)
const labelFoto=document.createElement("label")
labelFoto.setAttribute("for", "FotoInput")
labelFoto.textContent="Upload Photo"
div5.append(labelFoto)
const inputFoto=document.createElement("input")
inputFoto.setAttribute("type", "file")
inputFoto.setAttribute("id", "FotoInput")
inputFoto.setAttribute("accept", "image/png, image/jpeg")
inputFoto.setAttribute("required", "")
div5.append(inputFoto)

const iniSubmit=document.createElement("input")
iniSubmit.setAttribute("type", "submit")
div1.append(iniSubmit)

const container=document.createElement("div")
container.setAttribute("class", "display-container")
container.setAttribute("style", "display: none")
div_mcontent.append(container)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const Username = nameInput.value;   //ambil nilai dari inputan
    const NIM = NIMInput.value;
    const KOM = KOMInput.value;
    const Photo = FotoInput.files[0];

    const card = document.createElement("div"); //card
    card.classList.add("card");

    const img = document.createElement("img");  //img foto
    img.src = URL.createObjectURL(Photo);
    img.alt = "User Photo";

    const usernameDisplay = document.createElement("p");    //tampil 
    usernameDisplay.innerText = `Username: ${Username}`;

    const nimDisplay = document.createElement("p");
    nimDisplay.innerText = `NIM: ${NIM}`;

    const komDisplay = document.createElement("p");
    komDisplay.innerText = `KOM: ${KOM}`;

    card.append(img, usernameDisplay, nimDisplay, komDisplay);  //elemen masuk ke card

    container.innerHTML = "";   //hapus content sebelumnya, tampil card
    container.append(card);

    container.style.display = "block";
    form.style.width = "370px";

    alert("Form Berhasil Disubmit!");
})