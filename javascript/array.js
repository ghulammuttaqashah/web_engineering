/*let c=[1,2,3];
c[4]=1;

console.log("Printing using the for in loop");
for(x in c)
    {
        console.log(c[x]);
    }

    console.log("Printing using the for of loop");
for (x of c )
    {
        console.log(x);
    }*/

/*c=new Array(5);
c[0]=1;
c[1]=2;
c[2]=3;
c[3]=4;
c[4]=5;
c.push(1);
c.push(1);
c.push(1);
c.push(1);
c.push(5);
console.log("Change the size of an array after pushing som new elements "+c);*/

//*****************2D Array*****************
//In this we made equal row and column 2d and printing it each row on new line by storing the numbers into string and then
//using the trim function
/*let a =[[1,2,3],[1,2,3],[1,2,3]];
for (let i=0; i<=2; i++)
    {
        let row=" ";
        for (let j=0; j<=2; j++)
            {
                row+=a[i][j]+" ";
            }
            console.log(row.trim());
    }*/

//jag array columns of 1st row!=columns of 2nd row
let a;
a=new Array(2);
a[0]=new Array(3);
a[1]=new Array(2);
a[0][0]=1;
a[0][1]=2;
a[0][2]=3;
a[1][0]=1;
a[1][1]=2;
for(let i=0; i<=1; i++)
    {
        let row=" "
        for(let j=0; j<=1;j++)
            {
                row+=a[i][j]+" ";
            }
            console.log(row.trim());
    }

