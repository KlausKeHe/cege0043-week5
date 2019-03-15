var xhrFormData;
function startFormDataLoad() {
 xhrFormData = new XMLHttpRequest(); 
 var url = "http://developer.cege.ucl.ac.uk:"+httpPortNumber;
 url = url + "/getGeoJSON/formdata/geom/"+httpPortNumber;
 xhrFormData.open("GET", url, true);
 xhrFormData.onreadystatechange = formDataResponse;
 xhrFormData.send();
 
 function formDataResponse(){
	 
	 if (xhrFormData.readyState == 4) {
 // once the data is ready, process the data
 var formData = xhrFormData.responseText;
 loadFormData(formData);
 }
}

// keep the layer global so that we can automatically pop up a
// pop-up menu on a point if necessary 7 of 9
// we can also use this to determine distance for the proximity alert

var formLayer;
function loadFormData(formData) {
	
	// convert the text received from the server to JSON
 var formJSON = JSON.parse(formData);
 
 // load the geoJSON layer
 formLayer = L.geoJson(formJSON,