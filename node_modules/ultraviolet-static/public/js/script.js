const setObj = function(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function(key) {
    return JSON.parse(localStorage.getItem(key))
}

function loadcustomapp() {
    if (!getObj("customapps")) {
        setObj("customapps", [])
    }
    var customapps = getObj("customapps")
    var name = prompt("What should this app be named? (required)")
    var url = prompt("What's this app's url? (required)")
    var id = prompt("What's this app's ID? \n\nAn app ID is a unique identifier for the app so we can load it (ex: \"google\", or \"vscode\")\n(required)")
    var icon = prompt("What's this app's icon? (optional)")
    var description = prompt("What's this app's description? (optional)")

    if (!name || !url || !id) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("App name is too long (max 30 characters)")

    if (id.includes(" ")) return alert("App id cannot contain spaces")
    
    apps.forEach(app => {
        if (app.id == id) localStorage.setItem("conflict", true);
    })

    if (localStorage.getItem("conflict")) {
        console.log("uhoh something went wrong!!")
        localStorage.removeItem("conflict")
        return;
    } else {
        console.log("everything is good!!")
        localStorage.removeItem("conflict")
    }

    customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${id}", "image": "${icon}", "description": "${description}" }`))
    setObj("customapps", customapps)
    console.log("added custom app!1!!!11!")
    window.location.href = self.location
    
    
    
    
}

function loadcustomgame() {
    if (!getObj("customgames")) {
        setObj("customgames", [])
    }
    var customgames = getObj("customgames")
    var name = prompt("What should this game be named? (required)")
    var url = prompt("What's this game's url? (required)")
    var id = prompt("What's this game's ID?")
    var icon = prompt("What's this game's icon? (optional)")
    var description = prompt("What's this game's description? (optional)")

    if (!name || !url || !id) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("Game name is too long (max 30 characters)")

    if (id.includes(" ")) return alert("Game id cannot contain spaces")
    
    games.forEach(game => {
        if (game.id == id) localStorage.setItem("conflict", true);
    })

    if (localStorage.getItem("conflict")) {
        console.log("uhoh something went wrong!!")
        localStorage.removeItem("conflict")
        return;
    } else {
        console.log("everything is good!!")
        localStorage.removeItem("conflict")
    }

    customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${id}", "image": "${icon}", "description": "${description}" }`))
    setObj("customgames", customgames)
    console.log("added custom game'!1!!!11!")
    window.location.href = self.location
    
    
    
    
}

function debug() {
    console.log(getObj("customapps"))
}

function clearcustomapps() {
    setObj("customapps", [])
    console.log("Removed all custom apps!")
}

function clearcustomgames() {
    setObj("customgames", [])
    console.log("Removed all custom games!")
}

// https://www.google.com/search?q=
function search(input, template) {
    try {
      // input is a valid URL:
      // eg: https://example.com, https://example.com/test?q=param
      return new URL(input).toString();
    } catch (err) {
      // input was not a valid URL
    }
  
    try {
      // input is a valid URL when http:// is added to the start:
      // eg: example.com, https://example.com/test?q=param
      const url = new URL(`http://${input}`);
      // only if the hostname has a TLD/subdomain
      if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
      // input was not valid URL
    }
  
    // input may have been a valid URL, however the hostname was invalid
  
    // Attempts to convert the input to a fully qualified URL have failed
    // Treat the input as a search query
    return `https://www.google.com/search?q=${encodeURIComponent(input)}`
  }