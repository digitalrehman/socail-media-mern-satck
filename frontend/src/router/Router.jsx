import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Feed from "../pages/Feed";
import Connections from "../pages/Connections";
import Messages from "../pages/Messages";
import Discover from "../pages/Discover";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import CreatePost from "../pages/CreatePost";
import { useAuth, useUser } from "@clerk/react";
import Layout from "../pages/Layout";
import { useEffect } from "react";
const Router = () => {
  let { user } = useUser();
  let { getToken } = useAuth();
  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    });
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Layout />}>
        <Route index element={<Feed />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Route>
    </Routes>
  );
};

export default Router;
