var xhrFormData;
function startFormDataLoad() {
 xhrFormData = new XMLHttpRequest(); 
 var url = "http://developer.cege.ucl.ac.uk:"+httpPortNumber;
 url = url + "/getGeoJSON/formdata/geom/"+httpPortNumber;
 xhrFormData.open("GET", url, true);
 xhrFormData.onreadystatechange = formDataResponse;
 xhrFormData.send();