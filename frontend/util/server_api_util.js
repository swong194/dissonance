export const fetchServers = () => {
  return $.ajax({
    method: 'get',
    url: 'api/servers'
  });
};

export const fetchServer = id => {
  return $.ajax({
    method: 'get',
    url: `api/servers/${id}`
  });
};

export const createServer = name => {
  return $.ajax({
    method: 'post',
    url: 'api/servers',
    data: { name }
  });
};

export const deleteServer = id => {
  return $.ajax({
    method: 'delete',
    url: `api/servers/${id}`
  });
};

export const updateServer = (name, serverId) => {
  return $.ajax({
    method: 'patch',
    url: `api/servers/${serverId}`,
    data: { name }
  });
};

export const joinServer = name => {
  return $.ajax({
    method: 'post',
    url: 'api/servers/join',
    data: { name }
  });
};


export const fetchServerUsers = id =>{
  return $.ajax({
    method: 'get',
    url: `api/servers/${id}/users`
  });
};
