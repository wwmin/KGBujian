dojo.provide("sggchart.SggChartLayer");
dojo.require("dojox.gfx");
dojo.require("esri.geometry");
dojo.require("esri.geometry.Point");
dojo.require("dojo.Stateful");

dojo.declare("sggchart.SggChartLayer", esri.layers.GraphicsLayer, {
    divid: null,
    bindGraphicLayer: null,
    constructor: function(params) {
        dojo.mixin(this, params);
    },
    setDivId: function(id) {
        this.divid = id;
    },
    hide: function() {
        var length = this.graphics.length;
        var thisgraphics = this.graphics;
        for (var i = 0; i < length; i++) {
            if (thisgraphics[i].parentDiv) {
                dojo.style(thisgraphics[i].parentDiv, {
                    "display": "none"
                });
            }
        }
    },
    show: function() {
        var length = this.graphics.length;
        var thisgraphics = this.graphics;
        for (var i = 0; i < length; i++) {
            if (thisgraphics[i].parentDiv) {
                dojo.style(thisgraphics[i].parentDiv, {
                    "display": "block"
                });
            }
        }
    },
    //拖拽
    _onPanStartHandler: function() {
        this.hide();
    },
    _onPanEndHandler: function() {
        this._refresh(false,false);
    },
    //缩放
    _onZoomStartHandler:function(){
        this.hide();
    },
    _onZoomEndHandler:function(anchor, extent, level, zoomFactor){
        this._refresh(true, true);
    },
    _onExtentChangeHandler: function(delta, extent, levelChange, lod) {
        if (levelChange) {
            this._refresh(true, levelChange);
        }
    },
    _refresh: function(redrawFlag, zoomFlag) {
        var that=this;
        var gs = this.graphics,
            _draw = this._draw;

        if (!redrawFlag) {
            dojo.connect(this.bindGraphicLayer, "onUpdate", dojo.hitch(that,function() {
                for (i = 0; i < gs.length; i++) {
                    _draw(gs[i], redrawFlag, zoomFlag);
                }
                this.show();
            }));

        }
        else {
            dojo.connect(this.bindGraphicLayer, "onUpdate", dojo.hitch(that,function() {
                for (i = 0; i < gs.length; i++) {
                    _draw(gs[i], redrawFlag, zoomFlag);
                }
                this.show();
            }));
        }
    },
    _draw: function(graphic, redraw, zoomFlag) {
        if (!this._map) {
            return;
        }
        if (graphic instanceof sggchart.SggPieChart) {
            this._drawChart(graphic, redraw, zoomFlag);
        }
    },

    _drawChart: function(piegraphic, redraw, zoomFlag) {
        if (!piegraphic.bindGraphic.graphic) {
            return;
        }
        if (zoomFlag) {
            dojo.byId(this.divid).removeChild(piegraphic.parentDiv);
        }
        console.log(piegraphic.bindGraphic);
        //多边形的几何中心
        if (piegraphic.bindGraphic.graphic.visible && piegraphic.bindGraphic.graphic._extent ){
            var pieGraphicExtent = piegraphic.bindGraphic.graphic.geometry.getExtent();
            var _bindGraphicCenter = map.toScreen(pieGraphicExtent.getCenter());

            /*//1.固定大小
            var pieDivWH = 50;*/
            //2.根据geometry的高宽
            var minPt = new esri.geometry.Point(pieGraphicExtent.xmin, pieGraphicExtent.ymin, map.spatialReference);
            var maxPt = new esri.geometry.Point(pieGraphicExtent.xmax, pieGraphicExtent.ymax, map.spatialReference);
            var scrMinPt = map.toScreen(minPt), scrMaxPt = map.toScreen(maxPt);
            var gWidth = Math.abs((scrMaxPt.x-scrMinPt.x))/3, gHeight =Math.abs((scrMinPt.y-scrMaxPt.y))/3;
            var pieDivWH = gWidth < gHeight ? gWidth : gHeight;//取最小的
            /*//3.随着缩放级别变化
            var _mapLevel = map.getLevel();
            var pieDivWH = 30*_mapLevel-40;*/


            if (!piegraphic.parentDiv || zoomFlag) {
                var piediv = dojo.doc.createElement("div");
                dojo.style(piediv, {
                    "left": _bindGraphicCenter.x + "px",
                    "top": _bindGraphicCenter.y + "px",
                    "position": "absolute",
                    "width": pieDivWH + "px",
                    "height": pieDivWH + "px"
                });
                dojo.byId(this.divid).appendChild(piediv);
                piegraphic._draw(piediv);
                piegraphic.parentDiv = piediv;
            }
        }
        else {
            dojo.byId(this.divid).removeChild(piegraphic.parentDiv);
            piegraphic.parentDiv = null;
        }
    }
});