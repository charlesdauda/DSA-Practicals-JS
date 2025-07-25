class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){ //insert an item into an array
        this.data[this.length] = item
        this.length++
        return this.length;
    }

    get(index){  // retrieve an item based on the index in an array
        return this.data[index];
    }

    pop(){  // delete the last item of an array
        const lastItem = this.data[this.length -1]
        this.length--;
        return lastItem;
    }

    shift(){  //delete the first item of an array
        const firstItem = this.data[0]
        for(let i = 0; i < this.length; i++){
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length -1]
        this.length--;
        return firstItem
    }

    delete(index){ //delete based on the index
        const item = this.data[index];
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length -1]
        this.length--;
        return item;
    }

}

const mynewArray = new myArray();
mynewArray.push('Apple');
mynewArray.push('Mango');
mynewArray.push('Orange');

console.log(mynewArray);
console.log(mynewArray.get(1));
/*
mynewArray.pop()
console.log(mynewArray);*/

/*mynewArray.shift()
console.log(mynewArray);*/
newData.delete(4);
console.log(newData);