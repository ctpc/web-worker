onmessage = function(e) {
    var data = e.data[0];
    var sleepSessionIds = [...new Set(data.map(function(d){ return d.id; }))];

    console.log(data, sleepSessionIds);
}