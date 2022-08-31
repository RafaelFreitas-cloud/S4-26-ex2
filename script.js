function solution(a, b){
    if (a.length>b.length){
        return b+a+b
    }else if(a.length<b.length){
        return a+b+a
    }else{
        return "Entrada inválida"
    }


}
console.log(solution("lombael","rafael"))
console.log(solution("lombael","rafael"))
console.log(solution("lomba","hasso"))
