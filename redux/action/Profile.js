import * as api from "../../api";

export const createProfile = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createProfile(formData);
    dispatch({ type: "CREATE_PROFILE", data });
  } catch (error) {
    console.log({ error });
  }
};

export const getProfileById = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.getProfileById(formData, id);
    dispatch({ type: "FETCH_PROFILE_BY_ID", data });
  } catch (error) {
    console.log(error);
  }
};

export const getProfileByUserName = (id,formData,auth,unique) => async (dispatch) => {
  try {
    if (id !== undefined) {
      console.log({id,formData,auth,unique})
      const { data } = await api.getProfileByUsername(id,formData,auth,unique);
      dispatch({ type: "FETCH_PROFILE_BY_USERNAME", data });
    }
  } catch (error) {
    dispatch({ type: "PROFILE_ERROR", data: error?.response?.data });
  }
};

export const updateProfile = (formData, id) => async (dispatch) => {
  try {
    dispatch({type:"START_LOADING"})
    const { data } = await api.updateProfileById(formData, id);
    dispatch({ type: "UPDATE_PROFILE", data });
    dispatch({type:"END_LOADING"})
  } catch (error) {
    console.log(error);
  }
};

export const updateSubDocInProfileById = (formData, id, subdoc) => async (dispatch) => {
  try {
      dispatch({type:"START_LOADING"})
      const { data } = await api.updateSubDocInProfileById(
        formData,
        id,
        subdoc
        );
        dispatch({ type: "UPDATE_SUBDOC_IN_PROFILE", data });
        dispatch({type:"END_LOADING"})
      } catch (error) {
        console.log(error);
      }
    };
    
    export const deleteSubDocInProfileById=(formData,id,query)=>async(dispatch)=>{
      try {
        console.log({formData,id,query})
        const {data}=await api.deleteSubDocInProfileById(formData,id,query)
        dispatch({type:"DELETE_SUBDOC_IN_PROFILE_BY_ID",data})
      } catch (error) {
    console.log({error})
  }
}

export const deleteProfile = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.deleteProfileById(formData, id);
    dispatch({ type: "DELETE_PROFILE", data });
  } catch (error) {
    console.log(error);
  }
};

export const addImageInProfile=(formData,id,query)=>async(dispatch)=>{
  try {
    dispatch({type:"START_LOADING"})
    const {data}=await api.addImage(formData,id,query)
    dispatch({type:"ADD_IMAGE",data})
    dispatch({type:"END_LOADING"})
  } catch (error) {
    console.log({error})
  }
}

export const profileRequests=(formData,id)=>async(dispatch)=>{
  try {
    const {data}=await api.profileRequests(formData,id)
    console.log({formData,id})
    dispatch({type:"PROFILE_REQUEST",data})
  } catch (error) {
    console.log(error)
  }
}


export const likeProfile=(id,userId)=>async(dispatch)=>{
  try {
    const {data}=await api.likeProfile(id,userId)
    dispatch({type:"LIKE_PROFILE",data})
    
  } catch (error) {
    console.log({error})
  }
}

