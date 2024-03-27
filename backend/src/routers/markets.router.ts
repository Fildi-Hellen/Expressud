import { Router } from 'express';
import { sample_markets,sample_tags } from '../mark';
import asyncHandler from 'express-async-handler';
import { MarketModel } from '../models/market.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const marketsCount = await MarketModel.countDocuments();
    if (marketsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await MarketModel.create(sample_markets);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const markets = await MarketModel.find();
    res.send(markets);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const markets = await MarketModel.find({ name: { $regex: searchRegex } });
    res.send(markets);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await MarketModel.aggregate([
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
      count: await MarketModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const markets = await MarketModel.find({ tags: req.params.tagName });
    res.send(markets);
  })
);

router.get(
  '/:marketId',
  asyncHandler(async (req, res) => {
    const market = await MarketModel.findById(req.params.marketId);
    res.send(market);
  })
);

export default router;