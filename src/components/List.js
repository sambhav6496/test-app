import React, { useState } from "react";
import { List, ListItem, Modal } from "@material-ui/core";
import { handleDelete, handleEdit } from "../utils/utils";
import "./list.css";

function Lists({ name, lastName, listItemId }) {
  const [editName, setEditName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="app-list">
        <div className="list-item">
          <h4>{name}</h4>
          <h4>{lastName}</h4>
          <button
            type="button"
            onClick={() => {
              setOpen(true);
            }}
          >
            edit
          </button>
          <button type="button" onClick={() => handleDelete(listItemId)}>
            delete
          </button>
        </div>
      </div>
      <form
        className={`${open && "app-form"}`}
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(listItemId, name);
        }}
      >
        <input
          type="text"
          placeholder="enter name"
          value={editName}
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="enter last name"
          value={editLastName}
          onChange={(e) => {
            setEditLastName(e.target.value);
          }}
        />
        <button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(listItemId, name, lastName);
          }}
        >
          edit
        </button>
      </form>
    </div>
  );
}

export default Lists;
