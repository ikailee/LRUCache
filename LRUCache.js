class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = { value: null, prev: null, next: null };
        this.tail = { value: null, prev: null, next: null };
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        let result = null;
        let currentNode = this.map.get(key);

        if (currentNode) {
            result = currentNode.value;
            this.removeNode(currentNode);
            this.addNode(currentNode);
        }

        return result;
    }

    put(key, value) {
        let existingNode = this.get(key);

        if (existingNode) {
            this.existingNode.value = value;
            this.removeNode(existingNode);
            this.addNode(existingNode);
        } else {
            if (this.map.size === this.capacity) {
                this.map.delete(this.head.next.key);
                this.removeNode(this.head.next);
            }

            let newNode = { value: value, prev: null, next: null };
            this.map.set(key, newNode);
            this.addNode(newNode);
        }
    }

    addNode(node) {
        let tail = this.tail;
        let tailPrev = this.tail.prev;

        tailPrev.next = node;
        node.prev = tailPrev;
        node.next = tail;
        tail.prev = node;

    }

    removeNode(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }
}