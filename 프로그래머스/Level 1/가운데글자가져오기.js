function solution(s) {
    var answer = '';
    
    var len = s.length;
    
    if(len % 2 === 1){
        answer += s[(len/2)-0.5];
    }else{
        answer += s[(len/2)-1];
        answer += s[(len/2)];
    }
    
    
    return answer;
}
