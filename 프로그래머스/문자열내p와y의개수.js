function solution(s){
    var answer = true;
    
    var pnum = 0;
    var ynum = 0; 

    for(var i=0; i<s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            pnum += 1;
        }else if(s[i] == 'y' || s[i] == 'Y'){
            ynum += 1;
        }
    }
    
    if(pnum == ynum){
        answer = true;
    }else{
        answer = false;
    }

    return answer;
}
