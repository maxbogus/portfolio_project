var projectObjects = [
    {
        "name": "Neighborhood Map",
        "description": "A single-page with an area and various points of interest.",
        "url": "https://maxbogus.github.io/Neighborhood_Map_Project/",
        "github": "//github.com/maxbogus/fullstack-nanodegree-vm/tree/master/vagrant/catalog",
        "wide_img": "img/neighborhood_map-wide.png",
        "small_img": "img/neighborhood_map-small.png"
    },
    {
        "name": "Organizational structure",
        "description": "Small crud application to visualize organizational structure.",
        "url": null,
        "github": "//github.com/maxbogus/fullstack-nanodegree-vm/tree/master/vagrant/catalog",
        "wide_img": "img/org_structure-wide.png",
        "small_img": "img/org_structure-small.png"
    },
    {
        "name": "Tournament",
        "description": "Swiss system tournament system.",
        "url": null,
        "github": "//github.com/maxbogus/fullstack-nanodegree-vm/",
        "wide_img": "img/tournament_test-wide.png",
        "small_img": "img/tournament_test-small.png"
    },
    {
        "name": "Blog",
        "description": "Multi-user blog application.",
        "url": "//blog-140923.appspot.com/",
        "github": "//github.com/maxbogus/fullstack-nanodegree-vm/",
        "wide_img": "img/blog_project-wide.png",
        "small_img": "img/blog_project-small.png"
    },
    {
        "name": "Movie Site",
        "description": "Favorite movies.",
        "url": "//maxbogus.github.io/movie_trailer_website/fresh_tomatoes.html",
        "github": "//github.com/maxbogus/fullstack-nanodegree-vm/",
        "wide_img": "img/movie_site-wide.png",
        "small_img": "img/movie_site-small.png"
    }
];

var Project = function (data) {
    var self = this;
    this.name = ko.observable(data.name);
    this.description = ko.observable(data.description);
    this.url = ko.observable(data.url);
    this.github = ko.observable(data.github);
    this.wide_img = ko.observable(data.wide_img);
    this.small_img = ko.observable(data.small_img);

    this.showUrl = ko.computed(function () {
        return null === self.url();
    });
};

var ViewModel = function () {
    var self = this;

    this.projects = ko.observableArray([]);

    projectObjects.forEach(function (project) {
        self.projects().push(new Project(project));
    });
};

ko.applyBindings(new ViewModel());