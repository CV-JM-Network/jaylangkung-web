const navigation = (() => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightActiveLink = () => {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            });
        });
    };

    const toggleDropdown = () => {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (event) => {
                event.stopPropagation();
                dropdown.classList.toggle('show');
            });
        });

        document.addEventListener('click', () => {
            dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
        });
    };

    const init = () => {
        highlightActiveLink();
        toggleDropdown();
    };

    return {
        init
    };
})();

document.addEventListener('DOMContentLoaded', navigation.init);