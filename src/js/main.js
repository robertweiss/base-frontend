import {
    polyfill // eslint-disable-line no-unused-vars
} from 'array.from';
import svg4everybody from 'svg4everybody';
import Smoothscroll from 'smooth-scroll';
import {watchViewport, getViewportState} from 'tornis';

import {} from '../css/style.css';

import './partials/cookie';
import accordion from './partials/accordion';
import './partials/path.polyfill';

svg4everybody();

//
// Mainnavigation Subnav Toggles
//
const subnavToggles = document.querySelectorAll('.mainnav .level-1.has_children span');

[...subnavToggles].forEach((toggle) => {
    // Add eventlisteners to all toggles
    toggle.addEventListener('click', (ev) => {
        const currentToggle = ev.target;
        const currentLiElement = currentToggle.parentNode;
        if (!currentLiElement.classList.contains('level-1')) return;

        // Remove active class from all other subnavs
        [...subnavToggles].forEach((toggle) => {
            if (currentToggle === toggle) return;
            toggle.parentNode.classList.remove('is-active');
        });

        // Toggle active class on current subnav
        currentLiElement.classList.toggle('is-active');
    });
});

// Hide nav on click outside navigation
document.body.addEventListener('click', (ev) => {
    let isMainnav = false;

    // Check all parent nodes of clicked element if they are the mainnav
    const path = ev.path || (ev.composedPath && ev.composedPath());
    path.forEach((node) => {
        if (node.classList && node.classList.contains('mainnav')) {
            isMainnav = true;
        }
    });

    // If mainnav is not in path of clicked element, remove all active classes
    if (!isMainnav) {
        [...subnavToggles].forEach((toggle) => {
            toggle.parentNode.classList.remove('is-active');
        });
    }
});

accordion.init();

new Smoothscroll('a[href*="#"]', {
    speed: 250
});

const scrollToTopEl = document.querySelector('.scroll-to-top');
watchViewport(({scroll}) => {
    if (scroll.top > getViewportState().size.y * 1.5) {
        scrollToTopEl.classList.add('is-visible');
    } else {
        scrollToTopEl.classList.remove('is-visible');
    }
});
