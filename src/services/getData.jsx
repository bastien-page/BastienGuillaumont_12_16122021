import { useState, useEffect } from "react";

export function GetUserData(id) {
  let idUser = id;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}`)
      .then((resp) => resp.json())
      .then((result) => setUserData(result));
  }, [idUser]);

  return userData;
}

export function GetActivityData(id) {
  const [data, setData] = useState("");

  let idUser = id;

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}/activity`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [idUser]);

  return data;
}

export function GetSessionData(id) {
  const [data, setData] = useState("");

  let idUser = id;

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}/average-sessions`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [idUser]);

  return data;
}
