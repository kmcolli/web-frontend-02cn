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
    var cluster_name = document.getElementById("clusternameopt").value;
    var api_key = document.getElementById("ibmcloudapikeyopt").value;
    var payload = {
        "apikey":cluster_name,
        "cluster_name":api_key
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://api.zero-to-cloud-native.com:8000/api/v1/getOCPToken/");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() { 
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText)
            document.getElementById("openshifttoken").innerHTML = "Status: " + myObj.Status + "\n\n" + "Token: " + myObj.token + "\n\n" + "Login: " + myObj.login
        }
    }
    xhr.send(JSON.stringify(payload));
}

function enableSSH(){
    var cluster_name = document.getElementById("clusternamessh").value;
    var api_key = document.getElementById("ibmcloudapikeyssh").value;
    var payload = {
        "apikey":cluster_name,
        "cluster_name":api_key
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://api.zero-to-cloud-native.com:8000/api/v1/enableSSH/");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() { 
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText)
            document.getElementById("enablessh").innerHTML = myObj.Status + "\n" + "Check the kube-system of your cluster for Pods starting with inspectnode"
        }
    }
    xhr.send(JSON.stringify(payload));
}