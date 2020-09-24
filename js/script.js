function getOpenshiftVersion(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("openshiftversion").innerHTML = "Status: " + myObj.Status + "\n\n" + myObj.Versions[0] + "\n" + myObj.Versions[1] + "\n" + myObj.Versions[2];
        }
    };
    xhr.open("GET", "https://api.zero-to-cloud-native.com:8000/api/v1/getOCPVersions/", true);
    xhr.send();
}

function getOpenshiftToken(){
    var cluster_name = document.getElementById("clusternameopt").value;
    var api_key = document.getElementById("ibmcloudapikeyopt").value;
    if (cluster_name.length == 0 && api_key.length == 0){
        alert("Please enter a valid cluster name and ibm cloud api key");
    }else if(cluster_name.length == 0){
        alert("Please enter a valid cluster name");
    }else if(api_key.length == 0){
        alert("Please enter a valid IBM Cloud API Key");
    }else{
        var payload = {
            "apikey":api_key,
            "cluster_name":cluster_name
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.zero-to-cloud-native.com:8000/api/v1/getOCPToken/");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() { 
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText)
                document.getElementById("openshifttoken").innerHTML = "Status: " + myObj.Status + "\n\n" + "Token: " + myObj.token + "\n\n" + "Login: " + myObj.login;
            }
        }
        xhr.send(JSON.stringify(payload));
    }
    
}

function enableSSH(){
    var cluster_name = document.getElementById("clusternamessh").value;
    var api_key = document.getElementById("ibmcloudapikeyssh").value;
    if (cluster_name.length == 0 && api_key.length == 0){
        alert("Please enter a valid cluster name and ibm cloud api key");
    }else if(cluster_name.length == 0){
        alert("Please enter a valid cluster name");
    }else if(api_key.length == 0){
        alert("Please enter a valid IBM Cloud API Key");
    }else{
        var payload = {
            "apikey":api_key,
            "cluster_name":cluster_name
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.zero-to-cloud-native.com:8000/api/v1/enableSSH/");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() { 
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText)
                document.getElementById("enablessh").innerHTML = "Status: " + myObj.Status + "\n\n" + "Check the kube-system of your cluster for Pods starting with inspectnode";
            }
        }
        xhr.send(JSON.stringify(payload));
    }
}



