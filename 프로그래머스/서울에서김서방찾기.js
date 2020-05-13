function solution(seoul) {
    var answer = '';
    
    var pos = 0;
    
    for(var i=0; i<seoul.length; i++){
        if(seoul[i] == "Kim"){
            pos = i;
            break;
        }
    }
    
    answer = "김서방은 " + pos + "에 있다";
    
    return answer;
}
