const homePage = (() => {
    const init = function() {
            this.clearScreen();
            this.displayNavBar();
            this.displayText();
            this.displayButton();
    
    }

    const displayNavBar = function() {
        let content = document.getElementById('content');

        //navBar div
        let navBar = document.createElement('div');
        navBar.id = 'navBar'

        //Projects div
        let projects = document.createElement('div');
        projects.innerHTML = 'Projects';
        projects.id = 'projectsNav';
        projects.className = 'navBarText';

        //Home div
        let home = document.createElement('div');
        home.innerHTML = 'Home';
        home.id = 'homeNav';
        home.className = 'navBarText';

        //Append divs
        navBar.append(home);
        navBar.append(projects);

        content.append(navBar);
       


    }

    const displayText = function() {
        let content = document.getElementById('content');

        //Container
        let mainContainer = document.createElement('div');
        mainContainer.id = 'mainContainer';

        //Name div
        let name = document.createElement('div');
        name.innerHTML = 'Edward Staples';
        name.id = 'nameText';
        name.className = 'homeText';

        //Subheading div
        let subHeading = document.createElement('div');
        subHeading.innerHTML = 'Full-stack web developer';
        subHeading.id = 'subheadingText';
        subHeading.className = 'homeText';

        //Append divs
        mainContainer.append(name);
        mainContainer.append(subHeading);

        content.append(mainContainer);

    }

    const displayButton = function() {
        let infoContainer = document.getElementById('mainContainer');

        //"See my work" button
        let button = document.createElement('button');
        button.innerHTML = 'See my work';
        button.id = 'seeWorkButton';
        button.className = 'buttons';

        //Append button
        mainContainer.append(button);
    }

    const clearScreen = function() {
        let content = document.getElementById('content');
        content.innerHTML = '';
    }



    return {
        init,
        displayNavBar,
        displayText,
        displayButton,
        clearScreen,
    }

})();

module.exports = homePage;