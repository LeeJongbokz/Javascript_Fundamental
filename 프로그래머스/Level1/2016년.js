function solution(a, b) {
    var answer = '';
    
    var list = [31, 29 ,31, 30, 31 ,30, 31,31, 30, 31, 30, 31];
    var sum = 0; 
    
    for(var i=1; i<a; i++){
        sum += list[i-1];
    }
    
    sum += (b-1);
    
    sum %= 7;
    
    if(sum == 0){
        answer += "FRI";
    }else if(sum == 1){
        answer += "SAT";
    }else if(sum == 2){
        answer += "SUN";
    }else if(sum == 3){
        answer += "MON";
    }else if(sum == 4){
        answer += "TUE";
    }else if(sum == 5){
        answer += "WED";
    }else if(sum == 6){
        answer += "THU";
    }
    
    
    return answer;
}
