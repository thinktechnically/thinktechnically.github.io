const toggleButton = document.createElement('button');
toggleButton.id = 'dark-mode-toggle';
toggleButton.innerText = '🌙';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
