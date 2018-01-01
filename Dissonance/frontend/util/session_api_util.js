export const createUser = user => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    data: { user }
  });
};

export const loginUser = user => {
  return $.ajax({
    method: 'post',
    url: 'api/session',
    data: { user }
  });
};

export const logoutUser = () => {
  return $.ajax({
    method: 'delete',
    url: 'api/session'
  });
};
