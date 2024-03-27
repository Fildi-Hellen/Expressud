import { Router } from 'express';
import { sample_cosmetics,sample_tags } from '../cosme';
import asyncHandler from 'express-async-handler';
import { CosmeticModel } from '../models/cosmetic.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const cosmeticsCount = await CosmeticModel.countDocuments();
    if (cosmeticsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await CosmeticModel.create(sample_cosmetics);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const cosmetics = await CosmeticModel.find();
    res.send(cosmetics);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const cosmetics = await CosmeticModel.find({ name: { $regex: searchRegex } });
    res.send(cosmetics);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await CosmeticModel.aggregate([
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
      count: await CosmeticModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const cosmetics = await CosmeticModel.find({ tags: req.params.tagName });
    res.send(cosmetics);
  })
);

router.get(
  '/:cosmeticId',
  asyncHandler(async (req, res) => {
    const cosmetic = await CosmeticModel.findById(req.params.cosmeticId);
    res.send(cosmetic);
  })
);

export default router;