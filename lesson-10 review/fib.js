var output=[];

function fibonacciGenerator (n) {
    
     if (n==1){
        output.push(0);
     }

    else if(n==2){
       output.push(0);
       output.push(1);
    }

    else {
      output=[0,1]
      while (output.length<n){
      output.push(output[output.length-1]+output[output.length-2])
    }
    }
    console.log(output);
}

output=fibonacciGenerator(10);


