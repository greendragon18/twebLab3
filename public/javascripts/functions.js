


function success(data, textStatus, jqXHR) {
    console.log(data);
}

function githubSearch() {
    var textField = document.getElementById('search-field').value;

    console.log(navigator.userAgent);
    $.getJSON("http://localhost:3000/github?search=" + textField, function (data, textStatus, jqXHR) {
        console.log(data);

        var repos = JSON.parse(data);
        $("#repo_table").slideToggle;

        var source = "<tr>" +
            "<td>{{name}}</td>" +
            "<td>{{owner}}</td>" +
            "<td>{{url}}</td>" +
            "<td>{{description}}</td>" +
            "<td>{{language}}</td>" +
            "<td>{{updated}}</td>" +
            "</tr>";
        var template = Handlebars.compile(source);
        //var repo = {repo: [data]};
        //var repo = {"name": "tutu", "owner": "tata", "url": "lala", "description": "titi", "language": "toto", "updated": "lili"};
        //var repo = {repo: [0]};
        //console.log(repo);
        repos.forEach(function(repo){
            $("#repo_table").append(template(repo));
        });
    });

}

// Shorthand for $( document ).ready()
$(function () {
    console.log("jquery is ready!");
    $("#repo_table").slideToggle;
    //$("#mondiv").hide();
});