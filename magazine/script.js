function flipPage(page) {
    if (page.classList.contains('flipped')) {
        // Unflipping: move it to the front immediately
        page.style.zIndex = "20"; 
        page.classList.remove('flipped');
        
        // After animation, move it back to its normal layer
        setTimeout(() => {
            page.style.zIndex = "1";
        }, 1000);
    } else {
        // Flipping: move it to the top so it doesn't clip
        page.style.zIndex = "20"; 
        page.classList.add('flipped');
    }
}