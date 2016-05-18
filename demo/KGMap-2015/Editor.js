require(["dojo/dom","esri/Color","dojo/parser",  "esri/config","esri/sniff","dojo/_base/array", "dijit/registry", "dojo/query",
    "esri/map", "esri/SnappingManager","esri/dijit/Measurement","esri/renderers/SimpleRenderer","esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol","esri/dijit/editing/Editor", "esri/dijit/Print","esri/dijit/AttributeInspector",
    "esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/FeatureLayer","esri/tasks/GeometryService","esri/units",
    "dijit/form/CheckBox", "dojo/keys", "dijit/ToolbarSeparator","esri/dijit/HomeButton","esri/dijit/LocateButton", "esri/dijit/OverviewMap",
    "esri/dijit/Scalebar","dijit/TitlePane",
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"],
    function (dom,Color,parser,esriConfig,has, array, registry, query,
        Map,SnappingManager,Measurement,SimpleRenderer,SimpleLineSymbol,
              SimpleFillSymbol, Editor,Print, AttributeInspector, ArcGISTiledMapServiceLayer,
              FeatureLayer,GeometryService,Units, CheckBox, keys, ToolbarSeparator, HomeButton, LocateButton, OverviewMap,Scalebar) {
        parser.parse();
        var map = new Map("map", {
            //center: [-117.535, 34.28],
            zoom: 3,
            maxZoom:10, //最大缩放层级
            minZoom:2,//最小缩放层级
            logo: false
        });
        var home = new HomeButton({
            map: map
        }, "HomeButton");
        home.startup();

        //定位
        geoLocate = new LocateButton({
            map: map
        }, "LocateButton");
        geoLocate.startup();

        var overviewMapDijit = new OverviewMap({
            map: map,  //必要的
            attachTo: "bottom-right", //放置位置
            color: "#D84E13", //设置颜色
            opacity: .40,  //透明度
            visible: true,  //初始化可见
            width: 250,  //默认值是地图高度的 1/4th
            height: 210,  // 默认值是地图高度的 1/4th
            //maximizeButton:true,   // 最大化,最小化按钮，默认false
            expandFactor: 1.5 //概览地图和总览图上显示的程度矩形的大小之间的比例。默认值是2，这意味着概览地图将至少是两倍的大小的程度矩形。
        });
        overviewMapDijit.startup();

        var scalebar = new Scalebar({
            map: map,
            // "dual" displays both miles and kilmometers
            // "english" is the default, which displays miles
            // use "metric" for kilometers
            scalebarUnit: "metric",
            attachTo: "bottom-left",
        });
/*        //打印功能模块
        var printer = new Print({
            map: map,
            url: "http://60.29.110.104:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export Web Map Task"
        }, dom.byId("printButton"));
        printer.startup();*/

        //var topo = new ArcGISTiledMapServiceLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer");
        var topo = new ArcGISTiledMapServiceLayer("http://60.29.110.104:6080/arcgis/rest/services/外业点位图map20151207/MapServer");
        map.addLayer(topo);

        map.on("layers-add-result", initEditor);

        //var baseUrl = "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/";
        var baseUrl = "http://60.29.110.104:6080/arcgis/rest/services/FeatureMap20151208/FeatureServer/"; //此图层只有0层
        var pointsOfInterest = new FeatureLayer(baseUrl + "0", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*']
        });
        var WildfireLine = new FeatureLayer(baseUrl + "1", {
            mode: FeatureLayer.MODE_ONDEMAND, 
            outFields: ['*']
        });
        var evacuationPerimeter = new FeatureLayer(baseUrl + "2", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*']
        });

        //map.addLayers([pointsOfInterest, WildfireLine, evacuationPerimeter]);
        map.addLayers([pointsOfInterest,WildfireLine, evacuationPerimeter]);
        var sfs = new SimpleFillSymbol(
            "solid",
            new SimpleLineSymbol("solid", new Color([195, 176, 23]), 2),
            null
        );

        //MeasureWidget
        esriConfig.defaults.io.proxyUrl = "proxy.ashx";
        esriConfig.defaults.io.alwaysUseProxy = false;
        esriConfig.defaults.geometryService = new GeometryService("http://60.29.110.104:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");

        var parcelsLayer = new FeatureLayer("http://60.29.110.104:6080/arcgis/rest/services/FeatureMap20151208/FeatureServer/0", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ["*"]
        });
        parcelsLayer.setRenderer(new SimpleRenderer(sfs));
        map.addLayers([parcelsLayer]);
        //dojo.keys.copyKey maps to CTRL on windows and Cmd on Mac., but has wrong code for Chrome on Mac
        var snapManager = map.enableSnapping({
            snapKey: has("mac") ? keys.META : keys.CTRL
        });
        var layerInfos = [{
            layer: parcelsLayer
        }];
        snapManager.setLayerInfos(layerInfos);

        var measurement = new Measurement({
            map: map,
            defaultPositionUnit:Units.METERS,
            defaultAreaUnit: Units.SQUARE_METERS,
            defaultLengthUnit: Units.METERS
        }, dom.byId("measurementDiv"));
        measurement.startup();
        //MeasureWidget End
        // close the info window when esc is pressed
        map.on("key-down", function (e) {
            if (e.keyCode === 27) {
                //measurement.clearResult();
                //measurement.destroy();
                //measurement.startup();
            }
        });

        function initEditor(evt) {

            //build the layer and field information for the layer, display the description field
            //using a text area.
            var layers = array.map(evt.layers, function (result) {
                var fieldInfos = array.map(result.layer.fields, function (field) {
                    if (field.name === 'description') {
                        return {
                            'fieldName': field.name,
                            'label': 'Details',
                            stringFieldOption: AttributeInspector.STRING_FIELD_OPTION_TEXTAREA
                        }
                    }
                    else {
                        return { 'fieldName': field.name, 'lable': field.alias }
                    }
                });
                return { featureLayer: result.layer, 'fieldInfos': fieldInfos }
            });

            var settings = {
                map: map,
                enableUndoRedo: true,
                layerInfos: layers,
                toolbarVisible: true,
                createOptions: {
                    polygonDrawTools: [
                      Editor.CREATE_TOOL_FREEHAND_POLYGON,
                      Editor.CREATE_TOOL_AUTOCOMPLETE
                    ]
                },
                toolbarOptions: {
                    reshapeVisible: true,
                    cutVisible: true,
                    mergeVisible: true
                }
            };
            var params = { settings: settings };

            editorWidget = new Editor(params, 'editorDiv');

            //Dojo.keys.copyKey maps to CTRL in Windows and CMD in Mac
            map.enableSnapping({ snapKey: keys.copyKey });

            //create a new checkbox to enable/disable snapping
            var checkBox = new CheckBox({
                name: "chkSnapping",
                checked: true,
                id: "chkSnapping",
                label: "Snapping",
                showLabel: "false",
                title: "捕捉",
                onChange: function (evt) {
                    if (this.checked) {
                        map.enableSnapping({ snapKey: keys.copyKey });
                    } else {
                        map.disableSnapping();
                    }
                }
            });


            //add the snapping checkbox to the editor's toolbar 
            var myToolbarElement = query(".esriDrawingToolbar", editorWidget.domNode)[0];
            //var myToolbar = registry.byId(myToolbarElement.id);
            var myToolbar = dom.byId(myToolbarElement.id);

            myToolbar.addChild(new ToolbarSeparator());
            myToolbar.addChild(checkBox);

            editorWidget.startup();

            //listen for the template pickers onSelectionChange and disable
            //the snapping checkbox when a template is selected
            var templatePickerElement = query(".esriTemplatePicker", editorWidget.domNode)[0];
            //var templatePicker = registry.byId(templatePickerElement.id);
            var templatePicker = dom.byId(templatePickerElement.id);
            templatePicker.on("selection-change", function () {
                if (templatePicker.getSelected()) {
                    dom.byId('chkSnapping').set("disabled", true);
                } else {
                    dom.byId('chkSnapping').set("disabled", false);
                }
            });
            map.infoWindow.resize(325, 200);
        }
});