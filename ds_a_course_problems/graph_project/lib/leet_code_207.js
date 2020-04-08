function makeAdjList(array) {
  let preReqs = {};

  array.forEach((courseSet) => {
    let [course, pre] = courseSet.map(String);

    if (course in preReqs) {
      preReqs[course].push(pre);
    } else {
      preReqs[course] = [pre];
    }

    if (!(pre in preReqs)) preReqs[pre] = [];
  });

  return preReqs;
}

function canFinish(posNumCourses, prerequisites) {
  let preGraph = makeAdjList(prerequisites);
  let totalNumCourses = Object.keys(preGraph).length;
  let completed = new Set();

  let canAddCourse = true;

  while (canAddCourse) {
    canAddCourse = false;
    for (course in preGraph) {
      // if all the prereqs for a course are completed I can add to my graph
      // only if this course isn't already in my graph
      if (completed.has(course)) continue;
      if (
        preGraph[course].every((preReqCourse) => completed.has(preReqCourse))
      ) {
        completed.add(course);
        canAddCourse = true;
      }
    }
  }

  return completed.size === totalNumCourses;
}

console.log(canFinish(2, [[1, 0]]));
