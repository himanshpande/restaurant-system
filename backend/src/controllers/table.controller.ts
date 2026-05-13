import { Request, Response } from "express";
import prisma from "../config/prisma";
import { v4 as uuidv4 } from "uuid";

export const createTable = async (
  req: Request,
  res: Response
) => {
  try {
    const { tableNumber } = req.body;

    const existingTable =
      await prisma.table.findUnique({
        where: {
          tableNumber,
        },
      });

    if (existingTable) {
      return res.status(400).json({
        message: "Table already exists",
      });
    }

    const token = uuidv4();

    const table = await prisma.table.create({
      data: {
        tableNumber,
        token,
      },
    });

    res.status(201).json({
      success: true,
      data: table,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getTables = async (
  _: Request,
  res: Response
) => {
  try {
    const tables = await prisma.table.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      data: tables,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};