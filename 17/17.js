// var xhr = new XMLHttpRequest();
// xhr.open('get', 'https://swapi.co/api/people/1/', true);
// xhr.addEventListener('load', function(e) {
//     console.log(JSON.parse(e.target.response));
// });
// xhr.send();

// function request(method, url, cb) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url, true);
//     xhr.addEventListener('load', function(e) {
//         cb({
//             body: JSON.parse(e.target.response),
//             status: e.target.status
//         })
//     });
//     xhr.send();
// }

var pag = document.getElementById('wrapper');

request('get', 'https://swapi.co/api/people/')
    .then(function(data){
        return data.results[0].starships;
    })
    .then(function(ships){
        return request('get', ships[0]);
    })
    .then(function(starShipInfo){
        console.log(starShipInfo);
    })




// request('get', 'https://swapi.co/api/people/', function(data){
//     var paginationArray = drawPagination(data.body.count, 10, 1);
//     pag.innerHTML = paginationArray.join('');
// });

// function requestData(e, page) {
//     request('get', 'https://swapi.co/api/people/?page=' + page, function(data){
//         var paginationArray = drawPagination(data.body.count, 10, page);
//         pag.innerHTML = paginationArray.join('');
//     });
//     e.preventDefault();
// }


//>>>>>>>>>>>>>>>>>>>> Мой вариант пагинации по страницам swapi.co >>>>>>>>>>>>>>>

/* var wrapp = document.getElementById('wrapper');

for (i = 1; i <= 9; i++) {
    var j = document.createElement('a');
    j.id = 'link' + i;
    j.innerText = i;
    j.style.cursor = 'pointer';
    j.style.marginRight = '5px';
    wrapp.appendChild(j);
}

var link1 = document.getElementById('link1'),
    link2 = document.getElementById('link2'),
    link3 = document.getElementById('link3'),
    link4 = document.getElementById('link4'),
    link5 = document.getElementById('link5'),
    link6 = document.getElementById('link6'),
    link7 = document.getElementById('link7'),
    link8 = document.getElementById('link8'),
    link9 = document.getElementById('link9');

link1.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=1', function(data){
        console.log('Page 1 ');
        console.log(data.body.results);
    });
});
link2.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=2', function(data){
        console.log('Page 2 ');
        console.log(data.body.results);
    });
});
link3.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=3', function(data){
        console.log('Page 3 ');
        console.log(data.body);
    });
});
link4.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=4', function(data){
        console.log('Page 4 ');
        console.log(data.body);
    });
});
link5.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=5', function(data){
        console.log('Page 5 ');
        console.log(data.body);
    });
});
link6.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=6', function(data){
        console.log('Page 6 ');
        console.log(data.body);
    });
});
link7.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=7', function(data){
        console.log('Page 7 ');
        console.log(data.body);
    });
});
link8.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=8', function(data){
        console.log('Page 8 ');
        console.log(data.body);
    });
});
link9.addEventListener('click', function() {
    request('get', 'https://swapi.co/api/people/?page=9', function(data){
        console.log('Page 9 ');
        console.log(data.body);
    });
}); */