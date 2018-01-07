export const fetchTextChannels = serverId => {
  return $.ajax({
    method: 'get',
    url: 'api/text_channels',
    data: { serverId }
  });
};

export const createTextChannel = text_channel => {
  return $.ajax({
    method: 'post',
    url: 'api/text_channels',
    data: { text_channel }
  });
};

export const fetchTextChannel = id => {
  return $.ajax({
    method: 'get',
    url: `api/text_channels/${id}`
  });
};

export const deleteTextChannel = id => {
  return $.ajax({
    method: 'delete',
    url: `api/text_channels/${id}`
  });
};

export const updateTextChannel = (name, id) => {
  return $.ajax({
    method: 'patch',
    url: `api/text_channels/${id}`,
    data: {name, id}
  });
};
