function solution(num) {
    var answer = 0;
    
    var cnt = 0; 
    
    while(1){
        
        if(num == 1){
            break;
        }
        if(cnt == 501){
            break;
        }
        
        if(num % 2 == 0){
            num /= 2;
        }else if(num % 2 == 1){
            num = num*3+1;
        }
        
        cnt += 1;
    }
    
    if(cnt == 501){
        answer = -1;
    }else{
        answer = cnt; 
    }
    
    return answer;
}
