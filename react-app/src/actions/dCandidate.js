import api from "./api";

export const ACTION_TYPE = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

const formatData = (data) => ({
  ...data,
  age: parseInt(data.age ? data.age : 0),
});

export const fetchAll = () => (dispatch) => {
  api
    .dCandidate()
    .fetchAll() 
    .then((response) => {
      dispatch({
        type: ACTION_TYPE.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data, onSuccess) => (dispatch) => {
  data = formatData(data);
  api
    .dCandidate()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPE.CREATE,
        payload: res,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const update = (id, data, onSuccess) => (dispatch) => {
  data = formatData(data);
  api
    .dCandidate()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPE.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .dCandidate()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPE.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
