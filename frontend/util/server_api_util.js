export const fetchServers = () => {
  return $.ajax({
    method: 'get',
    url: 'api/servers'
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

export const updateServer = name => {
  return $.ajax({
    method: 'patch',
    url: `api/severs/${server.id}`,
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
