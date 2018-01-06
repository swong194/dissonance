import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECIEVE_SERVER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveServers = servers => {
  return {
    type: RECEIVE_SERVERS,
    servers
  };
};

export const receiveServer = server => {
  return {
    type: RECEIVE_SERVER,
    server
  };
};

export const removeServer = id => {
  return {
    type: REMOVE_SERVER,
    serverId: id
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchServers = () => dispatch => {
  return ServerAPIUtil.fetchServers().then(
    servers => (dispatch(receiveServers(servers))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const createServer = server => dispatch => {
  return ServerAPIUtil.createServer(server).then(
    server => (dispatch(receiveServer(server))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};


export const deleteServer = id => dispatch => {
  return ServerAPIUtil.deleteServer(id).then(
    () => (dispatch(removeServer(id))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const updateServer = (name, id) => dispatch => {
  return ServerAPIUtil.updateServer(name, id).then(
    server => (dispatch(receiveServer(server))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const joinServer = name => dispatch => {
  return ServerAPIUtil.joinServer(name).then(
    server => (dispatch(receiveServer(server))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};


export const fetchServerUsers = id => dispatch => {
  return ServerAPIUtil.fetchServerUsers(id).then(
    users => (dispatch(receiveUsers(users))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};
