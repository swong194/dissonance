export const fetchMessages = () =>{
  return $.ajax({
    method: 'get',
    url: 'api/messages'
  });
};

export const createMessage = message => {
  return $.ajax({
    method:'post',
    url: 'api/messages',
    data: { message }
  });
};
