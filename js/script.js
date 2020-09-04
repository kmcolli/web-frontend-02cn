function getOpenshiftVersion(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("openshiftversion").innerHTML = myObj.Versions[0] + "\n" + myObj.Versions[1] + "\n" + myObj.Versions[2]
        }
    };
    xhr.open("GET", "http://api.zero-to-cloud-native.com:8000/api/v1/getOCPVersions/", true);
    xhr.send();
}

function getOpenshiftToken(){
    var data = JSON.stringify({"apikey":"oczA9V8wyMWiOf_76F8_A_TVd6geW_wSs3HeKNH9d7gw","cluster_name":"zero-to-cloud-native"});
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("POST", "http://api.zero-to-cloud-native.com:8000/api/v1/getOCPToken/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function enableSSH(){
    var cluster_name = document.getElementById("clusternamessh").value;
    var api_key = document.getElementById("ibmcloudapikeyssh").value;
    var payload = {
        "apikey":cluster_name,
        "cluster_name":api_key
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://api.zero-to-cloud-native.com:8000/api/v1/enableSSH/", true)
    xhr.send(JSON.stringify(payload));
    
}