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
      <img class="logo-image" src={logoSrc} alt="Logo" />
    </div>
  </div>
</div>

<style>

  .header {
    background-color: white;
    padding: 1rem;
    color: black;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .header-left {
    flex: 1;
  }

  .header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    min-height: 100%;
  }

  .room-name {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 0.8rem;
    color: #374151;
  }

  .mode {
    font-size: 0.8rem;
    font-weight: 500;
    color: #1f2937;
  }

  .logo-image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
  }

  @media (min-width: 1024px) {
    .room-name {
      font-size: 1.75rem;
    }
  }
</style>