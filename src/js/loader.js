import * as render from '/js/render-function';

export function showLoader(loader) {
    render.removeClassElement(loader, 'hidden');
    //console.log('loader show');
}

export function hideLoader(loader) {
    render.addClassElement(loader, 'hidden');
    //console.log('loader hidden');
}
