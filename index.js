class Formatter {
  //add static methods here
  static capitalize(str) { 
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) { 
    let regex = /[^\w\s\'\-]/g
    return str.replace(regex, '')
   }

  static titleize(str) { 
    let noCapital = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let strArray = str.split(" ");
    strArray[0] = this.capitalize(strArray[0])

    let newStr = strArray.map(e => {
      if (!noCapital.includes(e)) {
        return this.capitalize(e)
      } else {
        return e
      }
    })

    return newStr.join(" ")
  }

}