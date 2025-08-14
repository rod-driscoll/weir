<!-- Home Page -->
<script lang="ts">
    import { icons } from '../data/icons';
    import { currentSettings } from '../data/texts.svelte';
    console.log(`HomePage initialised: ${currentSettings.Page}`);
 
    let combined = $state(false);

    function handleCombine(val: boolean) {
        console.log(`Combine rooms: ${val}`);
        combined = val;
    }

</script>

<div class="overlay-content home-page">
    <button class="nav-icon button-{combined ? 'on' : 'off'}" onclick={() => handleCombine(true)}>
        Combine rooms
    </button>
    <button class="nav-icon button-{combined ? 'on' : 'off'}" onclick={() => handleCombine(false)}>
        Separate rooms
    </button>
</div>

<style>
    * {
  border: 1px solid red;
}

    .home-page {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px;
    }
</style>