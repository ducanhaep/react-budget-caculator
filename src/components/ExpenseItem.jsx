import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ item, handleDelete, handleEdit }) => {
  const { id, charge, amount } = item;
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div
          className="edit-btn"
          area-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </div>
        <div
          className="clear-btn"
          area-label="delete button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
