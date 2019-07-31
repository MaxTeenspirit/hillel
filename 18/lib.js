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

function drawPagination(total, limit, current) {
    var pagesCount = Math.ceil(total / limit);
    return Array(pagesCount)
    .fill(1)
    .map(function(n, index) {
        var currentPage = index + 1;
        return current && currentPage === current ? '<span>' + currentPage + '</span>' : 
        '<a href="" onclick="requestData(event, ' + currentPage + ')">' + currentPage + '</a>';
    })
}