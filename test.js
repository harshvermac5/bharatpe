const tooltip = document.querySelector('.tooltip');
const target = document.querySelector('.tooltip-target');

target.addEventListener('mousemove', (e) => {
    tooltip.style.left = `${e.pageX + 10}px`; // Offset to the right
    tooltip.style.top = `${e.pageY + 10}px`; // Offset downward
    tooltip.style.visibility = 'visible'; // Show the tooltip
});

target.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden'; // Hide the tooltip
});
