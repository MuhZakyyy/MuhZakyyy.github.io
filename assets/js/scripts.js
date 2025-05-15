<script>
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // initial call
</script>


