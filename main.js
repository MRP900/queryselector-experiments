window.onload = ()=> {
    // Select sections
    const sections = document.querySelectorAll('.sections')
    const hiddenSections = document.querySelectorAll('.hidden');

    // Select all links
    const links = document.querySelectorAll('.links');

    // document.querySelectorAll(".sections").forEach(addEventListener("click", getId));
    document.querySelectorAll('.links').forEach(item => {
        item.addEventListener('click', e => {
            // Get the clicked event and selected element
            const et = e.target;
            // Get current selected element
            const selected = document.querySelector('.selected');
            
            // Deselect the active link, select the clicked link
            selected.classList.remove('selected');
            et.classList.add('selected');

            // Unhide corresponding section
            sections.forEach(section => {
                section.classList.add('hidden');
                if(section.id == et.innerHTML){
                    section.classList.remove('hidden');
                }
            })
        })
    })
}