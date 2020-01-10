/*
    Part 1: This creates a mapping from a single object to all objects that are orbiting the object;
            then goes through in a dynamic programming style from the first object to all preceding objects,
            going through the entire graph to calculate total distance between all objects.
*/

const orbitMatch = /([^\)]+)\)(.+)/;

const orbitDistances = { };

function getOrbit(line){
    let [_, orbited, orbiting] = line.match(orbitMatch);
    return [orbited, orbiting];
}


function main(startObject, data){
    let orbits = { };

    // fill out the planet orbits
    for (let line of data.split("\n")){
        if (line == "") continue;

        let [orbited, orbiting] = getOrbit(line);
        if (!orbits[orbited]){
            orbits[orbited] = [ ];
        }
        orbits[orbited].push(orbiting);
    }

    // go through and figure out the distances
    let distances = { };
    let queue = new Queue();

    distances[startObject] = 0;
    let totalDistance = 0;

    queue.enqueue(startObject);
    while (!queue.isEmpty()){
        let obj = queue.dequeue();

        if (!orbits[obj]) continue;

        for (let nextObj of orbits[obj]){
            distances[nextObj] = distances[obj] + 1;
            totalDistance += distances[nextObj];

            queue.enqueue(nextObj);
        }
    }

    console.log(totalDistance);
}

main("COM", document.body.innerText);


// Queue implementation from code.iamkate.com
function Queue(){var a=[],b=0;this.getLength=function(){return a.length-b};this.isEmpty=function(){return 0==a.length};this.enqueue=function(b){a.push(b)};this.dequeue=function(){if(0!=a.length){var c=a[b];2*++b>=a.length&&(a=a.slice(b),b=0);return c}};this.peek=function(){return 0<a.length?a[b]:void 0}};
