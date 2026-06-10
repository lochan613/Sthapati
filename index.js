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
                        child.dataset.savedDisplay = child.style.display || 'block';
                    }
                    child.style.display = 'none';
                }
            } else {
                if (child.dataset.savedDisplay !== undefined) {
                    child.style.display = child.dataset.savedDisplay;
                    delete child.dataset.savedDisplay;
                } else {
                    child.style.display = ''; 
                }
            }
        });
    });

    const btnEn = document.getElementById('btn-en');
    const btnHi = document.getElementById('btn-hi');
    if(btnEn && btnHi) {
        if (lang === 'hi') {
            btnHi.classList.add('bg-emerald-800', 'text-white');
            btnHi.classList.remove('bg-white', 'text-emerald-800');
            btnEn.classList.remove('bg-emerald-800', 'text-white');
            btnEn.classList.add('bg-white', 'text-emerald-800');
        } else {
            btnEn.classList.add('bg-emerald-800', 'text-white');
            btnEn.classList.remove('bg-white', 'text-emerald-800');
            btnHi.classList.remove('bg-emerald-800', 'text-white');
            btnHi.classList.add('bg-white', 'text-emerald-800');
        }
    }
}

function switchLang(lang) {
    updateLanguage(lang);
}