function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const urlParams = new URLSearchParams(window.location.search);

let productData = [];
let pageSize = 8;
let currentPage = 1;
const catId = getQueryParam('category');
var filteredCategory = category.find(cat => cat.id == catId);
var catname = filteredCategory.name;
var cathead = document.getElementById('cat-head');
if (urlParams.has('subcat')) {
    const subCatId = getQueryParam('subcat');
    var filteredSubCategory = subCategory.filter(sub => sub.catId == catId && sub.id == subCatId)[0];
    catname += ` > ${filteredSubCategory.name}`
    productData = products.filter(product => product.catId == catId && product.subCatId == subCatId);
} else {

    productData = products.filter(product => product.catId == catId);
}
cathead.innerHTML = catname;

function renderProducts() {
    let container = document.getElementById('right-panel');
    container.innerHTML = '';


    let start = (currentPage - 1) * pageSize;
    let end = start + pageSize;


    let paginatedProducts = productData.slice(start, end);

    if (paginatedProducts.length > 0) {
        paginatedProducts.forEach(product => {
            container.innerHTML += `
                <a href="productPreview.html?pid=${product.id}"><div class="card">
                <div class="img"><img src="images/${filteredCategory.name}/${product.image}" alt="" height="280" width="240"></div>
                <div class="details">
                    <p class="brand">Zara</p>
                    <p class="pname">${product.name}</p>
                    <p>₹ ${product.price}</p>
                </div>
            </div></a>`;
        });
    } else {
        container.innerHTML = `<p>No data</p>`;
    }

    if (productData.length > pageSize) {
        paginationDivData();
    }
}

function paginationDivData() {
    let paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = ''; // Clear previous controls

    let totalPages = Math.ceil(productData.length / pageSize);

    if (currentPage > 1) {
        paginationContainer.innerHTML += `<button onclick="changePage(currentPage - 1)">Previous</button>`;
    }

    for (let i = 1; i <= totalPages; i++) {
        paginationContainer.innerHTML += `
            <button 
                onclick="changePage(${i})" 
                ${i === currentPage ? 'style="font-weight:bold"' : ''}>
                ${i}
            </button>`;
    }

    if (currentPage < totalPages) {
        paginationContainer.innerHTML += `<button onclick="changePage(currentPage + 1)">Next</button>`;
    }
}

function changePage(page) {
    currentPage = page;
    renderProducts();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});