// ==UserScript==
// @name         Get rid of rounded borders on youtube
// @version      1.0
// @description  Get rid of rounded borders on youtube
// @author       ledoxmedox
// @match        *://www.youtube.com/*
// @grant        GM_addStyle
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @updateURL    https://github.com/ledoxmedox/get-rid-of-rounded-borders-on-youtube/raw/main/download.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('* { border-radius: 0px !important; }');
})();
