function solution(edges) {
  const answer = [0, 0, 0, 0];
  const all_nodes = {};
  edges.forEach(([a, b]) => {
    if (all_nodes[a] === undefined) {
      all_nodes[a] = [0, 0];
    }
    if (all_nodes[b] === undefined) {
      all_nodes[b] = [0, 0];
    }
    all_nodes[a][0] += 1;
    all_nodes[b][1] += 1;
  });

  for (let key in all_nodes) {
    if (all_nodes[key] >= 2 && all_nodes[key] === 0) {
      answer[0] = key;
    } else if (all_nodes[key] == 0 && all_nodes[key] > 0) {
      answer[2] += 1;
    } else if (all_nodes[key] >= 2 && all_nodes[key] >= 2) {
      answer[3] += 1;
    }
  }
  answer[1] = all_nodes[answer[0]][0] - answer[2] - answer[3];
  return answer;
}

// let user = {
//   name: "John",
//   age: 30,
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }
