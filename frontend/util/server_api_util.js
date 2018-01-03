export const fetchServers = () => {
  return $.ajax({
    method: 'get',
    url: 'api/servers'
  });
};

export const createServer = server => {
  return $.ajax({
    method: 'post',
    url: 'api/servers',
    data: { server }
  });
};

export const deleteServer = id => {
  return $.ajax({
    method: 'delete',
    url: `api/servers/${id}`
  });
};

export const updateServer = server => {
  return $.ajax({
    method: 'patch',
    url: `api/severs/${server.id}`,
    data: { server }
  });
};

export const joinServer = name => {
  return $.ajax({
    method: 'post',
    url: 'api/servers/join',
    data: name
  });
};
