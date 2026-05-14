import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      description,
      price,
      category,
      isVeg,
    } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        category,
        isVeg,
      },
    });

    await prisma.productHistory.create({
      data: {
        productId: product.id,
        action: `Product ${product.name} created`,
      },
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getProductHistory = async (
  req: Request,
  res: Response
) => {
  try {
    const histories = await prisma.productHistory.findMany({
      include: {
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      histories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};