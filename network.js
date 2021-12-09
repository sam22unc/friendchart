var data = {
    "nodes": [
        {"id": "Sam"},
        {"id": "Diana"}
    ],
    "edges": [
      { "from": "Sam", "to": "Diana" }
    ]
}


var chart = anychart.graph(data);
var nodes = chart.nodes();
var edges = chart.edges();


// Normal
nodes.normal().height(10);
nodes.normal().fill("#0677A1");
edges.normal().stroke("#0677A1");
nodes.normal().stroke(null);

// Hovered
nodes.hovered().height(20);
nodes.hovered().fill("white");
edges.hovered().stroke("white");

// Selected
nodes.selected().height(20);
nodes.selected().fill("#DA7B93");
edges.selected().stroke("#DA7B93");


// Show Names
nodes.labels().enabled(true);

// Chart Style
chart.title("Friend Chart");
chart.background().fill("#2F4454");


// Draw Network
chart.container("network").draw();
