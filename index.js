function showHindi(){
    document.querySelectorAll('lang.en').forEach(el => el.classList.add = 'hidden');
    document.querySelectorAll('lang.hi').forEach(el => el.classList.remove = 'hidden');
}

function showEnglish(){
    document.querySelectorAll('lang.en').forEach(el => el.classList.remove = 'hidden');
    document.querySelectorAll('lang.hi').forEach(el => el.classList.add = 'hidden');
}