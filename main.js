// --- 2. SISTEMA DE FAVORITOS (LocalStorage) ---
let favorites = JSON.parse(localStorage.getItem('ccxp_favorites')) || [];

function saveFavorites() {
	localStorage.setItem('ccxp_favorites', JSON.stringify(favorites));
	updateMapVisuals();
	populateSidebar(); // Atualiza a sidebar para mostrar as estrelinhas
}

function toggleFavorite(tableId) {
	if (favorites.includes(tableId)) {
		favorites = favorites.filter(id => id !== tableId);
	} else {
		favorites.push(tableId);
	}
	saveFavorites();
}

function isFavorite(tableId) {
	return favorites.includes(tableId);
}

// Atualiza o visual (cor rosa) das mesas no mapa
function updateMapVisuals() {
	const allTables = document.querySelectorAll('.table');
	allTables.forEach(table => {
		const id = table.dataset.id;
		if (favorites.includes(id)) {
			table.classList.add('favorite');
		} else {
			table.classList.remove('favorite');
		}
	});
}

// --- 3. CONFIGURAÇÃO E GERAÇÃO DO MAPA ---
const layoutConfig = [
	{ type: 'column', blocks: ['A', 'B'] },
	{ type: 'column', blocks: ['C', 'D'] },
	{ type: 'column', blocks: ['E', 'F'] },
	{ type: 'g-block', blocks: ['G'] },
	{ type: 'column', blocks: ['H', 'I'] },
	{ type: 'column', blocks: ['J', 'K'] },
	{ type: 'column', blocks: ['L', 'M'] }
];

const blockSpecs = {
	'large': { rows: [ [1, 10, 11, 20], [21, 30, 31, 40] ] },
	'small': { rows: [ [1, 6], [7, 12] ] },
	'G': { type: 'custom' }
};

function getBlockType(letter) {
	if (['A', 'B', 'C', 'D', 'J', 'K', 'L', 'M'].includes(letter)) return 'large';
	if (['E', 'F', 'H', 'I'].includes(letter)) return 'small';
	return 'custom';
}

const mapContainer = document.getElementById('map-container');

layoutConfig.forEach(col => {
	if (col.type === 'column') {
		const colDiv = document.createElement('div');
		colDiv.className = 'block-group';
		col.blocks.forEach(blockLetter => colDiv.appendChild(createBlock(blockLetter)));
		mapContainer.appendChild(colDiv);
	} else if (col.type === 'g-block') {
		const colDiv = document.createElement('div');
		colDiv.className = 'block-g-container';
		colDiv.appendChild(createCustomBlockG());
		mapContainer.appendChild(colDiv);
	}
});

function createBlock(letter) {
	const type = getBlockType(letter);
	const spec = blockSpecs[type];
	const blockDiv = document.createElement('div');
	blockDiv.className = 'block';

	const title = document.createElement('div');
	title.className = 'block-title';
	title.innerText = letter;
	blockDiv.appendChild(title);

	spec.rows.forEach(rowConfig => {
		const rowDiv = document.createElement('div');
		rowDiv.className = 'table-row';
		const seg1 = createTableSegment(letter, rowConfig[0], rowConfig[1]);
		rowDiv.appendChild(seg1);
		if (rowConfig.length > 2) {
			const seg2 = createTableSegment(letter, rowConfig[2], rowConfig[3]);
			rowDiv.appendChild(seg2);
		}
		blockDiv.appendChild(rowDiv);
	});
	return blockDiv;
}

function createCustomBlockG() {
	const wrapper = document.createElement('div');
	wrapper.className = 'g-block-wrapper';
	const grid = document.createElement('div');
	grid.className = 'g-grid';

	const label = document.createElement('div');
	label.className = 'g-label';
	label.innerText = 'G';
	grid.appendChild(label);

	const gTables = [1, 2, 3, 4, 5, 6, 7, 8];
	gTables.forEach(num => {
		const tableId = `G${num.toString().padStart(2, '0')}`;
		const tableDiv = createSingleTable(tableId, num);
		tableDiv.classList.add(`g-pos-${num}`);
		grid.appendChild(tableDiv);
	});

	wrapper.appendChild(grid);
	return wrapper;
}

function createTableSegment(letter, start, end) {
	const segDiv = document.createElement('div');
	segDiv.className = 'table-segment';
	for (let i = start; i <= end; i++) {
		const tableId = `${letter}${i.toString().padStart(2, '0')}`; 
		segDiv.appendChild(createSingleTable(tableId, i));
	}
	return segDiv;
}

// Helper function para criar a div da mesa
function createSingleTable(tableId, label) {
	const tableDiv = document.createElement('div');
	tableDiv.className = 'table';
	tableDiv.innerText = label;
	tableDiv.dataset.id = tableId;

	if (artistsData[tableId]) tableDiv.classList.add('occupied');

	// Check de favorito na criação
	if (isFavorite(tableId)) tableDiv.classList.add('favorite');

	tableDiv.onclick = () => handleTableClick(tableId);
	return tableDiv;
}


// --- 4. SIDEBAR LIST & FILTROS ---
function populateSidebar() {
	const artistListUl = document.getElementById('artist-list');
	const showOnlyFavs = document.getElementById('show-favs-only').checked;
	const sortMode = document.getElementById('sort-select').value; // 'alpha' ou 'table'

	artistListUl.innerHTML = ''; 
	const allArtists = [];

	// 1. Coleta e Filtra (Favoritos)
	for (const [tableId, artists] of Object.entries(artistsData)) {
		if (showOnlyFavs && !isFavorite(tableId)) continue;

		artists.forEach(artist => {
			allArtists.push({
				name: artist.name,
				tableId: tableId,
				sortName: artist.name.toLowerCase(),
				isFav: isFavorite(tableId)
			});
		});
	}

	// 2. ORDENAÇÃO (A Mágica acontece aqui)
	allArtists.sort((a, b) => {
		if (sortMode === 'table') {
			// Ordena por mesa (A01, A02, B01...)
			// numeric: true ajuda a entender que A2 vem antes de A10
			return a.tableId.localeCompare(b.tableId, undefined, { numeric: true, sensitivity: 'base' });
		} else {
			// Padrão: Alfabética por nome
			return a.sortName.localeCompare(b.sortName);
		}
	});

	if (allArtists.length === 0) {
		artistListUl.innerHTML = '<li style="color:#aaa; justify-content:center;">Nenhum artista encontrado.</li>';
		return;
	}

	// 3. Renderiza a Lista
	allArtists.forEach(item => {
		const li = document.createElement('li');

		const iconType = item.isFav ? 'star' : 'star_border';
		const activeClass = item.isFav ? 'active' : '';

		// Destaque visual: Se estiver ordenando por mesa, mostramos a mesa primeiro
		let contentHTML;
		if (sortMode === 'table') {
			// Modo Mesa: [Mesa] Nome
			contentHTML = `
				<button class="sidebar-fav-btn ${activeClass}" onclick="toggleSidebarFav(event, '${item.tableId}')">
					<span class="material-icons">${iconType}</span>
				</button>
				<span style="color:var(--primary-color); font-weight:800; margin-right:10px;">${item.tableId}</span>
				<span class="artist-name-span">${item.name}</span>
			`;
		} else {
			// Modo Nome: Nome [Mesa]
			contentHTML = `
				<button class="sidebar-fav-btn ${activeClass}" onclick="toggleSidebarFav(event, '${item.tableId}')">
					<span class="material-icons">${iconType}</span>
				</button>
				<span class="artist-name-span">${item.name}</span>
				<span style="color:#888; font-size:0.8rem;">${item.tableId}</span>
			`;
		}

		li.innerHTML = contentHTML;

		li.onclick = (e) => {
			if(e.target.closest('.sidebar-fav-btn')) return;
			toggleMenu();
			handleTableClick(item.tableId);
			setTimeout(() => {
				const tableEl = document.querySelector(`[data-id='${item.tableId}']`);
				if(tableEl) tableEl.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
			}, 300);
		};

		artistListUl.appendChild(li);
	});

	// Reaplica o filtro de busca se houver algo digitado
	const searchTerm = document.getElementById('search-input').value;
	if(searchTerm) {
		triggerSearch(searchTerm);
	}
}

// Helper de Busca separado para ser chamado de vários lugares
function triggerSearch(term) {
	term = term.toLowerCase();
	const items = document.querySelectorAll('#artist-list li');
	items.forEach(li => {
		const text = li.textContent.toLowerCase();
		li.style.display = text.includes(term) ? "flex" : "none"; // 'flex' para manter o alinhamento
	});
}

// --- EVENT LISTENERS ---

// Ao mudar a ordenação, refaz a lista
document.getElementById('sort-select').addEventListener('change', populateSidebar);

// Ao mudar o switch de favoritos
document.getElementById('show-favs-only').addEventListener('change', populateSidebar);

// Ao digitar na busca
document.getElementById('search-input').addEventListener('keyup', (e) => {
	triggerSearch(e.target.value);
});

// --- NOVA FUNÇÃO: Gerencia o clique na estrela da lista ---
window.toggleSidebarFav = function(event, tableId) {
	// Impede que o clique "suba" para o LI e abra o modal/mapa
	event.stopPropagation(); 

	// Alterna o favorito
	toggleFavorite(tableId);

	// Repopula a lista para atualizar o ícone visualmente
	populateSidebar();
}

// Event Listeners dos Filtros
document.getElementById('show-favs-only').addEventListener('change', populateSidebar);
document.getElementById('search-input').addEventListener('keyup', (e) => {
	// Filtro visual simples sobre a lista gerada
	const term = e.target.value.toLowerCase();
	const items = document.querySelectorAll('#artist-list li');
	items.forEach(li => {
		const text = li.textContent.toLowerCase();
		li.style.display = text.includes(term) ? "" : "none";
	});
});


// --- 5. MODAL INTERATIVO ---
const modal = document.getElementById('artist-modal');
const modalTableId = document.getElementById('modal-table-id');
const modalInfo = document.getElementById('modal-artist-info');
const closeBtn = document.querySelector('.close-modal-btn'); 

const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('side-menu');

function handleTableClick(tableId) {
	const artists = artistsData[tableId];
	modalTableId.innerText = `Mesa ${tableId}`;
	modalInfo.innerHTML = ''; 

	// Botão de Favoritar dentro do modal
	const isFav = isFavorite(tableId);
	const favBtnHTML = `
		<div class="fav-btn-container">
			<button class="fav-action-btn ${isFav ? 'is-favorite' : ''}" onclick="clickFavBtn('${tableId}')">
				<span class="material-icons">${isFav ? 'favorite' : 'favorite_border'}</span>
				${isFav ? 'Mesa Favorita' : 'Favoritar Mesa'}
			</button>
		</div>
	`;

	if (artists) {
		artists.forEach(artist => {
			const card = document.createElement('div');
			card.className = 'artist-card';
			card.innerHTML = `<h3>${artist.name}</h3><a href="${artist.link}" target="_blank" rel="noopener noreferrer" class="artist-link">Ver Instagram</a>`;
			modalInfo.appendChild(card);
		});
	} else {
		modalInfo.innerHTML = '<p style="padding:10px;">Mesa sem informação.</p>';
	}

	// Adiciona o botão de favorito ao final
	modalInfo.insertAdjacentHTML('beforeend', favBtnHTML);

	modal.style.display = "block";
}

// Função chamada pelo botão dentro do HTML injetado
window.clickFavBtn = function(tableId) {
	toggleFavorite(tableId);
	// Recarrega o modal para atualizar o botão visualmente
	handleTableClick(tableId);
}

function toggleMenu() { sidebar.classList.toggle('open'); }

if(menuBtn) menuBtn.onclick = toggleMenu;
if(closeMenuBtn) closeMenuBtn.onclick = toggleMenu;

if(closeBtn) closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
document.addEventListener('keydown', (e) => { if (e.key === "Escape" && modal.style.display === "block") modal.style.display = "none"; });

// Inicialização
populateSidebar();
