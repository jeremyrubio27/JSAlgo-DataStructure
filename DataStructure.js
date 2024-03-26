// class Queue{

    //     constructor(){
    //       this.item  = {}
    //       this.rear  = 0;
    //       this.front = 0;
    //     }
    
    //     enqueue(item){
    //         this.item[this.rear] = item
    //         this.rear++
    //         return this.item
    //     }
    
    //     dequeue(){
    //         let removeRec = this.item[this.front]
    //         delete this.item[this.front]
    //         this.front++;
    //         return this.item 
    //     }
        
    //     isEmpty(){
    //         return this.rear - this.front === 0
    //     }
    
    //     peek(){
    //         return this.item[this.front]
    //     }
    
    //     print(){
    //         return this.item
    //     }
    
    
    // }
    
    // let queue = new Queue()
    
    // queue.enqueue('First')
    // queue.enqueue('Second')
    // console.log(queue.enqueue('Third'))
    // console.log(queue.dequeue())
    // console.log(queue.isEmpty())
    // console.log(queue.peek())
    // console.log(queue.print())
    

    //Circular Queue

//     class CircularQueue{

//         constructor(capacity){
//             this.item  = {}
//             this.rear  = 0
//             this.front = 0
//             this.capacity = capacity
//         }


//         enqueue(item){
//             if(this.rear <= this.capacity){
//                 this.item[this.rear] = item
//                 this.rear++
//                 return this.item
//             }else{
//                 return "Not enough space anymore"
//             }
//         }


// }

// let queue = new CircularQueue(2)

// console.log(queue.enqueue('First'))
// console.log(queue.enqueue('Second'));
// console.log(queue.enqueue('Third'));



//Creating Linked List

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    
    prepend(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){

        let node = new Node(value)
        let prev = this.head
        if(this.isEmpty()){
            this.head = node
        }else{
            while(prev.next){
                prev = prev.next
            }
        }
        prev.next = node
        this.size++
    }

    print(){
        let result  = ''
        let curr    = this.head 
        while(curr){
            result += curr.value + " "
            curr = curr.next
        }
        return result;
    }

} 

class Node{
    constructor(value){
        this.value = value
        this.next  = null 
    }
}

let link = new Linkedlist()

// console.log(link.isEmpty())
// console.log(link.getSize())
// console.log(link)
// link.prepend(3)
// link.prepend(5)
// console.log(link.print());
// link.prepend(10)
// console.log(link.print())
// link.append(60)
// console.log(link.print())










