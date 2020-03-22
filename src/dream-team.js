module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; 
    /*1 вар
    return members.map((element) => {
      if (typeof element === 'string') {
        return element.trim()[0].toUpperCase();}
    }).sort().join(''); 
    */

    /*2вар*/
    let teamArr = [];    
    for (let i=0; i<members.length; i++) {
      if (typeof(members[i]) === "string") {
        teamArr[i] = members[i].trim()[0].slice(0,1).toUpperCase();
      } 
    }
    let sortTeamArr = teamArr.sort();
    let resultTeamArr = [];
    let stringEncryp = new String();
    for (let j = 0; j < sortTeamArr.length; j++) {    
      if (!sortTeamArr[j]=='') {
        resultTeamArr[j] = sortTeamArr[j];      
      }
    } 
    return stringEncryp = resultTeamArr.join('');
};