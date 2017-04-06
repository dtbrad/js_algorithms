var fibonacci_looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

var fibonacci_recursive = (n) => {
  if(n<=2) {
    return 1;
  }
  else {
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2);
  }
}
