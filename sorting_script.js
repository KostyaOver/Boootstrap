let type = [];
let copheine = [];
let product = [];
let checkers = document.querySelectorAll("input");
let cards = document.querySelectorAll(".goods-panel .col");

for(let checker of checkers) {
    checker.addEventListener('click', function(event) {
        for(let elem of cards) {
            elem.classList.remove('d-none');
        }
        search(event);
        sort();
    });
}



function nonChecked() {
    let flag;

    for(let elem of checkers) {
        if(!elem.checked){
            flag = true;
        } else {
            flag = false;
            break;
        }
    }

    if(flag) {
        type = [];
        copheine = [];
        product = [];
        for(let elem of cards) {
            elem.classList.remove('d-none');
            console.log(elem);
        }
        return true;
    } else {
        return false;
    }
}

function search(event) {
    if(nonChecked()){
        console.log('all checkers empty');
        
    } else {
        if(event.target.checked) {
            switch (event.target.dataset.name) {
                case 'type':
                    type.push(event.target.dataset.type);
                    break;
                case 'copheine':
                    copheine.push(event.target.dataset.copheine);
                    break;
                case 'product': 
                    product.push(event.target.dataset.product);
                    break;
                default:
                    break;
            }
            console.log(type, copheine, product);            
        } else {
            let index;
            switch (event.target.dataset.name) {
                case 'type':
                    index = type.indexOf(event.target.dataset.type);
                    type.splice(index, 1);
                    break;
                case 'copheine':
                    index = copheine.indexOf(event.target.dataset.copheine);
                    copheine.splice(index, 1);
                    break;
                case 'product': 
                    index = product.indexOf(event.target.dataset.product);
                    product.splice(index, 1);
                    break;
                default:
                    break;
            }
            console.log(type, copheine, product);
        }
    }
}

function sort() {
    if(type.length != 0) {
        for(let card of cards) {
            if(!card.classList.contains('d-none')){
                let properties = card.dataset.properties.split(' ');
                let flag = false;
                for(let prop of properties) {
                    if(type.indexOf(prop) != -1) {
                        flag = true;
                    }
                }
                
                console.log(flag);
                if(flag) {
                    card.classList.add('d-block');
                } else {
                    card.classList.remove('d-block');
                    card.classList.add('d-none');
                }
            }            
        }
    }

    if(copheine.length != 0) {
        for(let card of cards) {
            if(!card.classList.contains('d-none')){
                let properties = card.dataset.properties.split(' ');
                let flag = false;
                for(let prop of properties) {
                    if(copheine.indexOf(prop) != -1) {
                        flag = true;
                    }
                }
                
                console.log(flag);
                if(flag) {
                    card.classList.add('d-block');
                } else {
                    card.classList.remove('d-block');
                    card.classList.add('d-none');
                }
            }            
        }
    }

    if(product.length != 0) {
        for(let card of cards) {
            if(!card.classList.contains('d-none')){
                let properties = card.dataset.properties.split(' ');
                let flag = false;
                for(let prop of properties) {
                    if(product.indexOf(prop) != -1) {
                        flag = true;
                    }
                }
                
                console.log(flag);
                if(flag) {
                    card.classList.add('d-block');
                } else {
                    card.classList.remove('d-block');
                    card.classList.add('d-none');
                }
            }            
        }
    }
}