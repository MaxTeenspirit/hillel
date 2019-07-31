function request(method, url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.addEventListener('load', function(e) {
        cb({
            body: JSON.parse(e.target.response),
            status: e.target.status
        })
    });
    xhr.send();
}


var pag = document.getElementById('wrapper');

request('get', 'https://swapi.co/api/people/', function(data){
    var paginationArray = drawPagination(data.body.count, 10, 1);
    pag.innerHTML = paginationArray.join('');
});

function requestData(e, page) {
    request('get', 'https://swapi.co/api/people/?page=' + page, function(data){
        var paginationArray = drawPagination(data.body.count, 10, page);
        pag.innerHTML = paginationArray.join('');
    });
    e.preventDefault();
}