import * as ServerAPIUtil from '../util/server_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECIEVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

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

export const fetchServers = () => dispatch => {
  return ServerAPIUtil.fetchServers().then(
    servers => (dispatch(receiveServers(servers))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const createServer = server => dispatch => {
  return ServerAPIUtil.createServer(server).then(
    resServer => {
      (dispatch(receiveServer(resServer)));
      return resServer;
    },
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const fetchServer = id => dispatch => {
  return ServerAPIUtil.fetchServer(id).then(
    server => dispatch(receiveServer(server)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};


export const deleteServer = id => dispatch => {
  return ServerAPIUtil.deleteServer(id).then(
    (server) => {
      dispatch(removeServer(id));
      return server;
    },
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
    server => {
      (dispatch(receiveServer(server)));
      return server;
    },
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};
