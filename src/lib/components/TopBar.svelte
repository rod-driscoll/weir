<!-- TopBar.svelte -->
<script lang="ts">
    import LanguageSelector from './LanguageSelector.svelte';
    import Timestamp from './Timestamp.svelte';
    import Logo from './Logo.svelte';
    import { icons } from '../data/icons'; // Importing icons for navigation
    import { currentSettings } from '../data/texts.svelte'; // Importing current settings
        
    function navigateTo(page: string) {
        currentSettings.Page = page;
        // Logic to handle navigation can be added here
    }
    console.log(`TopBar initialised`)

    let { roomName, subtitle, mode, logoSrc } = $props();
</script>

<div class="header">
  <div class="header-content">
    <div class="header-left">
      <h1 class="room-name">{roomName}</h1>
      <div class="subtitle">{subtitle}</div>
      <div class="mode">{mode}</div>
    </div>
    <div class="header-right">
      <Timestamp />
      <div class="logo-container">
        <img class="logo-image" src={logoSrc} alt="Logo" />
      </div>
    </div>
  </div>
</div>

<style>

  .header {
    background-color: white;
    padding: 1rem;
    color: black;
    border: 1px solid rgb(0, 255, 17);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid rgb(81, 0, 255);
  }

  .header-left {
    flex: 1;
    border: 1px solid rgb(255, 217, 0);
  }

  .header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    border: 1px solid red;
  }

  .room-name {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  .subtitle {
    font-size: 0.8rem;
    color: #374151;
    margin-bottom: 0.25rem;
  }

  .mode {
    font-size: 0.8rem;
    font-weight: 500;
    color: #1f2937;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .logo-container :global(svg) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    .header {
      padding: 1.5rem;
    }
    
    .room-name {
      font-size: 1.5rem;
    }
    
    .subtitle, .mode {
      font-size: 0.875rem;
    }
    
    .logo-container {
      width: 100px;
      height: 25px;
    }
  }

  @media (min-width: 1024px) {
    .room-name {
      font-size: 1.75rem;
    }
    
    .logo-container {
      width: 120px;
      height: 30px;
    }
  }
</style>