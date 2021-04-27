## Part 1a
1) - values added: 20
2) - values added: 20
   - final result: 20
3) - values added: 20
4) - values added: 20
   - error since the variable result is of type let which means it has block scope of the if block and therefore outside of the if block we are unable to access that variable
5) - values added: 0 and we also get an error since the variable result is of type const and therefore we can not change its value 
6) - same as part 5 but now we get an error becuase the variable result is of type const and has block scope and therefore is only accessible in the if block and not outside it where the next console.log is

## Part 1b
1) - we will print 3 to the console log because the variable i is of type var and has function scope and therefore we can access it anywhere in the function
2) - we will print 150 since discountedPrice is of type var we can keep redelcaring it and it also has function scope so we can access it outside of the for loop inside the function and therefore we will print the last time it is declared
3) - we will print 150 because the variable finalPrice is of type var and will be assigned a value after each iteration of the for loop and thus we will print the last iteration of the for loop 
4) - the function will return an array : [50, 100, 150] because we add each finalPrice to the end of the array 
5) - we will get an error because the variable i is of type let and has block scope and therefore is only accessible inside the for loop and we are trying to access it outside of the for loop
6) - we will get an error because the variable discountedPrice is of type let and therefore has block scope in which it is delclared, thus it has block scope of the for loop and therefore we can not access the variable outside the for loop where the console.log is trying to access it 
7) - we will print 150 becuase the variable finalPrice is of type let and therefore has block scope but since we delclared it at the top of the function then we can use it throughout the entire function 
8) - we will return an array [50, 100, 150] because the variable discounted is of type let and therefore has block scope where it is declared but since it was declared at the top of the function then we can use it throughout the entire function  
9) - we will get an error becuase we declare the variable i as type let and therefore only has scope in the for loop therefore we can not access i outside the for loop
10) - we will print 3 because we declare and initalize the cont in the beginning it has block scope but we declared it at the beginning of the function so we can access inside the function where we are printing it 
11) we are going to return the array [50, 100, 150] because although the variable discounted is const, we are able to add to the array because we are not re-declaring or re-assigning the array   
12) - A) student.name
    - B) student['Grad Year']
    - C) student.greeting()
    - D) student['Facorite Teacher'].name
    - E) student.courseLoad[0]
13) - A) '32'
    - B) 1
    - C) 3
    - D) '3null'
    - E) 4
    - F) 0
    - G) '3undefined'
    - H) NaN
14) - A) true
    - B) false
    - C) true
    - D) false
    - E) false
    - F) true
15) '==' checks the equalty while coverting values while '===' checks the equality of two variables and checks to see if they are the same type 
17) The result will be that each index of the array  will by multiplied by two, this happens in a different function that we call inside the origional function and will return [2,4,6]
19) The output will be 1 then it will wait one second and output 2 then instantly output 3 and then output 4 