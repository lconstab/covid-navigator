document.title = workStreamBrowserTitle;

var addIntermediaryNodes = true;

var jsonById = {};
var srels = {};

function setTable() {
    var nt = document.getElementById("nodeTable");
    html = '<table id="nt"><tr><td></td>';
    var x = new Array();
    var y = new Array();
    var i = 0;
    for (var item in json) {
        jsonById[json[item].id] = json[item];
        if (json[item].data.$type == 'ellipse') {
            y.push(item);
        } else if (json[item].data.$type == 'square') {
            x.push(item);
        }
    }
    x.sort();
    y.sort();
    for (i = 0; i < x.length;i++) {
        var square = json[x[i]];
        html += '<th>' + square.name + '</th>';
    }
    html += '</tr>';
    for (i = 0; i < y.length;i++) {
        var ellipse = json[y[i]];
        html += '<tr><th>' + ellipse.name + '</th>';
        for (var c = 0;c < x.length;c++) {
            square = json[x[c]];
            html += '<td>';
            var eResult = getSquareToEllipseConnections(square, ellipse);
            var sResult = getEllipseToSquareConnections(ellipse, square);
            for (var r = 0; r < sResult.length;r++) {
                if (!isMemberOf(sResult[r], eResult)) {
                    eResult.push(sResult[r]);
                }
            }
            eResult.sort();
            for (r = 0; r < eResult.length;r++) {
                html += '<span>' + eResult[r] + '</span><br/>'
            }
            html += '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    nt.innerHTML = html;
}

function getSquareToEllipseConnections(square, ellipse) {
    var result = new Array();
    var relatedNodes = null;
    if (typeof srels[square.id] == 'undefined') {
        srels[square.id] = new Array();
        relatedNodes = srels[square.id];
    }
    var adjacencies = square.adjacencies;
    var eAdjacencies = ellipse.adjacencies;
    if (typeof adjacencies != 'undefined') {
        for (var i = 0;i < adjacencies.length;i++) {
            var adjacency = jsonById[adjacencies[i].nodeTo];
            // console.log('checking ' + square.id + '.' + adjacency.id + ' against ' + ellipse.id);
            var hits = isLinked(relatedNodes, adjacency, ellipse, new Array());
            if (hits && !isMemberOf(adjacency.name, result)) {
                result.push(adjacency.name);
            }
            if (typeof eAdjacencies != 'undefined') {
                for (var c = 0;c < eAdjacencies.length;c++) {
                    var eAdjacency = jsonById[eAdjacencies[c].nodeTo];
                    //console.log('checking ' + square.id + '.' + adjacency.id + ' against ' + ellipse.id + '.' + eAdjacency.id);
                    hits = isLinked(relatedNodes, adjacency, eAdjacency, new Array());
                    if (hits && !isMemberOf(eAdjacency.name, result)) {
                        result.push(eAdjacency.name);
                    }
                }
            }
        }
    }
    return result;
}

function getEllipseToSquareConnections(ellipse, square) {
    var result = new Array();
    var sRelatedNodes = srels[square.id];
    //sRelatedNodes.sort();
    //console.log(square.id);
    //console.log(sRelatedNodes);
    var adjacencies = ellipse.adjacencies;
    if (typeof adjacencies != 'undefined') {
        for (var i = 0;i < adjacencies.length;i++) {
            var relatedNodes = new Array();
            var adjacency = jsonById[adjacencies[i].nodeTo];
            //console.log('checking ' + ellipse.id + '.' + adjacency.id + ' against ' + square.id);
            hits = isLinked(relatedNodes, adjacency, square, new Array());
            if (hits) {
                result.push(adjacency.name);
            }
            if (addIntermediaryNodes && relatedNodes != null) {
                if (!isMemberOf(adjacency.name, result)) {
                    for (var c = 0; c < relatedNodes.length;c++) {
                        if (isMemberOf(relatedNodes[c], sRelatedNodes)) {
                            result.push(adjacency.name);
                        }
                    }
                }
                //relatedNodes.sort();
                //console.log(adjacency.id);
                //console.log(relatedNodes);
            }
        }
    }
    //console.log('---------------------------------------------------------------');
    return result;
}

function isLinked(relatedNodes, a, b, traversedNodeIds) {
    var result = false;
    var nodeType = b.data.$type;
    if (a.id == b.id) {
        result = true;
    }
    if (!result) {
        var adjacencies = a.adjacencies;
        if (typeof adjacencies != 'undefined') {
            for (var i=0;i<adjacencies.length;i++) {
                var adjacency = jsonById[adjacencies[i].nodeTo];
                if (relatedNodes != null) {
                    if (!isMemberOf(adjacency.id, relatedNodes)) {
                        relatedNodes.push(adjacency.id);
                    }
                }
                if (isMemberOf(adjacency.id, traversedNodeIds)) {
                    continue;
                }
                traversedNodeIds.push(adjacency.id);
                if (adjacency.id == b.id) {
                    result = true;
                    break;
                }
                if (!result && adjacency.data.$type != nodeType) {
                    result = isLinked(relatedNodes, adjacency, b, traversedNodeIds);
                }
            }
        }
    }
    return result;
}

function isMemberOf(member, members) {
    var result = false;
    for (var i = 0; i < members.length; i++) {
        if (members[i] == member) {
            // console.log('Ran into a node already recursed: ' + member);
            result = true;
            break;
        }
    }
    return result;
}