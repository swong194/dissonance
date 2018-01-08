export const fetchMessages = id =>{
  return $.ajax({
    method: 'get',
    url: 'api/messages',
    data: { id }
  });
};

export const createMessages = message => {
  return $.ajax({
    method:'post',
    url: 'api/messages',
    data: { message }
  });
};
