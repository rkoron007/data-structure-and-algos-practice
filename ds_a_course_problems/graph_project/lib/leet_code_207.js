// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// intakes the number of courses allowed
// prerequisites is a graph of edges

function addedToVisits(coursePair, visited) {
  coursePair.forEach((course) => {
    if (visited.has(course)) return false;
    visited.add(course);
  });
  return true;
}

function makeAdjList(array) {
  let list = {};
  array.forEach((pair) => {
    let [course, value] = pair.map(String);

    if (list[course]) {
      list[course].push(value);
    } else {
      list[course] = [value];
    }

    if (!list[value]) list[value] = [];
  });

  return list;
}

function canFinish(numCourses, prerequisites) {
  // if (!prerequisites.length) return true;

  let completed = new Set();

  let preReq = makeAdjList(prerequisites);
  let totalCourses = Object.keys(preReq).length;
  let eliCourse = true;

  while (eliCourse) {
    eliCourse = false;
    for (let course in preReq) {
      let hasEveryPreMet = preReq[course].every((pre) => completed.has(pre));

      if (!completed.has(course) && hasEveryPreMet) {
        completed.add(course);
        eliCourse = true;
      }
    }
  }

  return completed.length === totalCourses;
}

let numCourses = 2,
  prerequisites = [[1, 0]];

console.log(makeAdjList(prerequisites));
// console.log(canFinish(numCourses, prerequisites));
