function getOpenshiftVersion(){
    var cluster_name = document.getElementById("clusternameopv").value;
    var api_key = document.getElementById("ibmcloudapikeyopv").value;
    console.log(cluster_name);
    console.log(api_key);
    var payload = {
        "apikey":cluster_name,
        "cluster_name":api_key
    }
    var xhr = new XMLHttpRequest(); 
    xhr.open("POST", "http://api.zero-to-cloud-native.com:8000/api/v1/getOCPVersions/");
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function() {
        console.log(this.responseText);
    }
}

function getOpenshiftToken(){
    var cluster_name = document.getElementById("clusternameopt").value;
    var api_key = document.getElementById("ibmcloudapikeyopt").value;
    console.log(cluster_name);
    console.log(api_key);
    var payload = {
        "apikey":cluster_name,
        "cluster_name":api_key
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://api.zero-to-cloud-native.com:8000/api/v1/getOCPToken/")
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function() {
        console.log(this.responseText);
    }
}

function enableSSH(){
    var cluster_name = document.getElementById("clusternamessh").value;
    var api_key = document.getElementById("ibmcloudapikeyssh").value;
    console.log(cluster_name);
    console.log(api_key);
    var payload = {
        "apikey":cluster_name,
        "cluster_name":api_key
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://api.zero-to-cloud-native.com:8000/api/v1/enableSSH/")
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function() {
        console.log(this.responseText);
    }
    
}