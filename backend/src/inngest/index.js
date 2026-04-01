import { Inngest } from "inngest";
import User from "../model/user.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "socail-medias" });

// create functions
const userCreated = inngest.createFunction(
  {
    id: "user-created",
    triggers: [{ event: "clerk/user.created" }]
  },
  async ({ event }) => {
    let { id, email_addresses, first_name, last_name, image_url } = event.data;
    let username = email_addresses[0].email_address.split("@")[0];

    let findUser = await User.findOne({ username });
    if (findUser) {
      username = username + Math.floor(Math.random() * 1000);
    }
    let newUser = {
      _id: id,
      email: email_addresses[0].email_address,
      full_name: `${first_name} ${last_name}`,
      username: username,
      profile_picture: image_url,
    };
    await User.create(newUser);
  }
);

let userUpdated = inngest.createFunction(
  {
    id: "user-updated",
    triggers: [{ event: "clerk/user.updated" }]
  },
  async ({ event }) => {
    let { id, first_name, last_name, image_url } = event.data;

    let updatedUser = {
      full_name: `${first_name} ${last_name}`,
      profile_picture: image_url,
    };
    await User.findByIdAndUpdate(id, updatedUser);
  }
);

let userDeleted = inngest.createFunction(
  {
    id: "user-deleted",
    triggers: [{ event: "clerk/user.deleted" }]
  },
  async ({ event }) => {
    let { id } = event.data;
    await User.findByIdAndDelete(id);
  }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [userCreated, userUpdated, userDeleted];
