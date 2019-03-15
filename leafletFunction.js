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
 {
 // use point to layer to create the points
 pointToLayer: function (feature, latlng)
 {
 // in this case, we build an HTML DIV string
 // using the values in the data
 var htmlString = "<DIV id='popup'"+ feature.properties.id + "><h2>" +
feature.properties.name + "</h2><br>";
htmlString = htmlString + "<h3>"+feature.properties.surname +
"</h3><br>";
 htmlString = htmlString + "<input type='radio' name='answer' id
='"+feature.properties.id+"_1'/>"+feature.properties.module+"<br>";
htmlString = htmlString + "<input type='radio' name='answer' id
='"+feature.properties.id+"_2'/>"+feature.properties.language+"<br>";
 htmlString = htmlString + "<input type='radio' name='answer' id
='"+feature.properties.id+"_3'/>"+feature.properties.lecturetime+"<br>";