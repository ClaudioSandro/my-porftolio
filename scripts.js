const projects = {
    dotornet: {
        title: "Dotornet",
        video: "path/to/dotornet-video.mp4",
        description: "Complete description of Dotornet project.",
        technologies: "HTML, CSS, JavaScript, .NET",
        pageLink: "dotornet",
        repoLink: "https://github.com/ClaudioSandro/Dotornet"
    },
    peveseta: {
        title: "Peveseta",
        video: "path/to/peveseta-video.mp4",
        description: "Complete description of Peveseta project.",
        technologies: "HTML, CSS, JavaScript",
        pageLink: "peveseta",
        repoLink: "peveseta"
    },
    musicallz: {
        title: "Musicallz",
        video: "path/to/musicallz-video.mp4",
        description: "Complete description of Musicallz project.",
        technologies: "HTML, CSS, JavaScript",
        pageLink: "musicallz",
        repoLink: "musicallz"
    }
};

function openDialog(projectKey) {
    const project = projects[projectKey];
    document.getElementById('projectTitle').innerText = project.title;
    document.getElementById('projectVideo').src = project.video;
    document.getElementById('projectDescription').innerText = project.description;
    document.getElementById('projectTechnologies').innerText = project.technologies;
    document.getElementById('projectPageLink').href = project.pageLink;
    document.getElementById('projectRepoLink').href = project.repoLink;
    document.getElementById('projectDialog').style.display = 'flex';
}

function closeDialog() {
    document.getElementById('projectDialog').style.display = 'none';
}