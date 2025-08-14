<!-- MainContent.svelte -->
<script lang="ts">
    import HomePage from './HomePage.svelte';
    //import CamerasPage from './CamerasPage.svelte';
    //import HelpPage from './HelpPage.svelte';
    import {  currentSettings } from '../data/texts.svelte';
</script>

<div class="main-content"> 
    <div class="overlay">
            <HomePage />
    </div>
</div>

<style>
    /* Main content area */
    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        flex: 1;
        background-color: var(--LightColor);
        margin: 0 30px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .overlay {
        /* Overlay pages */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--MediumGreyColor);
        transition: opacity 0.3s ease-in-out;
    
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /*
        opacity: 0;
        background-color: rgba(0, 0, 0, 0);
        display: none;
        z-index: 50;
        */
    }
/*
    .overlay.active {
        display: block;
    }

    .overlay-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
    }
*/
</style>