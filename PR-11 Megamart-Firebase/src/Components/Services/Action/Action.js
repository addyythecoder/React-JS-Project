import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase.config";

export const addNewMen = () => ({
  type: "ADD_PRODUCT_SUC",
});

export const getAllMen = (data) => ({
  type: "GET_ALL_PRODUCT_SUC",
  payload: data,
});


export const deleteMen = (id) => ({
  type: "DELETE_PRODUCT_SUC",
  payload: id,
});

export const getMen = (data) => ({
  type: "GET_PRODUCT_SUC",
  payload: data,
});

export const updateMen = (data) => ({
  type: "UPDATE_PRODUCT_SUC",
  payload: data,
});


export const addNewMenRej = (msg) => ({
  type: "ADD_PRODUCT_REJ",
  payload: msg,
});


export const getAllMenRej = (msg) => ({
  type: "GET_ALL_PRODUCT_REJ",
  payload: msg,
});

export const deleteMenRej = (msg) => ({
  type: "DELETE_PRODUCT_REJ",
  payload: msg,
});


export const getMenRej = (msg) => ({
  type: "GET_PRODUCT_REJ",
  payload: msg,
});

export const updateMenRej = (msg) => ({
  type: "UPDATE_PRODUCT_REJ",

  payload: msg,
});


export const filterMenData = (data) => ({
  type: "FILTER_MEN",
  payload: data,
});



export const getAllMenAsync = () => {
  return async(dispatch) => {
  //   axios
  //     .get("http://localhost:3000/men")
  //     .then((res) => dispatch(getAllMen(res.data)))
  //     .catch((err) => dispatch(getAllMenRej(err.message)));
  // };
  try {
    await getDocs(collection(db,"men")).then((querySnapshot)=>{
      const menData = [];
      querySnapshot.forEach((doc)=>{
        menData.push({...doc.data(),id:doc.id});
      });
      dispatch(getAllMen(menData));
    })
  } catch (error) {
    console.log("Error getting documents: ", error);
    dispatch(getAllMenRej(error.message));
  }

};
}



export const addNewMenAsync = (data) => {
  return async(dispatch) => {
    try {
      await addDoc(collection(db,"men"),data);  // automaaly id will be created by firebase
      // await setDoc(doc(db,"men",`${data.id}`),data); // custom id
      dispatch(addNewMen());
    } catch (error) {
      console.log("Error adding document: ", error);
      dispatch(addNewMenRej(error.message));
    }
  };
};

export const deleteMenAsync = (id) => {
  return async(dispatch) => {
    try {
      await deleteDoc(doc(db,"men",id));
      dispatch(deleteMen(id));
    } catch (error) {
      dispatch(deleteMenRej(error.message));  
    }
  };
};


export const getMenAsync = (id) => {
  return async(dispatch) => {
    try {
      let menData = {};
      await getDoc(doc(db,"men",id)).then((doc)=>{
        menData = {...doc.data(),id:doc.id};
      });
      dispatch(getMen(menData));
    } catch (error) {
      dispatch(getMenRej(error.message));
    }
  };
};

export const updateMenAsync = (data) => {
  return async(dispatch) => {
    try {
      await updateDoc(doc(db,"men",data.id),data);
      dispatch(updateMen(data));
    } catch (error) {
      dispatch(updateMenRej(error.message));
    }
  };
};

