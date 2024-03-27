import { Router } from 'express';
import { sample_supermarkets,sample_tags } from '../supers';
import asyncHandler from 'express-async-handler';
import { SuperModel } from '../models/super.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const supermarketsCount = await SuperModel.countDocuments();
    if (supermarketsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await SuperModel.create(sample_supermarkets);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const supermarkets = await SuperModel.find();
    res.send(supermarkets);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const supermarkets = await SuperModel.find({ name: { $regex: searchRegex } });
    res.send(supermarkets);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await SuperModel.aggregate([
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
      count: await SuperModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const supermarkets = await SuperModel.find({ tags: req.params.tagName });
    res.send(supermarkets);
  })
);

router.get(
  '/:supermarketId',
  asyncHandler(async (req, res) => {
    const supermarket = await SuperModel.findById(req.params.supermarketId);
    res.send(supermarket);
  })
);

export default router;