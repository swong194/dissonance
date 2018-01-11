export const fetchFriends = () => {
  return $.ajax({
    method: 'get',
    url: '/api/friends'
  });
};

export const fetchFriend = id => {
  return $.ajax({
    method: 'get',
    url: `/api/friends4{id}`
  });
};

export const createFriend = name => {
  return $.ajax({
    method: 'post',
    url: `/api/friends`,
    data: { name }
  });
};

export const deleteFriend = id => {
  return $.ajax({
    method: 'delete',
    url: `/api/friends/${id}`
  });
};
