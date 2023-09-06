import React, { createContext, useEffect, useState } from "react";
import { IComment, IUpdateComment, iChildren } from "./interfaces";
import { api } from "../../services/api";

type CommentContextProps = {
  comment: IComment[] | [];
  setComment: React.Dispatch<React.SetStateAction<IComment[] | []>>;
  createComment: (data: IComment) => void;
  listAllComments: () => void;
  listMyComments: (id: number | null) => void;
  updateComment: (id: number | null, data: IUpdateComment) => void;
  deleteComment: (id: number | null) => void;
};

const CommentContext = createContext<CommentContextProps>(
  {} as CommentContextProps
);

const CommentProvider = ({ children }: iChildren) => {
  const [comment, setComment] = useState<IComment[] | []>([]);

  useEffect(() => {
    const Comments = async () => {
      try {
        const response = await api.get("/comments");
        setComment(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    Comments();
  }, []);

  const createComment = async (data: IComment) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("/comments", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listAllComments = async () => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.get("/comments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listMyComments = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.get(`/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateComment = async (id: number | null, data: IUpdateComment) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(`/comments/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newComment = comment.map((comm) => {
        if (comm.id === id) {
          return response.data;
        } else {
          return comm;
        }
      });
      setComment(newComment);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/users/${id}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comment,
        setComment,
        createComment,
        listAllComments,
        listMyComments,
        updateComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
export { CommentContext, CommentProvider };
