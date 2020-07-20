var labelType, useGradients, nativeTextSupport, animate, nodeListBrowserTitle, nodeListLinkText;
function getJSONValues() {
    var values = [];
    for (var i in json) values.push(json[i]);
    return values;
}

if (typeof nodeListBrowserTitle === 'undefined') {
    nodeListBrowserTitle = 'Node List';
}

if (typeof nodeListLinkText === 'undefined') {
    nodeListLinkText = 'Node List';
}

if (typeof workStreamBrowserTitle === 'undefined') {
    workStreamBrowserTitle = 'Work Stream Inventory';
}

if (typeof workStreamLinkText === 'undefined') {
    workStreamLinkText = 'Work Stream Inventory';
}

var nodeListLink = '<a href="nodelist.html" target="' + nodeListBrowserTitle + '" >' + nodeListLinkText + '</a>';
var workStreamLink = '<a href="work-stream-inv.html" target="' + workStreamBrowserTitle + '" >' + workStreamLinkText + '</a>';

(function() {
    var ua = navigator.userAgent,
    iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
    typeOfCanvas = typeof HTMLCanvasElement,
    nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
    textSupport = nativeCanvasSupport
    && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

function init(){
    // init ForceDirected
    var fd = new $jit.ForceDirected({
        //id of the visualization container
        injectInto: 'container',
        //Enable zooming and panning
        //with scrolling and DnD
        Navigation: {
            enable: true,
            //Enable panning events only if we're dragging the empty
            //canvas (and not a node).
            panning: 'avoid nodes',
            zooming: zoomFxSpeed //zoom speed. higher is more sensible
        },
        // Change node and edge styles such as
        // color and width.
        // These properties are also set per node
        // with dollar prefixed data-properties in the
        // JSON structure.
        Node: {
            overridable: true,
            dim: defaultNodeDimension
        },
        Edge: {
            overridable: true,
            color: defaultLineColor,
            lineWidth: defaultLineWidth
        },
        // Add node events
        Events: {
            enable: true,
            type: 'Native',
            //Change cursor style when hovering a node
            onMouseEnter: function() {
                fd.canvas.getElement().style.cursor = 'move';
            },
            onMouseLeave: function() {
                fd.canvas.getElement().style.cursor = '';
            },
            //Update node positions when dragged
            onDragMove: function(node, eventInfo, e) {
                var pos = eventInfo.getPos();
                node.pos.setc(pos.x, pos.y);
                fd.plot();
            },
            //Implement the same handler for touchscreens
            onTouchMove: function(node, eventInfo, e) {
                $jit.util.event.stop(e); //stop default touchmove event
                this.onDragMove(node, eventInfo, e);
            }
        },

        onBeforeCompute: function(node){
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = nodeListLink + '<br/>' + workStreamLink;
        },

        //Number of iterations for the FD algorithm
        iterations: iterations,
        //Edge length
        levelDistance: levelDistance,
        // This method is only triggered
        // on label creation and only for DOM labels (not native canvas ones).
        onCreateLabel: function(domElement, node){
            // Create a 'name' and 'close' buttons and add them
            // to the main node label
            var nameContainer = document.createElement('span');
            nameContainer.className = 'name';
            nameContainer.innerHTML = node.name;
            domElement.appendChild(nameContainer);
            //Toggle a node selection when clicking
            //its name. This is done by animating some
            //node styles like its dimension and the color
            //and lineWidth of its adjacencies.
            nameContainer.onclick = function() {
                //set final styles
                fd.graph.eachNode(function(n) {
                    if(n.id != node.id) delete n.selected;
                    n.setData('dim', defaultNodeDimension, 'end');
                    n.eachAdjacency(function(adj) {
                        adj.setDataset('end', {
                            lineWidth: defaultLineWidth,
                            color: defaultLineColor
                        });
                    });
                });
                if(!node.selected) {
                    node.selected = true;
                    node.setData('dim', highlightNodeDimension, 'end');
                    node.eachAdjacency(function(adj) {
                        adj.setDataset('end', {
                            lineWidth: highlightLineWidth,
                            color: highlightLineColor
                        });
                    });
                } else {
                    delete node.selected;
                }
                //trigger animation to final styles
                fd.fx.animate({
                    modes: ['node-property:dim',
                    'edge-property:lineWidth:color'],
                    duration: lineHighlightFxSpeed
                });
                // Build the right column relations list.
                // This is done by traversing the clicked node connections.
                var html = "", list = [];
                if (typeof node.data != 'undefined' && typeof node.data.URL != 'undefined') {
                    html = '<div id="sitelink"><h4><a href="' + node.data.URL + '" target=_blank>' + node.name + '</a></h4></div>';
                } else {
                    html = "<h4>" + node.name + "</h4>"
                }
                html += "<h5>Connections:</h5><ul><li>";
                node.eachAdjacency(function(adj){
                    if(adj.getData('alpha')) list.push(adj.nodeTo.name);
                });
                //append connections information
                html += list.join("</li><li>") + "</li></ul>";
                if (typeof node.data != 'undefined' && typeof node.data.description != 'undefined') {
                    html += '<br/><div id="description">' + node.data.description + '</div>';
                }
                html += "<br/><br/>" + nodeListLink + '<br/>' + workStreamLink;
                $jit.id('inner-details').innerHTML = html;
            };
        },
        // Change node styles when DOM labels are placed
        // or moved.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            var left = parseInt(style.left);
            var top = parseInt(style.top);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
            style.top = (top + 8) + 'px';
            style.display = '';
        }
    });
    // load JSON data.
    fd.loadJSON(getJSONValues());
    // compute positions incrementally and animate.
    fd.computeIncremental({
        iter: iterations,
        property: 'end',
        onStep: function(perc){
        },
        onComplete: function(){
            fd.animate({
                modes: ['linear'],
                duration: initialFxSpeed
            });
        }
    });
// end
}