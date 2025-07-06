const loader = document.querySelector('.loader');

export function showLoader() {
    loader.classList.remove('hidden');
    console.log('loader show')
}

export function hideLoader() {
    loader.classList.add('hidden')
    console.log('loader hidden')
}
