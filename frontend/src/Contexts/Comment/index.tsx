import React, { createContext, useEffect, useState } from "react";
import { IComments, iChildren } from "./interfaces";
import { api } from "../../services/api";

type CommentContextProps = {
  comment: IComments[] | [];
  setComment: React.Dispatch<React.SetStateAction<IComments[] | []>>;
};

const CommentContext = createContext<CommentContextProps>(
  {} as CommentContextProps
);

const CommentProvider = ({ children }: iChildren) => {
  const [comment, setComment] = useState<IComments[] | []>([]);

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

  return (
    <CommentContext.Provider value={{ comment, setComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
export { CommentContext, CommentProvider };
