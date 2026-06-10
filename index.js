function updateLanguage(lang) {
    document.querySelectorAll('.lang-hi').forEach(hi => {
        const parent = hi.parentElement;
        if (lang === 'hi') {
            hi.classList.remove('hidden');
            hi.style.display = '';
        } else {
            hi.classList.add('hidden');
            hi.style.display = 'none';
        }

        if (!parent) return;
        Array.from(parent.children).forEach(child => {
            if (child === hi) return;
            if (lang === 'hi') {
                if (!child.classList.contains('lang-hi')) {
                    if (child.dataset.savedDisplay === undefined) {
                        child.dataset.savedDisplay = child.style.display || '';
                    }
                    child.style.display = 'none';
                }
            } else {
                if (child.dataset.savedDisplay !== undefined) {
                    child.style.display = child.dataset.savedDisplay;
                    delete child.dataset.savedDisplay;
                }
            }
        });
    });
}

function switchLang(lang) {
    if (lang === 'hi') {
        updateLanguage('hi');
    } else {
        updateLanguage('en');
    }
}

function showHindi() {
    switchLang('hi');
}

function showEnglish() {
    switchLang('en');
}