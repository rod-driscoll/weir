<!-- Language Selector -->
<script lang="ts">
    import { currentSettings } from '../data/texts.svelte'; 
    import { icons } from '../data/icons';

    let currentLanguage = 'en';
    let showLanguageDropdown = false;
    let storedLanguage = 'English';

    function selectLanguage(lang: string) {
        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        showLanguageDropdown = false;
    }    
</script>

<div class="language-selector">
    <button class="language-button" onclick={()=> showLanguageDropdown = !showLanguageDropdown}>
        {currentLanguage}
        <span>{@html icons.dropdown}</span>
    </button>
    <div class="language-dropdown ${showLanguageDropdown ? 'open' : ''}">
        {Object.keys(currentSettings.RoomText).map(lang => `
            <div class="language-option" onclick="currentLanguage = '${lang}'; showLanguageDropdown = false">
                ${lang}
            </div>
        `).join('')}
    </div>
</div>

<style>
    .language-selector {
        position: relative;
        display: inline-block;
    }

    .language-button {
        background-color: #f0f0f0;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
    }

    .language-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: none;
    }
/*
    .language-dropdown.open {
        display: block;
    }

    .language-option {
        padding: 10px 20px;
        cursor: pointer;
    }

    .language-option:hover {
        background-color: #f0f0f0;
    }
*/
</style>
