function openCart() {
    window.location.href = 'cart.html';
}

let itemList = {
    sp1: {
        name: 'Laptop Apple MacBook Air M1 2020 16GB/256GB/7-core GPU',
        price: 34000000,
        photo: 'image/product/apple-macbook-pro-16-m1-pro-2021-10-core-cpu-600x600.jpg',
    },

    sp2: {
        name: 'Laptop Apple MacBook Air M1 2020 16GB/256GB/7-core GPU',
        price: 44000000,
        photo: 'image/product/apple-watch-s7-gps-41mm-vang-thumb-1-2-660x600.jpg',
    },

    sp3: {
        name: 'Laptop Apple MacBook Air M1 2020 16GB/256GB/7-core GPU',
        price: 54000000,
        photo: 'image/product/iphone-12-pro-max-xam-new-600x600-600x600.jpg',
    },

    sp4: {
        name: 'Laptop Apple MacBook Air M1 2020 16GB/256GB/7-core GPU',
        price: 64000000,
        photo: 'image/product/apple-macbook-pro-16-m1-pro-2021-10-core-cpu-600x600.jpg',
    },
};

let itemListColor = {
    xanh: {
        price: 34000000,
        sale: 24000000,
        photo: 'image/product/iphone-13-pro-1-1.jpg',
    },
    trang: {
        price: 33000000,
        sale: 23000000,
        photo: 'image/product/iphone-13-pro1.jpg',
    },
};

// let count = 0;

function addCart(code) {
    if (typeof localStorage[code] === 'undefined') {
        window.localStorage.setItem(code, '0');
    }
    // count++;
    // let countbadge = document.getElementById('count-badge');
    // console.log(window.localStorage.length);
    // // countbadge.innerHTML = count;
    // countbadge.innerHTML = window.localStorage.length;

    let countbadge = document.getElementById('count-badge');
    console.log(window.localStorage.length);
    countbadge.innerHTML = window.localStorage.length;
}

function showCart() {
    let sum = 0;
    let fomatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VDN',
    });
    for (let i = 0; i < window.localStorage.length; i++) {
        if (typeof itemList[localStorage.key(i)] === 'undefined') {
            continue;
        }
        let tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');
        let photoCell = document.createElement('td');
        let number = document.createElement('td');
        let price = document.createElement('td');
        let removeLink = document.createElement('td');
        let removeLinkA = document.createElement('a');
        let item = itemList[localStorage.key(i)];

        // photoCell.style.textAlign = "center";
        photoCell.style.width = '30%';
        photoCell.innerHTML = "<img src='" + item.photo + "'class='round' width='150px'/>";

        number.innerHTML =
            "<input type='number' style='width:" +
            50 +
            "px;' value=" +
            1 +
            ' min=' +
            1 +
            ' id=' +
            localStorage.key(i) +
            '></input>';
        price.innerHTML = fomatter.format(item.price);

        removeLinkA.style.position = 'relative';
        removeLinkA.style.top = '20px';
        removeLinkA.style.padding = '20px';
        removeLinkA.style.background = 'yellow';
        removeLinkA.innerHTML = "<i class='fa fa-trash icon-pink'></i>";
        removeLinkA.setAttribute('href', '#');
        removeLinkA.setAttribute('data-key', localStorage.key(i));
        removeLinkA.onclick = function () {
            removeCart(this.dataset.key);
        };

        tbody.appendChild(tr);
        tr.appendChild(photoCell);
        tr.appendChild(number);
        tr.appendChild(price);
        tr.appendChild(removeLink);
        removeLink.appendChild(removeLinkA);

        document.getElementById(localStorage.key(i)).addEventListener('click', () => {
            let total = document.getElementById(localStorage.key(i));
            sum += item.price;
            price.innerHTML = fomatter.format(item.price * total.value);
            document.getElementById('price').innerHTML = fomatter.format(sum);
        });
        sum += item.price;
    }
    document.getElementById('price').innerHTML = fomatter.format(sum);
}

function removeCart(key) {
    if (typeof localStorage[key] !== 'undefined') {
        localStorage.removeItem(key);
        window.location = 'cart.html';
    }
}

// loc list san pham

// function listProduct(code) {
//     let list = document.getElementById(code);
//     list.parentNode.removeChild(list);
// }

// product

function changeProduct(color) {
    let img = document.getElementById('img-color');
    let price = document.getElementById('price');
    let priceSale = document.getElementById('priceSale');
    let fomatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VDN',
    });
    // img.setAttribute("src", "image/product/iphone-12-pro-max-xam-new-600x600-600x600.jpg");
    // img.setAttribute("width", "60%");
    console.log(itemListColor[color].photo);
    img.setAttribute('src', itemListColor[color].photo);
    price.innerHTML = fomatter.format(itemListColor[color].sale);
    priceSale.innerHTML = fomatter.format(itemListColor[color].price);
    img.setAttribute('width', '300');
}

// function active(code) {
//     console.log(code);
//     listArrays.map((listArray) => {
//         document.getElementById(listArray).style.background = 'white';
//         if (listArrays.includes(code)) {
//             document.getElementById(code).style.background = '#34b7a7';
//         }
//     });
// }

const filters = document.getElementsByClassName('a-hover');
Array.from(filters).map((filter) => {
    filter.addEventListener('click', () => {
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].dataset.filter === filter.id) {
                filters[i].classList.add('active');
            } else filters[i].classList.remove('active');
        }
        const products = document.getElementsByClassName('element_pd');
        for (let i = 0; i < products.length; i++) {
            if (filter.id === products[i].dataset.item || filter.id === 'all') {
                products[i].style.display = 'block';
            } else products[i].style.display = 'none';
        }
    });
});

const search = document.getElementsByClassName('search')[0];
const input = document.getElementsByClassName('form-control')[0];
search.addEventListener('click', (e) => {
    const products = document.getElementsByClassName('element_pd');

    for (let i = 0; i < products.length; i++) {
        if (input.value === products[i].dataset.item) {
            products[i].style.display = 'block';
        } else products[i].style.display = 'none';
    }
});
