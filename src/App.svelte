<script lang="ts">
  import { qrwcSvelte } from './lib/qrwc';
  import BasePage from './lib/components/BasePage.svelte';
  //import MainPage from './lib/components/MainPage.svelte';
  //import { texts } from './lib/data/texts.texts.svelte';
</script>

{#if qrwcSvelte.isConnected}
  <div class="app-container">
    <BasePage />
  </div>
{:else}
  <h1>Not connected</h1>
{/if}

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .app-container {
    height: 90vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    background-color: #f3f4f6;
    border: none;
  }
</style>