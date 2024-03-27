import { Router } from 'express';
import { sample_bakerys,sample_tags } from '../bake';
import asyncHandler from 'express-async-handler';
import { BakeryModel } from '../models/bakery.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const bakerysCount = await BakeryModel.countDocuments();
    if (bakerysCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await BakeryModel.create(sample_bakerys);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const bakerys = await BakeryModel.find();
    res.send(bakerys);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const bakerys = await BakeryModel.find({ name: { $regex: searchRegex } });
    res.send(bakerys);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await BakeryModel.aggregate([
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
      count: await BakeryModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const bakerys = await BakeryModel.find({ tags: req.params.tagName });
    res.send(bakerys);
  })
);

router.get(
  '/:bakeryId',
  asyncHandler(async (req, res) => {
    const bakery = await BakeryModel.findById(req.params.bakeryId);
    res.send(bakery);
  })
);

export default router;