document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');
    const brandSelect = document.getElementById('brand');
    const productList = document.getElementById('product-list').children;
    const applyFilters = () => {
        const category = categorySelect.value;
        const priceMin = priceMinInput.value ? parseFloat(priceMinInput.value) : 0;
        const priceMax = priceMaxInput.value ? parseFloat(priceMaxInput.value) : Infinity;
        const brand = brandSelect.value;
        Array.from(productList).forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productPrice = parseFloat(product.getAttribute('data-price'));
            const productBrand = product.getAttribute('data-brand');
            const matchesCategory = !category || category === productCategory;
            const matchesPrice = productPrice >= priceMin && productPrice <= priceMax;
            const matchesBrand = !brand || brand === productBrand;
            if (matchesCategory && matchesPrice && matchesBrand) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    };
    categorySelect.addEventListener('change', applyFilters);
    priceMinInput.addEventListener('input', applyFilters);
    priceMaxInput.addEventListener('input', applyFilters);
    brandSelect.addEventListener('change', applyFilters);

    applyFilters();
});