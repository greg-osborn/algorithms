/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // we have the list of edges in prerequisites
    // we just need to return whether the graph is acyclic (true) or cyclic (false)
    // to do that, we build the adjacency list to track the graph
    let graph = new Map();
    for(const [vertex, edge] of prerequisites) {
        if(graph.has(vertex)) {
            let edges = graph.get(vertex);
            edges.push(edge);
            graph.set(vertex, edges);
        }
        else graph.set(vertex, [edge]);
    }
    const visiting = new Set();
    const visited = new Set();
    
    const isCyclic = (vertex) => {
        visiting.add(vertex);
        let edges = graph.get(vertex);

        if(edges) {
            for(const e of edges) {
                // if we've completed checking e, it's acyclic
                if(visited.has(e)) continue;

                // if we're currently checking e, this loop is cyclic
                if(visiting.has(e)) return true;

                // if we've completed a cycle, pass that result up
                if(isCyclic(e)) return true;
            }
        }
        // if we haven't hit a cycle, this part of the graph is acyclic
        visiting.delete(vertex);
        visited.add(vertex);
        return false;
    }

    //check all vertices to see if they're cyclic
    for(const [vertex, edge] of graph) {
        if(isCyclic(vertex)) return false;
    }
    // if not, the graph is acyclic
    return true;
};