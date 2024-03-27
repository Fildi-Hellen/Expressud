import { Router } from 'express';
import { sample_pharms,sample_tags } from '../pharms';
import asyncHandler from 'express-async-handler';
import { PharmModel } from '../models/pharm.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const pharmsCount = await PharmModel.countDocuments();
    if (pharmsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await PharmModel.create(sample_pharms);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const pharms = await PharmModel.find();
    res.send(pharms);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const pharms = await PharmModel.find({ name: { $regex: searchRegex } });
    res.send(pharms);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await PharmModel.aggregate([
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
      count: await PharmModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const pharms = await PharmModel.find({ tags: req.params.tagName });
    res.send(pharms);
  })
);

router.get(
  '/:pharmId',
  asyncHandler(async (req, res) => {
    const pharm = await PharmModel.findById(req.params.pharmId);
    res.send(pharm);
  })
);

export default router;