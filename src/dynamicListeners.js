/*
    I guess button hrefs are weird. Try this tomorrow.

    document.getElementById("Button").addEventListener("click", gotoUrl);
    
function gotoUrl() {
       window.location.assign("https://www.google.com/");
    }


*/

const projectsPage = require('./projectsPage.js');
const homePage = require('./homePage.js');

const dynamicListeners = (() => { 
    const init = function() {
        this.eventDelegation();
        console.log('dynamicListener init');
    }

    const eventDelegation = function() {
        document.getElementById('content').addEventListener('click', function(e){
            let targetId = e.target.id;
            let projectArray = projectsPage.returnArray();

            console.log('You clicked: ' + targetId);

            if (targetId === 'siteButton0'){
                window.location.assign(projectArray[0]['siteLink']);
            } else if (targetId === 'repoButton0'){
                window.location.assign(projectArray[0]['repoLink']);
            } else if (targetId === 'siteButton1'){
                window.location.assign(projectArray[1]['siteLink']);
            } else if (targetId === 'repoButton1'){
                window.location.assign(projectArray[1]['repoLink']);
            } else if (targetId === 'siteButton2'){
                window.location.assign(projectArray[2]['siteLink']);
            } else if (targetId === 'repoButton2'){
                window.location.assign(projectArray[2]['repoLink']);
            } else if (targetId === 'siteButton3'){
                window.location.assign(projectArray[3]['siteLink']);
            } else if (targetId === 'repoButton3'){
                window.location.assign(projectArray[3]['repoLink']);
            } // navBar listeners
              else if (targetId === 'projectsNav' || targetId === 'seeWorkButton') {
                  projectsPage.init();
            } else if (targetId === 'homeNav') {
                  homePage.init();
            } //contact link listeners
              else if (targetId === 'link1') {
                window.location.assign('https://www.linkedin.com/in/edward-staples-749b7a112');
            } else if (targetId === 'link2') {
                window.location.assign('mailto:EdwardRenoStaples@gmail.com');
                //change the link on click
            }
        })
    }


    return {
        init,
        eventDelegation,
    }


})();

module.exports = dynamicListeners;