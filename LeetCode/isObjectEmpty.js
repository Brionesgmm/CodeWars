// answer
var isEmpty = function(obj) {
    if(obj.length > 0 || Object.keys(obj).length > 0){
        return false
    }else {
        return true
    }
};