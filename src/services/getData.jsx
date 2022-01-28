import { useState, useEffect } from "react";

const url = "http://localhost:4000/user/";
const urlMocked = "../user/";

// True if you want use mocked data, False if you want use API data
const useMockedData = true;

/**
 * @description get the user name
 * @param {number} id id of user
 * @returns name of user
 */
export function GetName(id) {
  const [name, setName] = useState("");
  let idUser = id;

  useEffect(() => {
    if (useMockedData === true) {
      fetch(`${urlMocked}user${idUser}.json`)
        .then((res) => res.json())
        .then((result) => setName(result.data.userInfos.firstName));
    } else {
      fetch(url + idUser)
        .then((res) => res.json())
        .then((result) => setName(result.data.userInfos.firstName));
    }
  }, [idUser]);

  return name;
}

/**
 * @description get the user keydata
 * @param {*} id id of user
 * @returns user keydatas
 */

export function GetKeyData(id) {
  const [keyData, setKeyData] = useState("");
  let idUser = id;

  useEffect(() => {
    if (useMockedData === true) {
      fetch(`${urlMocked}user${idUser}.json`)
        .then((res) => res.json())
        .then((result) => setKeyData(result.data.keyData));
    } else {
      fetch(url + idUser)
        .then((res) => res.json())
        .then((result) => setKeyData(result.data.keyData));
    }
  }, [idUser]);

  return keyData;
}

/**
 * @description get the user activities datas
 * @param {*} id id of user
 * @returns user activities datas
 */

export function GetActivityData(id) {
  const [activity, setActivity] = useState("");

  let idUser = id;

  useEffect(() => {
    if (useMockedData === true) {
      fetch(`${urlMocked}${idUser}/activity.json`)
        .then((res) => res.json())
        .then((result) => setActivity(result.data.sessions));
    } else {
      fetch(`${url + idUser}/activity`)
        .then((res) => res.json())
        .then((result) => setActivity(result.data.sessions));
    }
  }, [idUser]);

  return activity;
}

/**
 * @description get the user sessions datas
 * @param {*} id id of user
 * @returns user sessions datas
 */

export function GetSessionData(id) {
  const [session, setSession] = useState("");

  let idUser = id;

  useEffect(() => {
    if (useMockedData === true) {
      fetch(`${urlMocked}${idUser}/average-session.json`)
        .then((res) => res.json())
        .then((result) => setSession(result.data.sessions));
    } else {
      fetch(`${url + idUser}/average-sessions`)
        .then((res) => res.json())
        .then((result) => setSession(result.data.sessions));
    }
  }, [idUser]);

  return session;
}

/**
 * @description get the user score
 * @param {*} id id of user
 * @returns user score
 */

export function GetScore(id) {
  const [score, setScore] = useState("");

  let idUser = id;

  useEffect(() => {
    if (useMockedData === true) {
      fetch(`${urlMocked}user${idUser}.json`)
        .then((res) => res.json())
        .then((result) => setScore(result.data));
    } else {
      fetch(url + idUser)
        .then((res) => res.json())
        .then((result) => setScore(result.data));
    }
  }, [idUser]);

  return score;
}

/**
 * @description get the user performance
 * @param {*} id id of user
 * @returns user performance
 */

export function GetPerformance(id) {
  const [performance, setPerformance] = useState("");

  let idUser = id;

  useEffect(() => {
    if (useMockedData === true) {
      fetch(`${urlMocked}${idUser}/performance.json`)
        .then((res) => res.json())
        .then((result) => setPerformance(result.data.data));
    } else {
      fetch(`${url + idUser}/performance`)
        .then((res) => res.json())
        .then((result) => setPerformance(result.data.data));
    }
  }, [idUser]);

  return performance;
}
