import { Router } from 'express';
import {sample_alcohols,sample_tags} from '../alcoh';
import asyncHandler from 'express-async-handler';
import { AlcoholModel} from '../models/alcohol.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const alcoholsCount = await AlcoholModel.countDocuments();
    if (alcoholsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await AlcoholModel.create(sample_alcohols);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const alcohols = await AlcoholModel.find();
    res.send(alcohols);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const alcohols = await AlcoholModel.find({ name: { $regex: searchRegex } });
    res.send(alcohols);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await AlcoholModel.aggregate([
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
      count: await AlcoholModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const alcohols = await AlcoholModel.find({ tags: req.params.tagName });
    res.send(alcohols);
  })
);

router.get(
  '/:alcoholId',
  asyncHandler(async (req, res) => {
    const alcohol = await AlcoholModel.findById(req.params.alcoholId);
    res.send(alcohol);
  })
);

export default router;