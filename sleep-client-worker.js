onmessage = function(e) {
    var data = e.data[0].filter(function(d){ return d.measured_datapoints; });
    var sleepSessionIds = [...new Set(data.map(function(d){ return d.id; }))]
        .filter(function(d) { return d; });
    var updatedData = [];
    for (var i = 0; i < sleepSessionIds.length; i++) {
        var id = sleepSessionIds[i];
        updatedData.push(data.filter(function(d) { return d.id === id; })[0]);
    }
    console.log(updatedData, sleepSessionIds);
}