class Graph {
    constructor() {
        this.adjacency_list = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacency_list.get(vertex)) {
            this.adjacency_list.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacency_list.get(vertex1).push(vertex2);
        this.adjacency_list.get(vertex2).push(vertex1);
    }
    // bfs is iterative way to traverse a graph
    BFS(graph, startVertex) {
        let visited = new Set();
        let queue = [startVertex];
        visited.add(startVertex);

        while (queue.length) {
            let vertex = queue.shift();
            console.log(vertex);
            for (let neighbour of graph.adjacency_list.get(vertex)) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }
    // recursive way  to traverse a graph
    DFS(graph, startVertex) {
        let visited = new Set();
        function recursiveDFS(vertex) {
            console.log(vertex)
            visited.add(vertex);
            for (let neighbour of graph.adjacency_list.get(vertex)) {
                if (!visited.has(neighbour)) {
                    recursiveDFS(neighbour);
                }
            }
        }
        recursiveDFS(startVertex)
    }
}

let gr = new Graph();
gr.addVertex('A');
gr.addVertex('B');
gr.addVertex('C');
gr.addVertex('D');
gr.addVertex('E');
//add addEdge
gr.addEdge("A", "B");
gr.addEdge("B", "C");
gr.addEdge("C", "D");
gr.addEdge("D", "E");
gr.addEdge("E", "A");
// BFS
gr.BFS(gr, 'A');
gr.DFS(gr, 'E');
console.log(gr)