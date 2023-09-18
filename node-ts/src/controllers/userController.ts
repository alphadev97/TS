import { NextFunction, Request, Response } from "express";

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const users: string[] = ["A", "B", "C", "D", "Lol"];
  res.json({ users });
};
