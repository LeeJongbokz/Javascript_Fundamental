function solution(s, n) {
    var answer = '';
    
    for(var i=0; i<s.length; i++){
        var temp = s.charCodeAt(i);
        
        if(65<= temp && temp<=90){
            temp = temp+n;
            if(temp > 90){
                temp -= 26;
            }
        }else if(97<=temp && temp<=122){
            temp = temp+n;
            if(temp > 122){
                temp -= 26;
            }
        }
        
        answer += String.fromCharCode(temp); 
        
    }
    
    
    
    return answer;
}
