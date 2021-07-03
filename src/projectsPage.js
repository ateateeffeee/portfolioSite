const homePage = require('./homePage.js');


//Factory function to create projects
function project(title, subheading, siteLink, repoLink) {
    const project = {};

    project.title = title;
    project.subheading = subheading;
    project.siteLink = siteLink;
    project.repoLink = repoLink;

    return project;
}

//Global project array
const projectArray = [];

//Create project objects
const project1 = new project ('To-do list app', 'Self explanatory.', 'https://ateateeffeee.github.io/newTodo/', 'https://github.com/ateateeffeee/newTodo');
projectArray.push(project1);

const project2 = new project('Calculator', "It's a calculator.", 'https://ateateeffeee.github.io/calculator/', 'https://github.com/ateateeffeee/calculator');
projectArray.push(project2);

const project3 = new project('Library app', 'Keep a log of what you have read or what you are currently reading.', 'https://ateateeffeee.github.io/library-app/', 'https://github.com/ateateeffeee/library-app');
projectArray.push(project3);

const project4 = new project('Tic-Tac-Toe', 'Prepare for EVO online.', 'https://ateateeffeee.github.io/tictactoe/', 'https://github.com/ateateeffeee/tictactoe');
projectArray.push(project4);







const projectsPage = (() => {
    const init = function() {
        homePage.clearScreen();
        homePage.displayNavBar();
        this.displayHeader();
        this.displayProjects();
        this.displayFooter();

    }

    const displayHeader = function() {
        let content = document.getElementById('content');

        let header = document.createElement('div');
        header.innerHTML = 'Projects';
        header.id = 'headerText';

        //Append div
        content.append(header);
    }

    const displayProjects = function() {
        let content = document.getElementById('content');

        //let content = document
        for (let i = 0; i < projectArray.length; i++) {
            console.log(projectArray[i]['title']);

            //Create div
            let projectDiv = document.createElement('div');
            projectDiv.id = 'project' + i;
            projectDiv.className = 'projectDivs';

            //Create text
            let titleText = document.createElement('div');
            titleText.innerHTML = projectArray[i]['title'];
            titleText.className = 'projectNames';

            let subText = document.createElement('div');
            subText.innerHTML = projectArray[i]['subheading'];
            subText.className = 'subheadings';

            //Create buttons
            //site button
            let siteButton = document.createElement('button');
            siteButton.innerHTML = 'Live';
            siteButton.href = projectArray[i]['siteLink'];
            siteButton.id = 'siteButton' + i;
            siteButton.className = 'buttons';

            let repoButton = document.createElement('button');
            repoButton.innerHTML = 'Github';
            repoButton.href = projectArray[i]['repoLink'];
            repoButton.id = 'repoButton' + i;
            repoButton.className = 'buttons';

            //append objects
            projectDiv.append(titleText);
            projectDiv.append(subText);
            projectDiv.append(siteButton);
            projectDiv.append(repoButton);

            content.append(projectDiv);

        }
        
    }

    const displayFooter = function() {
        let content = document.getElementById('content');

        let footerDiv = document.createElement('div');
        footerDiv.id = 'footer';

        let leftSide = document.createElement('div');
        leftSide.id = 'leftSideFooter';

        let contactText = document.createElement('div');
        contactText.innerHTML = 'Contact';
        contactText.id = 'contactText';

        let links = document.createElement('div');
        links.id = 'contactLinks';

        let link1 = document.createElement('div');
        link1.innerHTML = 'LinkedIn';
        link1.id = 'link1';
        link1.className = 'links';

        let link2 = document.createElement('div');
        link2.innerHTML = 'Gmail';
        link2.id = 'link2';
        link2.className = 'links';

        let rightSide = document.createElement('div');
        rightSide.id = 'rightSideFooter';

        let rightFooterText = document.createElement('div');
        rightFooterText.innerHTML = 'This is my face';
        rightFooterText.id = 'rightFooterText';

        let image = document.createElement('image');
        image.id = 'image';

        //Append elements
        links.append(link1);
        links.append(link2);

        leftSide.append(contactText);
        leftSide.append(links);

        rightSide.append(rightFooterText);
        rightSide.append(image);

        footerDiv.append(leftSide);
        footerDiv.append(rightSide);

        content.append(footerDiv);
        
    }
    const returnArray = function() {
        return projectArray
    }

    
    /*
    idea create an object to store all the parts in a project div
        and create all projects in one function
        Parts: title, img (see if that's possible), subheading,
         site link, repo link

    */

    return {
        init,
        displayHeader,
        displayProjects,
        displayFooter,
        returnArray,
    }

})();

module.exports = projectsPage;