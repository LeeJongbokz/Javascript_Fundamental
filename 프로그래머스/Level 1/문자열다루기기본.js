function solution(s) {
    var answer = true;
    
    var len = s.length;
    
    if(len == 4 || len == 6){
        var temp;
        
        for(var i=0; i<len; i++){
            temp = s.charCodeAt(i);
            
            if(48<=temp && temp<=57){
                continue;
            }else{
                answer = false;
                break;
            }
        }
    }else{
        answer = false;
    }
    
    return answer;
}
