function solution(n) {
    var answer = 0;
    var cnt = 0; 
    
    var arr = []
    
    for(var i=0; i<=1000010; i++){
        arr.push(true)
    }
    
    for(var i=2; i<=1000000; i++){
        if(arr[i] == false){
            continue;
        }
        for(var j=i+i; j<=1000000; j+=i){
            if(arr[j] == true){
                arr[j] = false;
            }
        }
    }
    
    for(var i=2; i<=n; i++){
        if(arr[i] == true){
            cnt += 1;
        }
    }
    
    answer = cnt; 
    
    return answer;
}
