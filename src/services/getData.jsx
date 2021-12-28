import { useState, useEffect } from "react";

export function GetName(id) {
  const [name, setName] = useState("");
  let idUser = id;

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}`)
      .then((res) => res.json())
      .then((result) => setName(result.data.userInfos.firstName));
  }, [idUser]);

  return name;
}

export function GetKeyData(id) {
  const [keyData, setKeyData] = useState("");
  let idUser = id;

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}`)
      .then((res) => res.json())
      .then((result) => setKeyData(result.data.keyData));
  }, [idUser]);

  return keyData;
}

export function GetActivityData(id) {
  const [activity, setActivity] = useState("");

  let idUser = id;

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}/activity`)
      .then((res) => res.json())
      .then((result) => setActivity(result.data.sessions));
  }, [idUser]);

  return activity;
}

export function GetSessionData(id) {
  const [session, setSession] = useState("");

  let idUser = id;

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}/average-sessions`)
      .then((res) => res.json())
      .then((result) => setSession(result.data.sessions));
  }, [idUser]);

  return session;
}

export function GetScore(id) {
  const [score, setScore] = useState("");

  let idUser = id;

  useEffect(() => {
    fetch(`http://localhost:4000/user/${idUser}`)
      .then((res) => res.json())
      .then((result) => setScore(result.data));
  }, [idUser]);

  return score;
}
