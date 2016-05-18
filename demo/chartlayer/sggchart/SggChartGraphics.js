dojo.provide("sggchart.SggChartGraphics");
dojo.require("dojox.charting.Chart");
dojo.require("dojox.charting.plot2d.Pie");
dojo.require("dojox.charting.themes.Claro");
dojo.require("dojox.charting.themes.PlotKit.blue");
dojo.require("dojox.charting.themes.Tufte");
dojo.require("dojox.charting.themes.CubanShirts");
dojo.require("dojox.charting.action2d.MoveSlice");
dojo.require("dojox.charting.action2d.Tooltip");
dojo.require("dojox.charting.widget.Legend");

dojo.declare("sggchart.SggChartGraphics", esri.Graphic, {
	bindGraphic: null,
	parentDiv: null,
	series: null,
	id: null,
	divHeight: null,
	divWidth: null,
	map: null,
    chartType:"pie",
    setParentDid: function(parentDiv) {
        this.parentDiv  = parentDiv;
	},
    setId: function(id) {
		this.id = id;
	},
	setSeries: function(series) {
		this.series = series;
	},
	setDivHeight: function(height) {
		this.divHeight = height;
	},
	setDivWidth: function(width) {
		this.divWidth = width;
	},
    setChartType: function(chartType) {
        this.chartType = chartType;
    },
    getChartType: function() {
        return this.chartType;
    },
	getDivHeight: function() {
		return this.divHeight;
	},
	getDivWidth: function() {
		return this.divWidth;
	},
	getSeries: function() {
		return this.series;
	},
	getId: function() {
		return this.id;
	},
    getParentDid: function() {
        return this.parentDiv;
    },
	hide: function() {
		if (this.parentDiv) {
			dojo.style(this.parentDiv, "display", "none");
		}
	},
	show: function() {
		if (this.parentDiv) {
			dojo.style(this.parentDiv, "display", "");
		}
	},
	_getMap: function() {
		var gl = this._graphicsLayer;
		return gl._map;
	}
});
dojo.declare("sggchart.SggPieChart", sggchart.SggChartGraphics, {
	constructor: function(graphic) {
		dojo.mixin(this, {
			bindGraphic: graphic
		});
	},

	_draw: function(divContainer) {
		var _chart = new dojox.charting.Chart(divContainer);
		var r=20;
		var themes=dojox.charting.themes.PlotKit.blue;
        themes.chart.fill = "transparent";
        themes.chart.stroke = "transparent";
        themes.plotarea.fill = "transparent";
		_chart.setTheme(themes).
		addPlot("default", {
			type: this.getChartType(),
            labels:false
//			radius: r
		}).
		addSeries(this.getId(), this.getSeries());

		new dojox.charting.action2d.Tooltip(_chart, "default");
//		new dojox.charting.action2d.MoveSlice(_chart, "default");

        //添加plot的事件
        /*_chart.connectToPlot("default", divContainer,function(args){
            switch(args.type){
                case "onclick":{
                    if(args.index == 1){
                        var shape = args.shape;
                         var data = chartData[args.index];
                         console.log(shape);
                         console.log(data);
                    }
                    break;
                }
                case "onmouseover":{
                    var shape = args.shape;
                     console.log(shape);
                     break;
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
        });*/

		_chart.render();
		this.chart = _chart;
	}
});