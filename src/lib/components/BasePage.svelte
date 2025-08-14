<script>
    import TopBar from './TopBar.svelte';
    import MainContent from './MainContent.svelte';
    //import BottomBar from './BottomBar.svelte';
    //import PowerDialog from './PowerDialog.svelte';
    import { currentSettings } from '../data/texts.svelte';
    
    //import { qrwcSvelte } from "../qrwc";
    //const roomCombineComponent = qrwcSvelte.useComponent('Room_Combiner');
    //const roomCombineStatus = roomCombineComponent.useButton('wall.1.open');
    //const roomControlsComponent = qrwcSvelte.useComponent(roomController);

    console.log(`BasePage initialised`)
    
  let roomData = {
    roomName: "Training room 1",
    timestamp: "Wed 4th Jun | 6:38pm",
    subtitle: "Weir Minerals", 
    mode: "Not combined"
  };

</script>

<div class="base-page">
    {#if false} <!-- Placeholder for future splash screen -->
    {/if}
    <TopBar {...roomData} />
    <MainContent />
</div>

<style>
    .base-page {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
    }
</style>