export const fetchDirectMessages = () =>{
  return {
    method: 'get',
    url: 'api/direct_messages'
  };
};

export const createDirectMessage = id => {
  return {
    method: 'post',
    url: 'api/direct_messages',
    data: { id }
  };
};

export const fetchDirectMessage = id => {
  return{
    method: 'get',
    url: `api/direct_messages/${id}`
  };
};
