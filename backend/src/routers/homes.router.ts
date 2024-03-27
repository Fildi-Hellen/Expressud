import { Router } from 'express';
import { sample_reals,sample_tags } from '../estate';
import asyncHandler from 'express-async-handler';
import { RealModel } from '../models/real.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const realsCount = await RealModel.countDocuments();
    if (realsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await RealModel.create(sample_reals);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const reals = await RealModel.find();
    res.send(reals);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const reals = await RealModel.find({ name: { $regex: searchRegex } });
    res.send(reals);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await RealModel.aggregate([
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
      count: await RealModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const reals = await RealModel.find({ tags: req.params.tagName });
    res.send(reals);
  })
);

router.get(
  '/:realId',
  asyncHandler(async (req, res) => {
    const real = await RealModel.findById(req.params.realId);
    res.send(real);
  })
);

export default router;