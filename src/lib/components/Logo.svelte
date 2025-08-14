<script lang="ts">
    // Weir logo SVG
    const weirLogo = `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
            <!-- W -->
            <path d="M 5 10 L 10 30 L 15 15 L 20 30 L 25 10 L 22 10 L 20 25 L 15 12 L 10 25 L 8 10 Z"/>
            <!-- E -->
            <path d="M 35 10 L 35 30 L 48 30 L 48 27 L 38 27 L 38 21 L 46 21 L 46 18 L 38 18 L 38 13 L 48 13 L 48 10 Z"/>
            <!-- I -->
            <path d="M 58 10 L 58 30 L 61 30 L 61 10 Z"/>
            <!-- R -->
            <path d="M 71 10 L 71 30 L 74 30 L 74 22 L 78 22 L 83 30 L 87 30 L 81 21 C 83.5 20.5 85 18.5 85 16 C 85 12.5 82.5 10 79 10 Z M 74 13 L 78 13 C 80 13 81.5 14 81.5 16 C 81.5 18 80 19 78 19 L 74 19 Z"/>
            <!-- Registered trademark symbol -->
            <circle cx="92" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="0.5"/>
            <text x="92" y="14" font-size="5" text-anchor="middle" fill="currentColor">®</text>
        </g>
    </svg>`;
</script>

<span class="logo">{@html weirLogo}</span>