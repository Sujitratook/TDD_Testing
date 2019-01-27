console.log(greet(["Bob", "\"Charlie, Dianne\""]))
function greet(name) {
    if(name == null) { 
        return "Hello, my friend."
    }
    else if(Array.isArray(name)) {
        if(name.length > 2) {
            var showUpper
            var listwithOutUpper = name.filter(function(name) {
                if(name == name.toUpperCase()) {
                    showUpper = name
                }   
                return name != name.toUpperCase()
            }).join(" and ")

            if(showUpper != undefined) {
                return `Hello, ${listwithOutUpper}. AND HELLO ${showUpper}!`
            }
            else {
                var nmfirst = name.slice(0,2).join(", ")+","
                var nmlast = name.slice(2,3)

                return `Hello, ${nmfirst} and ${nmlast}.`
            }
        }
        else  {
            if(name.join(" ").includes("\"")) {
                var s = name.filter(name => name.includes(", "))+""
                var showText
                name.forEach(function cutInList(textName, index) {
                    if(s == textName) {
                        showText = name.splice(name[index],1)
                    }
                })
                return `Hello, ${showText} and ${s.replace(/['"]+/g,"")}.`
            }
            else if(name.join(" ").includes(", ")) {
                var s = name.filter(name => name.includes(", "))+""
                var showText
                name.forEach(function cutInList(textName, index) {
                    if(s == textName) {
                        showText = name.splice(name[index],1)
                    }
                })
                return `Hello, ${showText}, ${s.replace(",",", and")}.`
            }
            else {
                var nm = name.join(" and ")
                return `Hello, ${nm}.`
            }
        }
    }
    else if(name == name.toUpperCase()) {
        return `Hello, ${name}!`
    }
    return `Hello, ${name}.`
}

module.exports = greet
