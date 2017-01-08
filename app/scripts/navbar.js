document.addEventListener('DOMContentLoaded', function() {

    // navbar

    var navItems = document.querySelector('nav .container-fluid').childNodes;
    var openSearchFormButton = document.getElementById('open-search-form-button');
    var closeSearchForButton = document.getElementById('close-search-form-button');
    var navbarSearchForm = document.getElementById('navbar-search-form');
    var searchInput = navbarSearchForm.querySelector('input');
    var navbarCatalogContainer = document.getElementById('o-navbar-catalog-container');
    var cartButton = document.getElementById('cart-button');
    var checkoutButton = document.getElementById('checkout-button');

    function closeSearchForm() {
        navbarSearchForm.classList.toggle('hidden-xs');
        searchInput.value = '';

        for (var i = 0; i < navItems.length; i++) {
            if (navItems[i].style !== undefined && navItems[i] !== navbarSearchForm) {
                navItems[i].style.display = null
            }
        }
    }

    function openSearchForm() {
        navbarSearchForm.classList.toggle('hidden-xs');

        for (var i = 0; i < navItems.length; i++) {
            if (navItems[i].style !== undefined && navItems[i] !== navbarSearchForm) {
                navItems[i].style.display = 'none';
            }
        }

        searchInput.focus();
    }

    function isSearchFormOpened() {
        return navbarSearchForm.classList.contains('hidden-xs') === false;
    }

    window.addEventListener('resize', function(event) {
        if (window.innerWidth > 767) {
            $(navbarCatalogContainer).collapse('hide');
            if (isSearchFormOpened()) {
                closeSearchForm();
            }
        }
    });

    navbarCatalogContainer.addEventListener('click', function() {
        $(navbarCatalogContainer).collapse('hide');
    });

    searchInput.addEventListener('blur', function() {
        if (window.innerWidth < 768 && isSearchFormOpened()) {
            closeSearchForm();
        }
    });

    openSearchFormButton.addEventListener('click', openSearchForm);
    closeSearchForButton.addEventListener('click', closeSearchForm);

    $('#cart-button').popover({
        html: true,
        container: 'body',
        animation: false,
        content: function() {
            return $('#cart-popover-wrapper').html();
        }
    });
});

// simulate delay, for testing
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
