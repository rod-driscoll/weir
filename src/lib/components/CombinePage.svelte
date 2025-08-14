<script lang="ts">
    import { icons } from '../data/icons';
    import { currentSettings } from '../data/texts.svelte';
    console.log(`CombinePage initialised: ${currentSettings.Page}`);
    

    import { qrwcSvelte } from "../qrwc";
    const roomCombineComponent = qrwcSvelte.useComponent('Room_Combiner');
    const combine = roomCombineComponent.useButton('wall.1.open');
    //let { combine } = $props();

    function handleCombine() {
        combine.state = true;
        console.log('Rooms combined');
    }

    function handleSeparate() {
        combine.state = false;
        console.log('Rooms separated');
    }

</script>

<div class="home-page">
    <div class="button-grid">
        <button 
            class="room-button combine-button {combine.state ? 'active' : ''}"
            onclick={handleCombine}
        >
            <div class="icon-container">
                {@html icons.combineRooms}
            </div>
            <span class="button-label">Combine Rooms</span>
        </button>
        
        <button 
            class="room-button separate-button {!combine.state ? 'active' : ''}"
            onclick={handleSeparate}
        >
            <div class="icon-container">
                {@html icons.separateRooms}
            </div>
            <span class="button-label">Separate Rooms</span>
        </button>
    </div>
</div>

<style>
    .home-page {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        width: 100%;
        height: 100%;
        max-width: 900px;
        max-height: 500px;
    }

    .room-button {
        position: relative;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 40px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        min-height: 250px;
    }

    .room-button:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    .room-button:active {
        transform: translateY(-2px);
    }

    .combine-button {
        background-color: grey;
        color: white;
    }

    .combine-button.active {
        background-color: darkblue;
    }

    .separate-button {
        background-color: grey;
        color: white;
    }

    .separate-button.active {
        background-color: darkblue;
    }

    .icon-container {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-container :global(svg) {
        width: 100%;
        height: 100%;
    }

    .button-label {
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .button-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 20px;
            max-height: none;
        }

        .room-button {
            min-height: 100px;
            padding: 30px;
        }

        .icon-container {
            width: 80px;
            height: 80px;
        }

        .button-label {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 1200px) {
        .button-grid {
            max-width: 1100px;
            max-height: 600px;
        }

        .icon-container {
            width: 150px;
            height: 150px;
        }

        .button-label {
            font-size: 1.8rem;
        }
    }
</style>