<script lang="ts">
    //import { qrwcSvelte } from "../qrwc";
    //const roomCombineComponent = qrwcSvelte.useComponent('Room_Combiner');
    //const roomCombineStatus = roomCombineComponent.useButton('wall.1.open');
    import { currentSettings, helpData } from "../../lib/data/texts.svelte";
    
    console.log(`MainPage initialised`)
    $effect(() => {
        console.log("Current page is: " + currentSettings.Page);
    });

    let combined = $state(false);

    function handleCombine() {
        combined = true;
        roomCombineStatus.state = true;
        console.log('Rooms combined');
    }

    function handleSeparate() {
        combined = false;
        roomCombineStatus.state = false;
        console.log('Rooms separated');
    }

    // SVG Icons for room states
    const combineIcon = `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" stroke-width="3" fill="none">
                <!-- Left room -->
                <rect x="20" y="60" width="60" height="80" rx="4"/>
                <!-- Right room -->
                <rect x="120" y="60" width="60" height="80" rx="4"/>
                <!-- Arrow pointing inward -->
                <path d="M85 100 L95 100 M95 100 L90 95 M95 100 L90 105" stroke-linecap="round"/>
                <path d="M115 100 L105 100 M105 100 L110 95 M105 100 L110 105" stroke-linecap="round"/>
                <!-- Combined indicator -->
                <circle cx="100" cy="100" r="8" fill="currentColor"/>
            </g>
        </svg>
    `;

    const separateIcon = `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" stroke-width="3" fill="none">
                <!-- Left room -->
                <rect x="30" y="60" width="60" height="80" rx="4"/>
                <!-- Right room -->
                <rect x="110" y="60" width="60" height="80" rx="4"/>
                <!-- Wall between rooms -->
                <line x1="100" y1="50" x2="100" y2="150" stroke-width="4" stroke-dasharray="8,4"/>
                <!-- Arrows pointing outward -->
                <path d="M75 100 L65 100 M65 100 L70 95 M65 100 L70 105" stroke-linecap="round"/>
                <path d="M125 100 L135 100 M135 100 L130 95 M135 100 L130 105" stroke-linecap="round"/>
            </g>
        </svg>
    `;
</script>

<div class="main-page">
    <div class="button-grid">
        <button 
            class="room-button combine-button {combined ? 'active' : ''}"
            onclick={handleCombine}
        >
            <div class="icon-container">
                {@html combineIcon}
            </div>
            <span class="button-label">Combine Rooms</span>
        </button>
        
        <button 
            class="room-button separate-button {!combined ? 'active' : ''}"
            onclick={handleSeparate}
        >
            <div class="icon-container">
                {@html separateIcon}
            </div>
            <span class="button-label">Separate Rooms</span>
        </button>
    </div>
</div>

<style>
    .main-page {
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
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.12);
    }

    .combine-button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .combine-button.active {
        background: linear-gradient(135deg, #764ba2 0%, #8e5bb8 100%);
        box-shadow: 0 8px 16px rgba(118, 75, 162, 0.4);
    }

    .separate-button {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
    }

    .separate-button.active {
        background: linear-gradient(135deg, #f5576c 0%, #ff4458 100%);
        box-shadow: 0 8px 16px rgba(245, 87, 108, 0.4);
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
            min-height: 200px;
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