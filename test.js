(function() {

    var div = document.createElement('div');
    div.innerHTML = '<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.textAlign = 'center';
    div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    div.style.borderRadius = '10px';
    div.style.padding = '6.5px';
    div.style.background = 'white';
    div.style.height = '32rem';
    div.style.marginTop = '1rem';

    var liWrapper = document.createElement('li');
    liWrapper.appendChild(div);

    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 1200 && width > 770) {
        liWrapper.style.width = '65%';
    } else if (width <= 770) {
        liWrapper.style.width = '98%';
    } else {
        liWrapper.style.width = '48%';
    }

    var products = document.querySelectorAll('.product-item');

    if (products.length > 4) {
        var parent = products[3].parentNode;
        parent.appendChild(liWrapper);  
        if (products[3].nextSibling) {
            parent.insertBefore(liWrapper, products[3].nextSibling);
        }
    } else {
        var container = document.querySelector('.products');
        container.appendChild(liWrapper);
    }
})();
