    function changeAbout() {
        var x = document.getElementById("changeDisplay");
        if (x.className !== "displayAbout"){
            x.className = "displayAbout";
        }
    }
    
    function changeWork() {
        var x = document.getElementById("changeDisplay");
        if (x.className !== "displayWork"){
            x.className = "displayWork";
        }
    }
    function changeSkill() {
        var x = document.getElementById("changeDisplay");
        if (x.className !== "displaySkill"){
            x.className = "displaySkill";
        }
    }
    function changeEducation() {
        var x = document.getElementById("changeDisplay");
        if (x.className !== "displayEducation"){
            x.className = "displayEducation";
        }
    }
    function dropdownMenu() {
        var x = document.getElementById("dropdownClick");
        if ( x.className === "nav") {
            x.className = "navResp";
        }
        else x.className = "nav";
    }