function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((item, index) => item === arr2[index]);
}
function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return 0;
  }

  const filteredUsers = users.filter(user => user.gender === gender);

  if (filteredUsers.length === 0) {
    return 0;
  }

  const sumAges = filteredUsers.reduce((sum, user) => {
    return sum + user.age;
  }, 0);

  return sumAges / filteredUsers.length;
}
