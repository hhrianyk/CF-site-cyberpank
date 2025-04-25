// Language Switcher Component
document.addEventListener('DOMContentLoaded', () => {
  // Create language switcher container
  const createLanguageSwitcher = () => {
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher relative';
    
    // Create current language display
    const currentLang = document.createElement('button');
    currentLang.className = 'current-language flex items-center space-x-2 text-white hover:text-cyan-400 transition duration-300';
    currentLang.innerHTML = `
      <span class="flag flag-${languages[currentLanguage].code}"></span>
      <span>${languages[currentLanguage].name}</span>
      <i class="fas fa-chevron-down text-xs ml-1"></i>
    `;
    
    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown absolute top-full right-0 mt-2 bg-gray-900 border border-gray-800 rounded-lg shadow-lg py-2 hidden z-50 w-40';
    
    // Add languages to dropdown
    Object.values(languages).forEach(lang => {
      const langOption = document.createElement('a');
      langOption.className = 'language-option block px-4 py-2 text-white hover:bg-gray-800 transition cursor-pointer';
      langOption.setAttribute('data-lang', lang.code);
      langOption.innerHTML = `
        <span class="flag flag-${lang.code} mr-2"></span>
        <span>${lang.name}</span>
      `;
      dropdown.appendChild(langOption);
    });
    
    // Toggle dropdown on click
    currentLang.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });
    
    // Handle language selection
    dropdown.addEventListener('click', (e) => {
      const option = e.target.closest('.language-option');
      if (option) {
        const langCode = option.getAttribute('data-lang');
        changeLanguage(langCode);
        
        // Update current language display
        currentLang.querySelector('span:first-child').className = `flag flag-${langCode}`;
        currentLang.querySelector('span:nth-child(2)').textContent = languages[langCode].name;
        
        dropdown.classList.add('hidden');
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      dropdown.classList.add('hidden');
    });
    
    // Add elements to switcher
    switcher.appendChild(currentLang);
    switcher.appendChild(dropdown);
    
    return switcher;
  };
  
  // Insert language switcher into the navbar
  const navbar = document.querySelector('nav .hidden.md\\:flex');
  if (navbar) {
    const languageSwitcher = createLanguageSwitcher();
    navbar.appendChild(languageSwitcher);
  }
  
  // Add flag CSS
  const style = document.createElement('style');
  style.textContent = `
    .language-switcher {
      margin-left: 16px;
    }
    
    .flag {
      display: inline-block;
      width: 20px;
      height: 15px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    
    .flag-ru { background-image: url('https://flagcdn.com/w20/ru.png'); }
    .flag-en { background-image: url('https://flagcdn.com/w20/gb.png'); }
    .flag-ar { background-image: url('https://flagcdn.com/w20/sa.png'); }
    .flag-fr { background-image: url('https://flagcdn.com/w20/fr.png'); }
    .flag-it { background-image: url('https://flagcdn.com/w20/it.png'); }
    .flag-be { background-image: url('https://flagcdn.com/w20/by.png'); }
    .flag-es { background-image: url('https://flagcdn.com/w20/es.png'); }
    .flag-de { background-image: url('https://flagcdn.com/w20/de.png'); }
    .flag-cs { background-image: url('https://flagcdn.com/w20/cz.png'); }
    .flag-pl { background-image: url('https://flagcdn.com/w20/pl.png'); }
    .flag-pt { background-image: url('https://flagcdn.com/w20/pt.png'); }
    .flag-vi { background-image: url('https://flagcdn.com/w20/vn.png'); }
    .flag-hi { background-image: url('https://flagcdn.com/w20/in.png'); }
    .flag-zh { background-image: url('https://flagcdn.com/w20/cn.png'); }
    .flag-ja { background-image: url('https://flagcdn.com/w20/jp.png'); }
    .flag-uk { background-image: url('https://flagcdn.com/w20/ua.png'); }
    
    .language-option {
      display: flex;
      align-items: center;
    }
    
    [dir="rtl"] .language-dropdown {
      right: auto;
      left: 0;
    }
  `;
  
  document.head.appendChild(style);
}); 