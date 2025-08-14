
<script lang="ts">
    import { qrwcSvelte } from "../qrwc";
    const roomCombineComponent = qrwcSvelte.useComponent('Room_Combiner');
    //const roomControlsComponent = qrwcSvelte.useComponent(roomController);
    const roomCombineStatus = roomCombineComponent.useButton('wall.1.open');
    import { currentSettings, helpData } from "../data/texts.svelte";
    
    console.log(`MainPage initialised`)
    $effect(() => {
        console.log("Current page is: " + currentSettings.Page);
    });

    let combined = $state(true)

    function sendBtn(val: number) {
        console.log(`Button ${val} pressed`);
        console.log(`btn${roomCombineStatus.state ? 'On' : 'Off'}`);
        //roomCombineStatus.state = val==1;
        combined = val==1;
    }   

  let tiles = $derived([
    { 
      icon: "combined", 
      label: "Combined", 
      //isActive: roomCombineStatus.state,
      isActive: combined,
      bgColor: "bg-blue-600"
    },
    { 
      icon: "separate", 
      label: "Separate", 
      //isActive: roomCombineStatus.state,
      isActive: combined,
      bgColor: "bg-blue-600"
    },
  ]);
    
  function handleTileClick(index) {
    const tileKeys = ['combined', 'separate'];
    const key = tileKeys[index];
    //roomCombineStatus.state = index==1;
    combined = index==1;
  }


</script>

<div class="main-section">
    <!-- 
    <div class="Button-list">
        <button class="btn1 btn${roomCombineStatus.state ? 'On' : 'Off'}" onclick={() => sendBtn(1)}>
            Combine rooms
        </button>
        <button class="btn2 btn${roomCombineStatus.state ? 'On' : 'Off'}" onclick={() => sendBtn(2)}>
            Separate rooms
        </button>
    </div> 
    -->
    <div class="grid-container">
        <div class="control-grid">
        {#each tiles as tile, index}
            <div 
                class="control-tile {tile.isActive ? tile.bgColor : 'bg-gray-400'}"
                onclick={() => handleTileClick(index)}
            >
            <div class="icon-container">
                {@html getMainIcon(tile.icon)}
            </div>
            <span class="tile-label">{tile.label}</span>
            </div>
        {/each}
        </div>
    </div>

</div>

<style>
  .control-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.375rem;
    border: none;
    background: none;
    color: white;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    touch-action: manipulation;
  }

  .control-btn.active {
    background-color: #1e40af;
  }

  .control-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .btn-label {
    font-size: 0.625rem;
    margin-top: 0.125rem;
    text-align: center;
    line-height: 1.1;
  }
</style>