function flipPage(page) {
    if (page.classList.contains('flipped')) {
        page.style.zIndex = "20"; 
        page.classList.remove('flipped');
        
        setTimeout(() => {
            page.style.zIndex = "1";
        }, 1000);
    } else {
        page.style.zIndex = "20"; 
        page.classList.add('flipped');
    }

}
