export const fetchDirectMessages = () =>{
  return $.ajax({
    method: 'get',
    url: 'api/direct_messages'
  });
};

export const createDirectMessage = id => {
  return $.ajax({
    method: 'post',
    url: 'api/direct_messages',
    data: { id }
  });
};

export const fetchDirectMessage = id => {
  return $.ajax({
    method: 'get',
    url: `api/direct_messages/${id}`
  });
};
