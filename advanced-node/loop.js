// node myFile.js

const pendingTimers = []
const pendingOStasks = []
const pendingOperations = []


// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // check one: any pending setTimeout, setInterval. setImmediate?
    // check two : any pending OS tasks? (Like server listening to port)
    // check three : any pending long running operations? (Like fs module)
    return pendingTimers.length || pendingOStasks.length || pendingOperations.length 
}
 
// Entire body excecutes in one 'tick' 
while(shouldContinue()) {
    // 1)  Node looks at pendingTimers and sees if any functions
    // are ready to be called 
    
    // 2) Node looks at pendingOSTasks and pendingOperations 
    // and calls relevant callbacks 
    
    // 3) Pause execution. Continue when ... 
    //  - a new pendingOSTask is done
    //  - a new pendingOperation is done
    //  - a timer is about to complete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) handle any close events. 
}


// exit back to terminal 