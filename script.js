function openPages() {
    let url = document.getElementById('urlInput').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    for (let i = 0; i < 1000; i++) {
        let iframe = document.createElement('iframe');
        iframe.src = url;
        grid.appendChild(iframe);
    }
}

function closeAllPages() {
    document.getElementById('grid').innerHTML = '';
}
