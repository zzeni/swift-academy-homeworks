function calc(x){
    return (x % 2 === 1) ? console.log("odd"):console.log("even");
    }
/* --------------- */
let list = ['Ivan','Pesho','Mimi'],
     name = 'Pesho',
     counter = 0 ;

function isMember(list,name){
    for(let i = 0 ; i<list.length; i++){
            (list[i] === name) ? counter-- : counter++;continue;   
        }
       return (counter < list.length) ? console.log("yes"):console.log("no");
        }
/* ----------------- */

    function sum(numbers){
        //let numbers = [1,2,3,4,5,6,7,8],
        sumEven = 0,
        sumOdd = 0;
    for(let item of numbers){
        if(item % 2 ===1){
            sumOdd = sumOdd + item;
        }else{
            sumEven = sumEven + item;
        }
    }
    return (sumEven + " sum of even numbers. " + (sumOdd + " sum of odd numbers")) ;
    }
    
/*-----*/
function create(x){
    var output = document.createElement("pre");
    output.textContent = x;
    document.body.appendChild(output);
}

create(isMember(list,name));
create(sum([1,2,3,4,5,6,7,8]));
create(calc(5));