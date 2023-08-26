                     javascript execution context

            {code}  -----> Globle Execution context ----- this keyword

            1 -> Globle execution context ------ this
            2 -> Function execution context
            3 -> Eval execution context

            {code} ---> Memory creation phase / Creation phase 
                   ---> Execution phase


              EXAMPLE ------ EXAMPLE ------- EXAMPLE
            
 1   let val1 = 10
 2   let val2 = 5 
 3   function addNum(num1, num2){
 4       let total = num1 + num2
 5      return total
 6  }
 7  let result1 = addNum(val1, val2)
 8  let result2 = addNum(10, 2)

    1 -> Globle execution  ---- this 
    2 -> Memory Phase --- In memory phase, all variable allocated with undefine value
         
       1  val1     ---- undefined
       2  val2     ---- undefined
   3 - 6  addNum   ---- Defination
       7  result1  ---- undefined
       8  result2  ---- undefined

    3 -> Execution Phase

     1  val1 <---- 10
     2  val2 <---- 5 
 3 - 6  Nothing for execute
     7  AddNum() execute  ---------------> 1 -> creat new variable environment  + Execution Thread

                                           2 -> Memory Phase 
                                                val1 ---- undefined 
                                                val2 ---- undefined 
                                               total ---- undefined

                                           3 -> Execution Phase 
                                                num1 <- 10
                                                num1 <- 5
                                               total <- 15 it is goes into globle execution context
    
     8  Again execute addNum() function all process same as line 7

        1 -> new variable environment + execution Thread
        2 -> Memory phase
        3 -> execution phase




        
                                               
                                                
                            