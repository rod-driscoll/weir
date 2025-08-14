<script>
    // Function to format the current date and time
    function getFormattedTimestamp() {
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        const dayName = days[now.getDay()];
        const day = now.getDate();
        const month = months[now.getMonth()];
        
        // Add ordinal suffix to day
        const getOrdinal = (n) => {
            const s = ['th', 'st', 'nd', 'rd'];
            const v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };
        
        // Format time in 12-hour format
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        
        return `${dayName} ${getOrdinal(day)} ${month} | ${hours}:${minutesStr}${ampm}`;
    }
    
    // Create reactive timestamp that updates every minute
    let timestamp = $state(getFormattedTimestamp());
    
    // Update timestamp every minute
    $effect(() => {
        const interval = setInterval(() => {
            timestamp = getFormattedTimestamp();
        }, 60000); // Update every 60 seconds
        
        // Cleanup interval on component destroy
        return () => clearInterval(interval);
    });
</script>

<span class="timestamp">{timestamp}</span>

<style>
    .timestamp {
        font-size: 0.75rem;
        color: black;
    }
    
    @media (min-width: 768px) {
        .timestamp {
            font-size: 0.875rem;
        }
    }
</style>