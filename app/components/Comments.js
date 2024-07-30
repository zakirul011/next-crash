import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div>
      <h2>comments</h2>
      <ul>
        {comments.map((comment) => (
          <li className="mt-2" key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
