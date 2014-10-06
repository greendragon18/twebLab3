


function success(data, textStatus, jqXHR) {
    console.log(data);
}

function githubSearch() {
    $("#repos_div").show();
    var textField = document.getElementById('search-field').value;

    $.getJSON("/github?search=" + textField, function (data, textStatus, jqXHR) {
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
        repos.forEach(function(repo){
            $("#repo_table").append(template(repo));
        });
    });

}

$(function () {
    console.log("jquery is ready!");
    $("#repo_table").slideToggle;
    $("#repos_div").hide();
});