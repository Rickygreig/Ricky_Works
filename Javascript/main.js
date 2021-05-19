// Data
var presence = [
    { brand : 'github', url: "https://github.com/Rickygreig" },
    { brand : 'twitter', url: "https://twitter.com/rickygreig3" },
    { brand : 'linkedin', url: "https://www.linkedin.com/in/ricky-greig-484955211/" },
]

var tabs = [
    {tab: 'index.html', tabName: "Home"},
    {tab: 'aboutMe.html', tabName: "About Me"},
    {tab: 'contact.html', tabName: "Contact"},
    {tab: 'projects.html', tabName: "Projects"},
]

var logos = [
    {logo:"footerLogo", logoLink: "/polyImages/htmlLogo.jpg"},
    {logo:"footerLogo", logoLink: "/polyImages/cssLogo.jpg"},
    {logo:"footerJS", logoLink: "/polyImages/javascriptLogo.png"},
    {logo:"footerPy", logoLink: "/polyImages/pythonLogo.png"},
]

var lLogos = [
    {lLogo: "languageLogo", lLogoLink: "/polyImages/htmlLogo.jpg"},
    {lLogo: "languageLogo", lLogoLink: "/polyImages/cssLogo.jpg"},
    {lLogo: "languageLogoJs", lLogoLink: "/polyImages/javascriptLogo.png"},
    {lLogo: "languageLogop", lLogoLink: "/polyImages/pythonLogo.png"},
]

var projects = [
    {project: "rps", url: "https://github.com/Rickygreig/Rock-Paper-Scissors", img: "/polyImages/rpsScreen.png"},
]

// Logic

$( document ).ready(function() {
    Handlebars.getTemplate = function(name) {
        if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
            $.ajax({
                url : 'templates/' + name + '.handlebars',
                success : function(data) {
                    if (Handlebars.templates === undefined) {
                        Handlebars.templates = {};
                    }
                    Handlebars.templates[name] = Handlebars.compile(data);
                },
                async : false
            });
        }
        return Handlebars.templates[name];
    };
    
    // Social Media
    var temp = Handlebars.getTemplate('social');
    document.getElementById('socialData').innerHTML += temp({presence: presence});;

    // Side Bar
    var temp = Handlebars.getTemplate('sidebar');
    document.getElementById('sidebar').innerHTML += temp({tabs: tabs});;

    // Footer
    var temp = Handlebars.getTemplate('footer');
    document.getElementById('footerLogos').innerHTML += temp({logos: logos});;

    // Languages
    var temp = Handlebars.getTemplate('language');
    document.getElementById('languages').innerHTML += temp({lLogos: lLogos});;

    // Projectsssssssssssssssssssssss
    var temp = Handlebars.getTemplate('projects');
    document.getElementById('projects').innerHTML += temp({projects: projects});;

});

