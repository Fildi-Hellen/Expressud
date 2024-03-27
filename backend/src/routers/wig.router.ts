import { Router } from 'express';
import { sample_hairs,sample_tags } from '../air';
import asyncHandler from 'express-async-handler';
import { HairModel } from '../models/hair.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const hairsCount = await HairModel.countDocuments();
    if (hairsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await HairModel.create(sample_hairs);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const hairs = await HairModel.find();
    res.send(hairs);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const hairs = await HairModel.find({ name: { $regex: searchRegex } });
    res.send(hairs);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await HairModel.aggregate([
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
      count: await HairModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const hairs = await HairModel.find({ tags: req.params.tagName });
    res.send(hairs);
  })
);

router.get(
  '/:hairId',
  asyncHandler(async (req, res) => {
    const hair = await HairModel.findById(req.params.hairId);
    res.send(hair);
  })
);

export default router;