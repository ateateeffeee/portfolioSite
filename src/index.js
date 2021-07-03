//Load external modules
//const dom = require('./dom.js');
//const staticListeners = require('./staticListeners.js');
const dynamicListeners = require('./dynamicListeners.js');
//const logic = require('./logic.js');
const homePage = require('./homePage.js');
const projectsPage = require('./projectsPage.js');

//Execute external modules
//dom.init();
//staticListeners.init();
//logic.init();
//dynamicListeners.init();

homePage.init();
//projectsPage.init();
dynamicListeners.init();

/*
things to add:
-footer
    linkedIn link
    pic of muh face
*/

