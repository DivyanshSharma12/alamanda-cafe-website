// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('body').classList.add('scroll');
    } else {
        document.querySelector('body').classList.remove('scroll');
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-li'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active');
    }
    item.addEventListener('click', onClick);
}


document.addEventListener('DOMContentLoaded', () => {
    // Toggle the answer display on FAQ item click
    const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
    faqItems.forEach(item => {
        const button = item.querySelector('.cs-button');
        button.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // FAQ filter functionality
    class FAQFilter {
        constructor() {
            this.filtersSelector = '.cs-option';
            this.FAQselector = '.cs-faq-group';
            this.activeClass = 'cs-active';
            this.hiddenClass = 'cs-hidden';

            const $filters = document.querySelectorAll(this.filtersSelector);
            this.$activeFilter = $filters[0];
            this.$faqGroups = document.querySelectorAll(this.FAQselector);

            this.$activeFilter.classList.add(this.activeClass);

            $filters.forEach($filter => {
                $filter.addEventListener('click', () => this.onClick($filter));
            });
        }

        onClick($filter) {
            this.filter($filter.dataset.filter);

            this.$activeFilter.classList.remove(this.activeClass);
            $filter.classList.add(this.activeClass);

            this.$activeFilter = $filter;
        }

        filter(filter) {
            const showAll = filter === 'all';
            this.$faqGroups.forEach($faqGroup => {
                const show = showAll || $faqGroup.dataset.category === filter;
                $faqGroup.classList.toggle(this.hiddenClass, !show);
            });
        }
    }

    new FAQFilter();
});
