function calc(a)
{
    if(a % 2 == 0){
       return a*a;
    }
    else {
       return a*a*a;
    }
}

function area(a,b,c) 
{
    return ((b+c)/2)*a
}

function create(x){
    var output = document.createElement("pre");
    output.textContent = x;
    document.body.appendChild(output);
}
create(calc(2));
create(area(10,6,10));

