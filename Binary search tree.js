class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    addNode(value) {
        if (this.root == null) {
            this.root = new Node(value);
            this.arr = []
            return;

        }

        this.addAndTraverse(value, this.root);

    }

    addAndTraverse(value, root) {
        if (value <= root.value && root.left != null) {
            this.addAndTraverse(value, root.left);
        }

        if (value <= root.value && root.left == null) {
            root.left = new Node(value);
            return;
        }

        if (value >= root.value && root.right != null) {
            this.addAndTraverse(value, root.right);
        }

        if (value >= root.value && root.right == null) {
            root.right = new Node(value);
            return;
        }

    }

    traverse(root) {
        if (root != null) {

            this.traverse(root.left);
            this.arr.push(root.value)
            this.traverse(root.right);
        }
    }

    giveArray() {
        return this.arr;
    }

    searchHandler(value, root) {

        

        if (root != null) {

            if(value==root.value) return true;

            if (value < root.value) {
                return this.searchHandler(value, root.left);
            }

            if (value > root.value) {
                return this.searchHandler(value, root.right);
            }

        }

        return false;



    }

    search(value)
    {
        return this.searchHandler(value,this.root);
    }

}



const bst = new BST();

const arr = [ 5,4,6,2,7,6 ];
// const arr1 = [1, 2, 3, 4, 0, -1, 5, -3, -10];

arr.forEach((item) => {
    bst.addNode(item); // adding nodes
})

bst.traverse(bst.root);

console.log(bst.giveArray())
console.log(bst.search(5))

