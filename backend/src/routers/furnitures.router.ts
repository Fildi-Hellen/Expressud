import { Router } from 'express';
import { sample_furnitures,sample_tags } from '../furn';
import asyncHandler from 'express-async-handler';
import { FurnitureModel } from '../models/furniture.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const furnituresCount = await FurnitureModel.countDocuments();
    if (furnituresCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await FurnitureModel.create(sample_furnitures);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const furnitures = await FurnitureModel.find();
    res.send(furnitures);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const furnitures = await FurnitureModel.find({ name: { $regex: searchRegex } });
    res.send(furnitures);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await FurnitureModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await FurnitureModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const furnitures = await FurnitureModel.find({ tags: req.params.tagName });
    res.send(furnitures);
  })
);

router.get(
  '/:furnitureId',
  asyncHandler(async (req, res) => {
    const furniture = await FurnitureModel.findById(req.params.furnitureId);
    res.send(furniture);
  })
);

export default router;