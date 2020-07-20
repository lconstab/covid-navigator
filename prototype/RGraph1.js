var labelType, useGradients, nativeTextSupport, animate, nodeListBrowserTitle, nodeListLinkText;
function getJSONValues() {
    var values = [];
    for (var i in json) values.push(json[i]);
    return values;
}

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

function init(){
    $jit.id('inner-details').innerHTML = nodeListLink + '<br/>' + workStreamLink;

    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'container',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
            CanvasStyles: {
                strokeStyle: backgroundCircleColor
            }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
            enable: true,
            panning: 'avoid nodes',
            zooming: zoomFxSpeed
        },
        //Set Node and Edge styles.
        Node: {
            overridable: true,
            color: defaultNodeColor,
            dim: defaultNodeDimension
        },

        Edge: {
            overridable: true,
            color: defaultLineColor,
            lineWidth: defaultLineWidth
        },

        iterations: 200,

        levelDistance: levelDistance,

        Events: {
            enable: true,
            type: 'Native',
            //Change cursor style when hovering a node
            onMouseEnter: function() {
                rgraph.canvas.getElement().style.cursor = 'move';
            },
            onMouseLeave: function() {
                rgraph.canvas.getElement().style.cursor = '';
            },
            //Update node positions when dragged
            onDragMove: function(node, eventInfo, e) {
                var pos = eventInfo.getPos();
                node.pos.setc(pos.x, pos.y);
                rgraph.plot();
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
            $jit.id('inner-details').innerHTML = 'loading...';
        },


        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            var nameContainer = document.createElement('span');
            nameContainer.className = 'name';
            if (typeof node.data != 'undefined' && typeof node.data.URL != 'undefined') {
                nameContainer.title += '<a href="' + node.data.URL + '" target=_blank>' + node.name + '</a><br/><br/>'
                nameContainer.className = 'name tt';
            }
            if (typeof node.data != 'undefined' && typeof node.data.description != 'undefined') {
                nameContainer.title += node.data.description;
                nameContainer.className = 'name tt';
            }
            nameContainer.innerHTML = node.name;
            domElement.appendChild(nameContainer);
            node.setData('dim', defaultNodeDimension);
            //            var wiggle = 0;
            node.eachAdjacency(function(a) {
                //                if (wiggle === 0) {
                //                    wiggle = 1;
                //                } else {
                //                    wiggle = 0;
                //                }
                if (a.nodeTo.endPos.getp().rho > 0) {
                    //var rhoDiff = a.nodeTo.endPos.getp().rho  + 20;
                    // console.log(a.nodeTo.name, wiggle, a.nodeTo.endPos.getp().rho, rhoDiff);
                    // a.nodeTo.endPos.rho = rhoDiff;
                    a.setDataset('end', {
                        lineWidth: defaultLineWidth,
                        color: defaultLineColor
                    });
                }
            });
            var obj = rgraph.getNodeAndParentAngle(node.id);
            //console.log(obj.parent);
            if (obj.parent) {
            // var thetaDiff = node.endPos.getp().theta * 1.01;
            //console.log(node.endPos.getp());
            // node.endPos.set(node.endPos.getp().add(new $jit.Polar(thetaDiff, 0)));
            }

            //Toggle a node selection when clicking
            //its name. This is done by animating some
            //node styles like its dimension and the color
            //and lineWidth of its adjacencies.
            nameContainer.onclick = function() {
                rgraph.onClick(node.id, {
                    hideLabels: true,
                    onComplete: function() {

                        //set final styles
                        rgraph.graph.eachNode(function(n) {
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
                        rgraph.fx.animate({
                            modes: [rgraph.config.interpolation,
                            'node-property:dim',
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
                    }
                });
            };



        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            if (typeof levelLabelThreshold === 'undefined'
                || levelLabelThreshold === 'all'
                || node._depth <= levelLabelThreshold) {

                var left = parseInt(style.left);
                var top = parseInt(style.top);
                var w = domElement.offsetWidth;
                style.left = (left - w / 2) + 'px';
                style.top = (top + 8) + 'px';
                style.display = '';
            } else {
                style.display = 'none';
            }
        }
    });
    //load JSON data
    rgraph.loadJSON(getJSONValues());
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
        var pos = n.getPos();
        pos.setc(-600, -600);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
        fps: renderFPS,
        modes:[rgraph.config.interpolation,
        'node-property:dim',
        'edge-property:lineWidth:color'],
        duration: initialFxSpeed,
        hideLabels: true,
        onComplete: function() {
            $(document).ready(function(){
                $("span.tt").tipTip({
                    maxWidth:'500px',
                    keepAlive: true
                });
            });
        }
    });
// end
}