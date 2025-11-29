/**********************************************************
 *  MODO PAISAGEM NO CELULAR — Mostrar aviso se vertical
 **********************************************************/
function updateOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;
    const warning = document.getElementById("rotate-warning");
    const app = document.querySelector(".app");

    if (isPortrait) {
        warning.style.display = "flex";
        if (app) app.style.display = "none";
    } else {
        warning.style.display = "none";
        if (app) app.style.display = "flex";
    }
}

window.addEventListener("resize", updateOrientation);
window.addEventListener("orientationchange", updateOrientation);
updateOrientation();

/**********************************************************
 *  ARTISTAS.TXT EMBUTIDO
 **********************************************************/
const artistasRaw = `
https://www.instagram.com/clara.pernambuco/?hl=en
Clara Pernambuco
Mesa do artists’ Valley: A09

https://www.instagram.com/thejoco/
Joco
MESA DO ARTISTS’ VALLEY: A10

https://www.instagram.com/huiolla/
Huíolla
MESA DO ARTISTS’ VALLEY: B06

https://www.instagram.com/purin_naka/
Purin Naka
MESA DO ARTISTS’ VALLEY: M35

https://www.instagram.com/imzeferino/
Isadora Zeferino
MESA DO ARTISTS’ VALLEY: K33-34

https://www.instagram.com/karipola/
Karipola
MESA DO ARTISTS’ VALLEY: M35

https://www.instagram.com/sukanne/?hl=en
Sukanne
MESA DO ARTISTS’ VALLEY: J07

https://www.instagram.com/gem.i.ni/?hl=en
Gem.i.ni
MESA DO ARTISTS’ VALLEY: J07

https://www.instagram.com/manda_fritas/?hl=en
Manda
MESA DO ARTISTS’ VALLEY: J05

https://www.instagram.com/sayuritake/?hl=en
Sayuritake
MESA DO ARTISTS’ VALLEY: J04

https://www.instagram.com/caioyo/?hl=en
Caio Yo
MESA DO ARTISTS’ VALLEY: J06

https://www.instagram.com/bonnie.deaguiar
Bonnie de Aguiar
Mesa do artists’ Valley: J05

https://www.instagram.com/4njuart/?hl=en
4nju
MESA DO ARTISTS’ VALLEY: A04

https://www.instagram.com/kotodoodles/?hl=en
Koto
MESA DO ARTISTS’ VALLEY: A01

https://www.instagram.com/little_gnoma/?hl=en
Little Gnoma
MESA DO ARTISTS’ VALLEY: A02

https://www.instagram.com/makyume/?hl=en
Makyume
MESA DO ARTISTS’ VALLEY: A03

https://www.instagram.com/mizuki_miart/?hl=en
Raphaela Silva
MESA DO ARTISTS’ VALLEY: A23

https://www.instagram.com/gigishroom/?hl=en
Gigishroom
MESA DO ARTISTS’ VALLEY: A32

https://www.instagram.com/esquitiniarte/?hl=en
Alexandre Esquitini
MESA DO ARTISTS’ VALLEY: L13

https://www.instagram.com/amararts/?hl=en
Amararts
MESA DO ARTISTS’ VALLEY: J36

https://www.instagram.com/clarissapaiva/?hl=en
Clarissa Paiva
MESA DO ARTISTS’ VALLEY: B26

https://www.instagram.com/bananamisart/?hl=en
Banana Misa
MESA DO ARTISTS’ VALLEY: B24

https://www.instagram.com/brunoomfr/?hl=en
Bruno Freire
MESA DO ARTISTS’ VALLEY: M33

https://www.instagram.com/caelyudi/
Cael Yudi
MESA DO ARTISTS’ VALLEY: M27

https://www.instagram.com/cahro.naka/
Cahro Naka
MESA DO ARTISTS’ VALLEY: B03

https://www.instagram.com/danifranck/?hl=en
Dani Franck
MESA DO ARTISTS’ VALLEY: M34

https://www.instagram.com/dessamore/?hl=en
Dessamore
MESA DO ARTISTS’ VALLEY: A38

https://www.instagram.com/dokirosi/
Doki Rosi
MESA DO ARTISTS’ VALLEY: K37-38

https://www.instagram.com/guibon__/?hl=en
Gui Bon
MESA DO ARTISTS’ VALLEY: L11-12

https://www.instagram.com/guilherme.infante/?hl=en
Guilherme Infante
MESA DO ARTISTS’ VALLEY: L19-20

https://www.instagram.com/harumoony/?hl=en
Harumoony
MESA DO ARTISTS’ VALLEY: B03

https://www.instagram.com/hvmus/?hl=en
Hvmus
MESA DO ARTISTS’ VALLEY: B22

https://www.instagram.com/putzjubileu/
Jezz Farias
MESA DO ARTISTS’ VALLEY: A09

https://www.instagram.com/joninhaart/?hl=en
Joninha
MESA DO ARTISTS’ VALLEY: M06

https://www.instagram.com/kaolporfirio/?hl=en
Kaol Porfírio
MESA DO ARTISTS’ VALLEY: A37

https://www.instagram.com/kaokki_art/
Kaokki
MESA DO ARTISTS’ VALLEY: B24

https://www.instagram.com/_kukkiia/
Kukkiia
MESA DO ARTISTS’ VALLEY: A25

https://www.instagram.com/_kunogi/?hl=en
Kunogi
MESA DO ARTISTS’ VALLEY: J04

https://www.instagram.com/laerteminotaura/
Laerte
Mesa do artists’ Valley: B39-40

https://www.instagram.com/lariarts/?hl=en
Lari Macedo
MESA DO ARTISTS’ VALLEY: A35

https://www.instagram.com/larkness_/?hl=en
Lark
MESA DO ARTISTS’ VALLEY: L27

https://www.instagram.com/laura.arroz/
Laura Arroz
MESA DO ARTISTS’ VALLEY: K28

https://www.instagram.com/lunecornio/
Lune Córnio
MESA DO ARTISTS’ VALLEY: K31

https://www.instagram.com/marinafraguasarte/
Marina Fraguas
MESA DO ARTISTS’ VALLEY: B25

https://www.instagram.com/artofmaryg/
Mary
MESA DO ARTISTS’ VALLEY: A08

https://www.instagram.com/mthsmnds/?hl=en
Matheus Mendes
MESA DO ARTISTS’ VALLEY: D37

https://www.instagram.com/emilioblablalogia/
Milio
Mesa do artists’ Valley: L13

https://www.instagram.com/nagai13/?hl=en
Nagai13
MESA DO ARTISTS’ VALLEY: J08

https://www.instagram.com/nyatche/?hl=en
Natália Prata
MESA DO ARTISTS’ VALLEY: J08

https://www.instagram.com/paulomoreirap/?hl=en
Paulo Moreira
MESA DO ARTISTS’ VALLEY: D39-40

https://www.instagram.com/kiolilo_/
Kiolilo
MESA DO ARTISTS’ VALLEY: K32

https://www.instagram.com/_picolo/
Picolo
Mesa do artists’ Valley: C19-20

https://www.instagram.com/ren_nolasco/
Ren Nolasco
MESA DO ARTISTS’ VALLEY: K35-36

https://www.instagram.com/talessak
Talessak
MESA DO ARTISTS’ VALLEY: J13

https://www.instagram.com/rodrigofcfreitas
Rodrigo de Freitas
MESA DO ARTISTS’ VALLEY: L14

https://www.instagram.com/sapolendario/?hl=en
Sapo Lendário
MESA DO ARTISTS’ VALLEY: C01-02

https://www.instagram.com/silvazuao/?hl=en
Silva João
MESA DO ARTISTS’ VALLEY: E06

https://www.instagram.com/sunnymoum/?hl=en
Sunny Moum
MESA DO ARTISTS’ VALLEY: A05

https://www.instagram.com/kahnvictor/?hl=en
Victor Kahn
MESA DO ARTISTS’ VALLEY: K40

https://www.instagram.com/will.leite.will
Will Leite
Mesa do artists’ Valley: M21-22
`;

/**********************************************************
 * SECTORES (A–M)
 **********************************************************/
const SECTOR_BOXES = {
  "A": { left: 3,  top: 22, width: 15.7, height: 19 },
  "B": { left: 3,  top: 46, width: 15.7, height: 19 },
  
  "C": { left: 22, top: 22, width: 15.7, height: 19 },
  "D": { left: 22, top: 46, width: 15.6, height: 19 },

  "E": { left: 41.7, top: 22, width: 15.7, height: 19 },
  "F": { left: 54, top: 51, width: 10, height: 13 },

  "G": { left: 67, top: 50, width: 9, height: 17 },

  "H": { left: 78, top: 22, width: 15.7, height: 19 },
  "I": { left: 78, top: 51, width: 15.7, height: 19 },

  "J": { left: 62.5, top: 22, width: 17, height: 19 },
  "K": { left: 92, top: 51, width: 22, height: 17 },

  "L": { left: 117, top: 25, width: 21, height: 17 },
  "M": { left: 117, top: 51, width: 21, height: 17 }
};


/**********************************************************
 * PARSER DO TEXTO DE ARTISTAS
 **********************************************************/
function extractMesasFromLine(line){
    const clean = line.replace(/–|—/g, "-");
    const regex = /([A-Z])\s*0*([0-9]{1,2})(?:\s*-\s*([0-9]{1,2}))?/gi;
    const mesas = [];
    let m;

    while ((m = regex.exec(clean)) !== null) {
        const sector = m[1].toUpperCase();
        const start = parseInt(m[2]);
        const end = m[3] ? parseInt(m[3]) : start;

        for (let n = start; n <= end; n++) {
            mesas.push({ sector, number: n });
        }
    }

    return mesas;
}

function parseArtists(raw){
    const lines = raw.split(/\n/).map(s => s.trim()).filter(Boolean);
    const entries = [];

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("http")) {
            const instagram = lines[i];
            const name = lines[i + 1]?.trim() || "";
            let mesaLine = null;

            for (let j = i + 2; j < i + 6 && j < lines.length; j++) {
                if (/MESA|Mesa/i.test(lines[j])) {
                    mesaLine = lines[j];
                    break;
                }
            }

            if (name && mesaLine) {
                entries.push({
                    name,
                    instagram,
                    mesas: extractMesasFromLine(mesaLine)
                });
            }
        }
    }

    return entries;
}

const artistsData = parseArtists(artistasRaw);

/**********************************************************
 * INDEXAÇÃO: mesa → lista de artistas
 **********************************************************/
const mesaMap = {};

artistsData.forEach(artist => {
    artist.mesas.forEach(m => {
        const key = m.sector + m.number;
        if (!mesaMap[key]) mesaMap[key] = [];
        mesaMap[key].push({ name: artist.name, instagram: artist.instagram });
    });
});

/**********************************************************
 * POSICIONAMENTO DAS MESAS (pins)
 **********************************************************/
function computePinPos(sector, n){
    const box = SECTOR_BOXES[sector];
    if (!box) return { left: 50, top: 50 };

    const num = Math.min(Math.max(n, 1), 40);

    const row = num <= 20 ? 0 : 1;
    const idx = num <= 20 ? num - 1 : num - 21;

    const colRatio = idx / 19;
    const top = box.top + (row === 0 ? 5 : box.height - 5);
    const left = box.left + colRatio * box.width;

    return { left, top };
}

/**********************************************************
 * GERAÇÃO DOS PINS
 **********************************************************/
const mapWrapper = document.getElementById("mapWrapper");

function createPins(){
    document.querySelectorAll(".pin").forEach(p => p.remove());

    Object.keys(mesaMap).forEach(key => {
        const sector = key[0];
        const num = parseInt(key.slice(1));
        const pos = computePinPos(sector, num);

        const pin = document.createElement("div");
        pin.className = "pin";
        pin.dataset.mesa = key;
        pin.style.left = pos.left + "%";
        pin.style.top = pos.top + "%";
        pin.textContent = (num % 10).toString();

        pin.addEventListener("click", ev => {
            ev.stopPropagation();
            showPopup(pin, key);
        });

        mapWrapper.appendChild(pin);
    });
}

createPins();

/**********************************************************
 * POPUP DA MESA
 **********************************************************/
let currentPopup = null;

function showPopup(pin, mesaKey){
    closePopup();

    const popup = document.createElement("div");
    popup.className = "popup";

    let html = `<div style="font-weight:bold;margin-bottom:6px">${mesaKey}</div>`;

    mesaMap[mesaKey].forEach(a => {
        html += `
            <div style="margin-bottom:6px">
                <a href="${a.instagram}" target="_blank">${a.name}</a>
            </div>`;
    });

    html += `<div style="text-align:right"><button class="btn" onclick="closePopup()">Fechar</button></div>`;

    popup.innerHTML = html;

    mapWrapper.appendChild(popup);

    const pinRect = pin.getBoundingClientRect();
    const wrap = mapWrapper.getBoundingClientRect();

    popup.style.left = (pinRect.left - wrap.left + 30) + "px";
    popup.style.top = (pinRect.top - wrap.top - 20) + "px";

    currentPopup = popup;
}

function closePopup(){
    if (currentPopup){
        currentPopup.remove();
        currentPopup = null;
    }
}

mapWrapper.addEventListener("click", closePopup);

/**********************************************************
 * LISTA DE MESAS NA SIDEBAR
 **********************************************************/
const mesaList = document.getElementById("mesaList");

function loadMesaList(){
    const keys = Object.keys(mesaMap).sort((a,b) => {
        if (a[0] !== b[0]) return a[0].localeCompare(b[0]);
        return parseInt(a.slice(1)) - parseInt(b.slice(1));
    });

    mesaList.innerHTML = "";

    keys.forEach(key => {
        const item = document.createElement("div");
        item.className = "mesa-item";

        item.innerHTML = `
            <div>
                <strong>${key}</strong>
                <div style="font-size:13px;color:#666">${mesaMap[key].map(a => a.name).join(", ")}</div>
            </div>
            <button class="btn" onclick="locateMesa('${key}')">Ver</button>
        `;

        mesaList.appendChild(item);
    });
}

loadMesaList();

/**********************************************************
 * LOCALIZAR MESA
 **********************************************************/
function locateMesa(key){
    closePopup();

    const pin = [...document.querySelectorAll(".pin")]
        .find(p => p.dataset.mesa === key);

    if (!pin) return;

    pin.style.transform = "translate(-50%,-50%) scale(1.3)";
    setTimeout(() => pin.style.transform = "translate(-50%,-50%)", 500);

    showPopup(pin, key);
}

window.locateMesa = locateMesa;

/**********************************************************
 * BUSCA DE ARTISTA
 **********************************************************/
const resultsDiv = document.getElementById("results");

function searchArtist(){
    const q = document.getElementById("searchInput").value.toLowerCase().trim();
    resultsDiv.innerHTML = "";

    if (!q) return;

    const found = [];

    Object.keys(mesaMap).forEach(key => {
        mesaMap[key].forEach(a => {
            if (a.name.toLowerCase().includes(q)){
                found.push({ mesa: key, ...a });
            }
        });
    });

    if (found.length === 0){
        resultsDiv.innerHTML = `<div class="found">Nenhum artista encontrado.</div>`;
        return;
    }

    const box = document.createElement("div");
    box.className = "found";

    found.forEach(f => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div><strong>${f.name}</strong> — ${f.mesa}</div>
            <button class="btn" onclick="locateMesa('${f.mesa}')">Localizar</button>
        `;
        div.style.marginBottom = "8px";
        box.appendChild(div);
    });

    resultsDiv.appendChild(box);

    locateMesa(found[0].mesa);
}

document.getElementById("searchBtn").addEventListener("click", searchArtist);
document.getElementById("searchInput").addEventListener("keydown", e => {
    if (e.key === "Enter") searchArtist();
});

/**********************************************************
 * ZOOM
 **********************************************************/
const img = document.getElementById("mapImg");
let zoom = 1;

function setZoom(z){
    zoom = z;
    img.style.transform = `scale(${zoom})`;
}

document.getElementById("zoomIn").addEventListener("click", () => setZoom(Math.min(zoom + 0.15, 3)));
document.getElementById("zoomOut").addEventListener("click", () => setZoom(Math.max(zoom - 0.15, 0.6)));
document.getElementById("resetZoom").addEventListener("click", () => setZoom(1));

/**********************************************************
 * EXPORTAR CSV
 **********************************************************/
function exportCSV(){
    const lines = [["mesa","artista","instagram"]];

    Object.keys(mesaMap).forEach(key => {
        mesaMap[key].forEach(a => {
            lines.push([key, a.name, a.instagram || ""]);
        });
    });

    const csv = lines.map(row => row.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "mesas_artistas.csv";
    a.click();

    URL.revokeObjectURL(url);
}

document.getElementById("exportList").addEventListener("click", exportCSV);

/**********************************************************
 * ALTERNAR PINS
 **********************************************************/
document.getElementById("togglePins").addEventListener("click", () => {
    document.querySelectorAll(".pin").forEach(pin => {
        pin.style.display = pin.style.display === "none" ? "flex" : "none";
    });
});
