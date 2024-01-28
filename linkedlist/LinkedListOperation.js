class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    
    add(data){
        let newData=new Node(data);
        if(!this.head){
            this.head=newData;
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=newData;
        }
        this.size++;
    }
    remove(index){
        if(index<1){
            return;
        }
        let curr=this.head;
      if(index===1){
          this.head=curr.next;
      }else{
          let it=1;
          let prev;
          while(it<index){
              it++;
             prev=curr;
             curr=curr.next;
          }
          prev.next=curr.next;
      } 
      this.size--;
    }
    insertAt(data,index){
       if(index<=0){
           return
       }
       let node=new Node(data);
       let curr=this.head;
       if(index===1){
          node.next=curr.next;
          this.head=node;
       }else{
           let prev=curr;
           let it=1;
           while(it<index){
               it++;
               prev=curr;
               curr=curr.next;
           }
           node.next=curr;
           prev.next=node;
       }
       this.size++;
    }
    reverse(){
     if(!this.head){
         return
     } 
     else{
         let prev=null;
         let curr=this.head;
         while(curr){
            let newNode=curr.next;
            curr.next=prev;
            prev=curr;
            curr=newNode;
         }
     }
    }
}

let li=new LinkedList();
li.add("rama");
li.add("laxman");
li.add("bharat");
li.remove(2);
li.remove(2);
li.insertAt("hanuman",2);
li.reverse();
console.log(li)