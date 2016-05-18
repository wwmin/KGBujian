define([
    "dojo/_base/declare",

    "esri/graphic",

    "dojox/charting/Chart2D",
    "dojox/charting/themes/PlotKit/blue",
    "dojox/charting/action2d/Highlight",
    "dojox/charting/action2d/Tooltip",
    "dojox/charting/action2d/MoveSlice",
    "dojox/charting/widget/Legend"
], function (
        declare,

        Graphic,

        Chart2D,
        theme,
        Highlight,
        Tooltip,
        MoveSlice,
        Legend
    ){
    return declare([Graphic], {
        constructor: function(options) {
            this._map = options.map;
            this.id = options.id;
            this._series = options.series || [];
            this.size = options.size || 50;
            this._type = options.type || "Pie";
            this.parentDiv = "";
            this.bindGraphic = options.bindGraphic || null;
        },
        // 重构esri/graphic方法
        _getMap: function() {
            var gl = this._graphicsLayer;
            return gl._map;
        },
        _show:function(){
            if (this.parentDiv) {
                dojo.style(this.parentDiv, "display", "");
            }
        },
        _hide:function(){
            if (this.parentDiv) {
                dojo.style(this.parentDiv, "display", "none");
            }
        },
        _draw:function(divContainer){
            var map = this._map;
            var graphic = this.bindGraphic;
            var type = this._type;
            var series = this._series;
            var id = this.id;

            var _chart = new Chart2D(divContainer);
            var _themes = dojox.charting.themes.PlotKit.blue;
            _themes.chart.fill = "transparent";
            _themes.chart.stroke = "transparent";
            _themes.plotarea.fill = "transparent";
            _chart.setTheme(_themes);
            switch(type){
                case "Pie":{//饼状图
                    _chart.addPlot("default", {
                        type: type,
                        labels:false,
                        maxPieSize:80
                    });
                    break;
                }
                case "StackedColumns":{//柱状堆积图
                    _chart.addPlot("default", {
                        type: type,
                        labels:false,
                        markers: true,
                        gap: 2
                    });
                    break;
                }
                case "Lines":{//柱状堆积图
                    _chart.addPlot("default", {
                        type: type,
                        labels:false,
                        markers: true,
                        radius: 1,
                        tension:"X"
                    });
                    break;
                }
                default:{//柱状图
                    _chart.addPlot("default", {
                        type: type,
                        labels:false,
                        gap: 3
                    });
                    chart.addAxis("y", { vertical:true, fixLower: "major", fixUpper: "major" });
                    break;
                }
            }
            _chart.addSeries(this.id, series,{stroke: {width:1}});
            //效果
            new Highlight(_chart, "default", {highlight: "lightskyblue"});
//            new Tooltip(_chart, "default");
//            new MoveSlice(_chart, "default");
            //添加plot的事件
            _chart.connectToPlot("default", divContainer,function(args){
                switch(args.type){
                    case "onclick":{
                        map.graphics.clear();
                        var _gExtent = graphic.geometry.getExtent();
                        var _gCenter = _gExtent.getCenter();
                        var _title = graphic.attributes.COUNNAME;

                        var _content = dojo.doc.createElement("div"),
                            _detail = dojo.doc.createElement("div"),
                            _legend = dojo.doc.createElement("div");

                        dojo.style(_detail, {
                            "width": "300px",
                            "height": "300px"
                        });
                        _content.appendChild(_detail)
                            .appendChild(_legend);

                        map.infoWindow.setTitle(_title);
                        map.infoWindow.setContent(_content);

                        var _detailedChart = new Chart2D(_detail,{
                            title: "人口比例图",
                            titlePos: "top",
                            titleGap: 25,
                            titleFont: "normal normal bold 11pt Tahoma",
                            titleFontColor: "orange"
                        });
                        _detailedChart.setTheme(_themes);
                        switch(type){
                            case "Pie":{//饼状图
                                _detailedChart.addPlot("default", {
                                    type: type,
                                    labels:true,
                                    font: "normal normal bold 10pt Tahoma",
                                    fontColor: "white",
                                    labelOffset: 50
                                });
                                break;
                            }
                            case "StackedColumns":{//柱状堆积图
                                _detailedChart.addPlot("default", {
                                    type: type,
                                    labels:true,
                                    markers: true,
                                    gap: 2
                                });
                                break;
                            }
                            case "Lines":{//柱状堆积图
                                _detailedChart.addPlot("default", {
                                    type: type,
                                    labels:true,
                                    markers: true,
                                    radius: 1,
                                    tension:"X"
                                });
                                break;
                            }
                            default:{//柱状图
                                _detailedChart.addPlot("default", {
                                    type: type,
                                    labels:true,
                                    gap: 3
                                });
                                chart.addAxis("y", { vertical:true, fixLower: "major", fixUpper: "major" });
                                break;
                            }
                        }
                        _detailedChart.addSeries(id, series,{stroke: {width:1}});
                        //效果
                        new Highlight(_detailedChart, "default", {highlight: "lightskyblue"});
                        new Tooltip(_detailedChart, "default");
                        _detailedChart.render();
//                        new Legend({chart: _detailedChart}, _legend);
                        map.infoWindow.resize(330,300);
                        map.infoWindow.show(_gCenter);

                        map.setExtent(_gExtent.expand(2));
                        var _highSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                            new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                                new esri.Color([0, 255, 255]),
                                3
                            ),
                            new esri.Color([100, 100, 100, 0])
                        );;
                        map.graphics.add(new Graphic(graphic.geometry,_highSymbol));
                        break;
                    }
                    case "onmouseover":{
                        /*var shape = args.shape;
                        console.log(shape);
                        break;*/
                    }
                    case "onmouseout":{
                        //TODO...
                        break;
                    }
                    default:{
                        //TODO...
                        break;
                    }
                }
            });
            _chart.render();
            this.chart=_chart;
        }
    });
});