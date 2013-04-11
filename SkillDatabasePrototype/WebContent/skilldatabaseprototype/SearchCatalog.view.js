sap.ui.jsview("skilldatabaseprototype.SearchCatalog", {

      getControllerName : function() {
         return "skilldatabaseprototype.SearchCatalog";
      },

      createContent : function(oController) {
    	  var skillData={
          products: [
                     {text:"Applic Interface Framework", key:"1"},
                     {text:"CMA Tools", key:"2"},
                     {text:"Duet ENT 1.0 Adapter FP", key:"3"},
                     {text:"SAP Adapter for Quality Center", key:"4"},
                     {text:"SAP Apparel and Footwear", key:"5"},
                     {text:"SAP Core CEE", key:"6"}
                   ],
                   versions: [
                     {text:"Applic Interface Framework 1.0", key:"1"},
                     {text:"CMA Tools 3.0", key:"2"},
                     {text:"Duet ENT 1.0 Adapter FP1", key:"3"},
                     {text:"SAP Adapter for Quality Center 1.0", key:"4"},
                     {text:"SAP Apparel and Footwear 6.4", key:"5"},
                     {text:"SAP Core CEE 110_604", key:"6"} 
                   ],
                   status: [
                     {text:"Error", key:"1"},
                     {text:"Warning", key:"2"},
                     {text:"OK", key:"3"}
                                 
                   ]
                 };
           		var filterCountries = function(sPrefix){
           	var aResult = [];
           			
           			aResult.push("--------- PRODUCTS ---------");
           	for(var i=0; i<myData.products.length; i++){
           		if(!sPrefix || sPrefix.length == 0 || myData.products[i].text.indexOf(sPrefix)>=0){
           			aResult.push(myData.products[i].text);
           		}
           	}
           			aResult.push("--------- VERSIONS ---------");
           		for(var i=0; i<myData.versions.length; i++){
           		if(!sPrefix || sPrefix.length == 0 || myData.versions[i].text.indexOf(sPrefix)>=0){
           			aResult.push(myData.versions[i].text);
           		}
           	}
           			aResult.push("--------- STATUS ---------");
           		for(var i=0; i<myData.status.length; i++){
           		if(!sPrefix || sPrefix.length == 0 || myData.status[i].text.indexOf(sPrefix)>=0){
           			aResult.push(myData.status[i].text);
           		}
           	}
           			
           	return aResult;
           };
         
      }

});
