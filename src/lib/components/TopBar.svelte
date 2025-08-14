<!-- TopBar.svelte -->
<script lang="ts">
    import LanguageSelector from './LanguageSelector.svelte';
    import { icons } from '../data/icons'; // Importing icons for navigation
    import { currentSettings } from '../data/texts.svelte'; // Importing current settings
    
    function navigateTo(page: string) {
        currentSettings.Page = page;
        // Logic to handle navigation can be added here
    }
    console.log(`TopBar initialised`)

    let { roomName, timestamp, subtitle, mode } = $props();
</script>

<div class="header">
  <div class="header-top">
    <h1 class="room-name">{roomName}</h1>
    <span class="timestamp">{timestamp}</span>
  </div>
  <div class="subtitle">{subtitle}</div>
  <div class="mode">{mode}</div>
</div>

<style>
  .header {
    background-color: white;
    padding: 1rem;
    color: black;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }

  .room-name {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
  }

  .timestamp {
    font-size: 0.75rem;
    color: #6b7280;
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

  @media (min-width: 768px) {
    .header {
      padding: 1.5rem;
    }
    
    .room-name {
      font-size: 1.5rem;
    }
    
    .timestamp {
      font-size: 0.875rem;
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