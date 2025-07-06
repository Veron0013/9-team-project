import * as render from '/js/render-function';


const loader = document.querySelector('.loader');

export function showLoader() {
    render.removeClassElement(loader, 'hidden');
    console.log('loader show');
}

export function hideLoader() {
    render.addClassElement(loader, 'hidden');
    console.log('loader hidden');
}
